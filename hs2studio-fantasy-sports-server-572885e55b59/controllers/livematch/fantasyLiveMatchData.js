const fantasyLiveMatch = require('../../models/fantasy-live-match-data')
const Player = require('../../models/fantasy-players')
const Match = require('../../models/fantasy-matches')


exports.getFantasyLiveMatchData = async (req,res)=>{
    try
    {
        let matchId = req.params.matchId
        let matchData = await fantasyLiveMatch.findOne({matchId:matchId});
        if(matchData==null)
            return res.status(500).send("No such match exits")
        return res.status(200).send(matchData)
    }
    catch(err)
    {
        return res.status(500).send(err.message)
    }
}

exports.setFantasyMatchTeamCreate = async (req, res) => {
    try {
        let matchId = req.params.matchId;
        let teams = req.body.teams;
        let toss = req.body.toss;
        let battingFirst = req.body.battingFirst;
        let currentBatting = req.body.currentBatting;
        let currentBowling = req.body.currentBowling;
        let overs = req.body.overs;

    
        let matchData = await Match.findById(matchId);
    
        let teamsData = [];
        for (let teamKey in teams) {
            let team = teams[teamKey];
            let playersInfo = [];
            for (let playerId of team.players) {
                let player = await Player.findById(playerId);
                if (player) {
                    let playerInfo = {
                        playerId: player._id,
                        name: player.name,
                        role: player.role,
                        striker: false,
                        non_striker: false,
                        batting_hand: player.batting,
                        bowling_hand: player.bowling,
                        batting: {
                            runs: 0,
                            balls: 0,
                            fours: 0,
                            sixes: 0,
                            isDismissed: false
                        },
                        bowling: {
                            wickets: 0,
                            balls: 0,
                            runs: 0,
                            lbws: 0,
                            bowled: 0,
                            maidens: 0
                        },
                        fielding: {
                            catches: 0,
                            runout: {
                                direct: 0,
                                indirect: 0
                            },
                            stumpings: 0
                        }
                    };
                    playersInfo.push(playerInfo);
                } else {
                    return res.status(404).send(`Player with ID ${playerId} not found.`);
                }
            }
            teamsData.push({
                teamId: team.id,
                players: playersInfo

            });
        }
    
        let craeateMatch = new fantasyLiveMatch({
            matchId: matchId,
            teams: teamsData,
            toss: toss,
            battingFrist: battingFirst,
            currentBatting: currentBatting,
            currentBowling: currentBowling,
            overs: overs
        });
    
        await craeateMatch.save();
        return res.status(200).send({craeateMatch });
    } catch (err) {
        if (err.code === 11000 && err.keyPattern && err.keyPattern.matchId) {
            return res.status(400).send({ msg: "Match already got created" });
        } else {
            return res.status(500).send(err.message);
        }
    }
}


exports.updateFantasyLiveMatchData = async (io,req,res)=>{
    
    try{

        let matchId= req.params.matchId
        let ball = req.body.ballByBall
        let runs =  parseInt(ball.runs);
        let batRuns = parseInt(ball.runs);;
        let bowlRuns = parseInt(ball.runs);
        let batTeamPoints = 0;
        let bowlTeamPoints = 0;
        let batterPoints = 0;
        let bowlerPoints = 0;

        
        let match = await fantasyLiveMatch.findOne({matchId:matchId});
        if(match==null)
            return res.status(500).send("No such match exits")

        const battingTeam = match.teams.find(team=>team.teamId === match.currentBatting);
        const bowlingTeam = match.teams.find(team=>team.teamId === match.currentBowling);
        
        let extras = parseInt(ball.extras.byes) + parseInt(ball.extras.legByes) // adding the bye runs if they got any byes

        
        if(ball.extras.wide === true && ball.extras.noBall === true)
        {
            extras+= 2
            bowlRuns+=2
        }
        else if(ball.extras.wide === true || ball.extras.noBall === true)
        {
            extras+=1
            bowlRuns+=1
        }

        let striker = null
        if (battingTeam.strikerId) {

            striker = battingTeam.players.find(player => player.playerId === battingTeam.strikerId);
            batterPoints = batRuns                  // batter points
           

            if(ball.extras.wide === false || ball.extras.noBall === true)
                striker.batting.balls+=1            // batting balls update
                    
                     
            if(batRuns==4)
            {
                striker.batting.fours +=1           // batting fours update
                batterPoints+=1
                batTeamPoints+=1
            }        

            if(batRuns==6)
            {
                striker.batting.fours +=1           // batting six update
                batterPoints+=2
                batTeamPoints+=2
            }

            
            striker.batting.runs += batRuns;            // batting runs update
            striker.fantasyPoints+= batterPoints

        }

        let bowler = null
        if(bowlingTeam.currentBowlerId)
        {
            bowler = bowlingTeam.players.find(player=>player.playerId===bowlingTeam.currentBowlerId);
            bowler.bowling.runs+= bowlRuns     // bowler runs update
            
            if(ball.extras.wide === false && ball.extras.noBall === false)
            {
                bowler.bowling.balls += 1      // bowler balls update
                battingTeam.ball+=1            // batting team balls update
            }
        } 
       
        let fielder = null
        if(ball.wicket.isOut === true)
        {
            if(ball.wicket.type === "runout")
            {
                if(ball.wicket.playersInvolved.length == 1)
                {
                    fielder = bowlingTeam.players.find(ball.wicket.playersInvolved[0])
                    fielder.fielding.runout.direct++;              
                    fielder.fantasyPoints+=12
                }
                else
                {
                    ball.wicket.playersInvolved.forEach(playerId => {
                        fielder = bowlingTeam.players.find(player => player.playerId === playerId);
                        fielder.fielding.runout.indirect++; // Or indirect
                        fielder.fantasyPoints+=6
                    });
                }
                bowlTeamPoints+=12
            }
            else if(ball.wicket.type === "stump")
            {
                fielder = bowlingTeam.players.find(ball.wicket.fielderId)  
                fielder.fielding.stumpings+=1
                fielder.fantasyPoints+=12
                bowlTeamPoints+=12
            }
            else
            {
                if(ball.wicket.type === 'catch')
                {
                    fielder = bowlingTeam.players.find(player=> player.playerId===ball.wicket.fielderId)  
                    fielder.fielding.catches+=1
                    fielder.fantasyPoints+=8
                    bowlTeamPoints+=8
                }
                else
                    bowler.bowling[ball.wicket.type]+=1

                bowlerPoints+=25
                // updating the bowler wickets
                bowler.bowling.wickets+=1
                if(bowler.bowling.wickets==4)
                    bowlerPoints+=8

                if(bowler.bowling.wickets==5)
                    bowlerPoints+=16

                bowler.fantasyPoints += bowlerPoints
                bowlingTeam.teamPoints += bowlTeamPoints + bowlerPoints
            }

            let batsman = battingTeam.players.find(player=> player.playerId === ball.wicket.batsmanId)
            batsman.batting.isDismissed= true
            battingTeam.wickets+=1
        }

        runs += extras
        batTeamPoints = runs
        battingTeam.score += runs               // batting teamscore update
        battingTeam.teamPoints += batTeamPoints;
        // update striker
        if ((runs+extras) % 2 === 1 ) {
            const temp = battingTeam.strikerId;
            battingTeam.strikerId = battingTeam.nonStrikerId;
            battingTeam.nonStrikerId = temp;
        }

        // update extra
        battingTeam.extras += extras
        
        // update over

        if(battingTeam.ball===6)
        {
            battingTeam.over+=1
            battingTeam.ball = 0
        }

        // updations of database
        let updatedTeams = match.teams.map(team => {
            if (team.teamId === battingTeam.teamId)
                return battingTeam;
            if (team.teamId === bowlingTeam.teamId)
                return bowlingTeam;
            return team;
        });

        match.teams = updatedTeams;
        
        let result  = await match.save(); // Save the modified match document to the database
        let scoreData = await getLiveScoreData(matchId)
        io.emit('liveScoreUpdated', scoreData);
        return res.status(200).send(result)
    }
    catch(err)
    {
        console.log(err)
        return res.status(500).send(err.message)
    }
}

async function getLiveScoreData(matchId) {
    
    try{
        let match = await fantasyLiveMatch.findOne({'matchId':matchId})
        let matchDetails = await Match.findById(matchId)
        // console.log(matchDetails)
        if(!match)
            throw "no such match exist"

        let battingTeam = match.teams.find(team=>team.teamId === match.currentBatting)
        let bowlingTeam = match.teams.find(team=>team.teamId === match.currentBowling)
        
        let striker = battingTeam.players.find(player => player.playerId === battingTeam.strikerId)
        let nonstriker = battingTeam.players.find(player=>player.playerId===battingTeam.nonStrikerId)
        let bowler = bowlingTeam.players.find(player=>player.playerId === bowlingTeam.currentBowlerId)


        let scoreDetails = {
            score: battingTeam.score,
            wickets: battingTeam.wickets,
            overs: battingTeam.over+"."+battingTeam.ball,
            crr: (battingTeam.score / (battingTeam.over + (battingTeam.ball / 6))).toFixed(2),
            match: matchDetails.teamA.name +" X " + matchDetails.teamB.name
        }
        return {
                    scoreDetails,
                    striker: {
                        playerId: striker.playerId,
                        name: striker.name,
                        fantasyPoints: striker.fantasyPoints,
                        batting: striker.batting,
                        sr: ((striker.batting.runs / striker.batting.balls)*100).toFixed(2)
                    },                  
                    nonstriker:{
                        playerId: nonstriker.playerId,
                        name: nonstriker.name,
                        fantasyPoints: nonstriker.fantasyPoints,
                        batting: nonstriker.batting,
                        sr: ((nonstriker.batting.runs / nonstriker.batting.balls)*100).toFixed(2)
                    },
                        bowler:{
                            playerId: bowler.playerId,
                            name: bowler.name,
                            fantasyPoints: bowler.fantasyPoints,
                            bowler: bowler.bowling,
                            ec: (bowler.bowling.runs /(bowler.bowling.overs + (bowler.bowling.balls/6))).toFixed(2)
                        }
                }
    }
    catch(err)
    {
       throw err
    }
}

exports.getCurrentFieldingPlayers = async(req,res)=>{
    try{
        let matchId = req.params.matchId
        let match = await fantasyLiveMatch.findOne({'matchId':matchId})
        let bowlingTeam = match.teams.find(team=>team.teamId === match.currentBowling)
        let fieldingPlayers = bowlingTeam.players.map((player)=>{
            return {
                playerId: player.playerId,
                name: player.name
            }
        })
        // console.log(fieldingPlayers)
        return res.status(200).send(fieldingPlayers)
    }
    catch(err)
    {
        console.log(err)
        return res.status(400).send(err)
    }
}

exports.matchLiveScore = async(req,res)=>{

    try{
        let matchId = req.params.matchId
        let scoreData = await getLiveScoreData(matchId)
        return res.status(200).send(scoreData)
    }
    catch(err)
    {
        console.log(err)
        return res.status(400).send(err)
    }
}