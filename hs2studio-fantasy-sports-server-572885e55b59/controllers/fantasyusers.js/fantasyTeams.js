let fantasyTeams = require('../../models/fantasy-teams')

const moment = require('moment')

exports.createFantasyTeam = async (req,res)=>{
    const team = new fantasyTeams({
        name: req.body.teamName,
        players: req.body.players,
    });

    try {
        await team.save();
        res
          .status(200)
          .send({ message: "Team created Successfully", TeamCreated: team });
      } catch (err) {
        console.log("Error creating Team", err);
        res.status(500).send({ message: "Error Creating Team", error: err });
        return;
    }
    
}

exports.getFantasyTeams = async(req,res)=>{

    try{
        let teams = await fantasyTeams.find();
        res.status(200).send(teams)
    }
    catch(err)
    {
        res.status(500).send(err.message)
    }
}

exports.getFantasyTeamDetails = async(req,res)=>{

    let teamId = req.params.teamId
    try{
        let teams = await fantasyTeams.findById(teamId)
        res.status(200).send(teams)
    }
    catch(err)
    {
        res.status(500).send(err.message)
    }
}