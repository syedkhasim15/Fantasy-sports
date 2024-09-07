const express = require('express')
const { getFantasySports, getFantasyLeague } = require('../controllers/fantasyusers.js/fantasySportsLeagues')
const { getFantasyMatches, getFantasyMatch, getFantasyMatches_SportId, getFantasyMatches_LeagueId, getFantasyTeams_LeagueId } = require('../controllers/fantasyusers.js/fantasyMatches')
const { getFantasyTeams, getFantasyTeamDetails } = require('../controllers/fantasyusers.js/fantasyTeams')
const { matchLiveScore } = require('../controllers/livematch/fantasyLiveMatchData')

const router = express.Router()

router.get('/fantasy-sports',getFantasySports)
router.get('/fantasy-league/:sportId',getFantasyLeague)
router.get("/fantasy-matches",getFantasyMatches)
router.get("/fantasy-matches/sport/:sportId",getFantasyMatches_SportId)
router.get("/fantasy-matches/league/:leagueId",getFantasyMatches_LeagueId)
router.get("/fantasy-match/:matchId",getFantasyMatch)
router.get("/fantasy-teams",getFantasyTeams)
router.get('/fantasy-teamDetails/:teamId',getFantasyTeamDetails)
router.get('/fantasy-teams/league/:leagueId',getFantasyTeams_LeagueId)
router.get('/matchlive-score/:matchId',matchLiveScore)


module.exports = router