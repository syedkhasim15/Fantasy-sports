import { useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layouts";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Matches from "./pages/Matches";
import TeamSelect from "./pages/Teamselect";
import SportLanding from "./pages/SportLanding";
import MatchSummary from "./components/MatchSummary";
import PointsCalculation from "./pages/PointsCalculation";
import LeaderBoard from "./components/LeaderBoard";
import LandingPage from "./pages/LandingPage";
import FantasyInfo from './pages/FantasyInfo'
import AboutSection from "./pages/AboutSection";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/landing" element ={<LandingPage/>}/>
            <Route path="/aboutus" element ={<AboutSection/>}/>
            <Route path="/howtoplay" element = {<FantasyInfo/>}/>
            <Route path="/pointsinfo" element={<PointsCalculation />} />
            <Route path="/:sportId/:leagueId" element={<Matches />} />
            <Route path="/teamselect/:matchId" element={<TeamSelect />} />
            <Route path="/:sportId" element={<SportLanding/>} />
            <Route path="/matchsummary" element={<MatchSummary />} />
            <Route path="view-contest/:matchId/:contestId" element={<LeaderBoard/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
