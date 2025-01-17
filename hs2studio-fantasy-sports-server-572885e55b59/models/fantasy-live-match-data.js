const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const ballByBallSchema = new Schema({
//     over: { type: Number, required: true },
//     ball: { type: Number, required: true },
//     runs: { type: Number, required: true },
//     extras: { type: Number, default: 0 },
//     wicket: { type: Boolean, default: false },
//     strikerId: { type: String, required: true },
//     nonStrikerId: { type: String, required: true },
//     bowlerId: { type: String, required: true }
// }, { _id: false });

const playerBattingSchema = new Schema({
    runs: { type: Number, default: 0 },
    balls: { type: Number, default: 0 },
    fours: { type: Number, default: 0 },
    sixes: { type: Number, default: 0 },
    isDismissed: { type: Boolean, default: false }
}, { _id: false }); 

const playerBowlingSchema = new Schema({
    wickets: { type: Number, default: 0 },
    overs: {type: Number,default:0},
    balls: { type: Number, default: 0 },
    runs: { type: Number, default: 0 },
    lbws: { type: Number, default: 0 },
    bowled: { type: Number, default: 0 },
    maidens: { type: Number, default: 0 }
}, { _id: false }); 

const playerRunoutSchema = new Schema({
    direct: { type: Number, default: 0 },
    indirect: { type: Number, default: 0 }
}, { _id: false }); 

const playerFieldingSchema = new Schema({
    catches: { type: Number, default: 0 },
    runout: playerRunoutSchema,
    stumpings: { type: Number, default: 0 }
}, { _id: false }); 



const playerSchema = new Schema({
    
    playerId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    fantasyPoints: {type:Number,default:0},
    // striker: { type: Boolean, default: false },
    // non_strinker:{ type: Boolean, default: false },
    // curr_bowler:{type:Boolean,default:false},
    batting_hand:{ type: String, required: true },
    bowling_hand:{ type: String, required: true },
    batting: playerBattingSchema,
    bowling: playerBowlingSchema,
    fielding: playerFieldingSchema
}, { _id: false }); 


const matchSchema = new Schema({
    matchId: { type: String, required: true, unique: true },
    // ballByBall: [ballByBallSchema],
    teams: [
        {
            teamId: { type: String, required: true },
            score: { type: Number, default: 0 },
            wickets: { type: Number, default: 0 },
            extras: { type: Number, default: 0 },
            players: [playerSchema],
            over: {type: Number,default:0},
            ball: {type:Number,default:0},
            extras: {type:Number, default: 0},
            teamPoints: {type:Number,default:0},
            strikerId: { type: String, default: "66069d0c7d9bfc89e22d975b" },
            nonStrikerId: { type: String, default: "66069d0c7d9bfc89e22d975c" },
            currentBowlerId: { type: String, default: "66069d0c7d9bfc89e22d9755" },
             _id: false 
        },
    ],
    toss: { type: String, required: true }, 
    battingFrist: {type: String,required:true},
    currentBatting: {type:String,required:true},
    currentBowling: {type:String,required:true},
    overs: {type:Number,required:true}
});

const Match = mongoose.model('MatchData', matchSchema, 'fantasy-live-match-data');

module.exports = Match;

