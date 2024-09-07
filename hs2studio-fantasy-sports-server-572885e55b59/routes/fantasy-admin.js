const express = require('express');
const router = express.Router();
const { getFantasyLiveMatchData, setFantasyMatchTeamCreate, updateFantasyLiveMatchData, getCurrentFieldingPlayers } = require('../controllers/livematch/fantasyLiveMatchData');
const { createFantasyMatch } = require('../controllers/fantasyusers.js/fantasyMatches');

// Define route handlers
module.exports = function(io) {
    router.get('/fantasy-match-details/:matchId', getFantasyLiveMatchData);
    router.post('/fantasy-match-details/:matchId', setFantasyMatchTeamCreate);
    router.put('/fantasy-match-details/:matchId', (req, res) => {
        updateFantasyLiveMatchData(io, req, res); 
    });
    router.post('/match-create',createFantasyMatch)
    router.get('/match-fieldingPlayers/:matchId',getCurrentFieldingPlayers)

    return router;
};
