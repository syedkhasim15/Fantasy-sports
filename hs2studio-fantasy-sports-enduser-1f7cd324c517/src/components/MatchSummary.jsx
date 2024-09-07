import React, { useState, useRef } from "react";
import ipl_amazing_moments from "../assets/ipl_amazing_moments.mp3";
import TeamSummary from "./TeamSummary";
import { useEffect } from "react";
import axios from "axios";

const MatchSummary = () => {
  const [play, setPlay] = useState(false);
  const audioRef = useRef(new Audio(ipl_amazing_moments));
  const [matchSummary, setMatchSummary] = useState(null);

  const toggleAudio = () => {
    const audio = audioRef.current;
    setPlay(!play);
    if (!play) {
      audio.play();
    } else {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8000/admin/matchSummary/660686077d9bfc89e22d9724"
        );
        console.log(response.data);
        setMatchSummary(response.data);
      } catch (error) {
        console.error("Error fetching match summary:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div
      onClick={toggleAudio}
      className="w-full h-screen flex flex-col justify-center items-center gap-y-6 bg-[url('https://img.freepik.com/free-vector/realistic-soccer-football-stadium-illustration_52683-60377.jpg?w=1380&t=st=1712246800~exp=1712247400~hmac=bd5d446cdacc0e696183902d6e03152fd7cf1551bc589f30319a49831e56abd7')] bg-cover"
    >
      <div className="flex flex-row bg-gradient-to-r from-slate-400 to-slate-50 w-[50%] shadow-lg shadow-slate-800 rounded-lg py-4 items-center">
        <img
          className="pl-8 w-25 h-14 rounded-lg shadow-md shadow-slate-400"
          src="https://upload.wikimedia.org/wikipedia/mr/3/35/DLF_IPL_logo.png"
        />
        <p className="pl-32 font-bold text-4xl">MATCH SUMMARY</p>
      </div>
      {matchSummary && <TeamSummary matchDetails={matchSummary} />}
    </div>
  );
};

export default MatchSummary;
