import axios from "axios";
import React, { useEffect, useState } from "react";

const ScoreCard = () => {
  const [matchScore, setMatchScore] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          "http://localhost:8000/admin/matchScoreCard/660686077d9bfc89e22d9724"
        );
        console.log(res.data);
        setMatchScore(res.data);
        console.log(matchScore);
      } catch (err) {
        console.log("Error fetching match summary", err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {matchScore.map((team, index) => (
        <div key={index} className="w-full flex flex-col items-center">
          <div className="flex flex-row justify-between bg-indigo-700 w-[80%] font-bold text-white p-2">
            <p>{team.teamInfo.teamName}</p>
            <p>
              {team.teamInfo.score}/{team.teamInfo.wickets} (
              {team.teamInfo.overs})
            </p>
          </div>
          <div className="grid grid-cols-7 bg-slate-400 gap-4 text-black font-bold text-lg text-start pl-2 w-[80%]">
            <div className="col-span-2">Batter</div>
            <div>R</div>
            <div>B</div>
            <div>4s</div>
            <div>6s</div>
            <div>SR</div>
          </div>
          {team.batsmen.map((batsman, index) => (
            <div
              key={index}
              className="grid grid-cols-7 bg-slate-50 gap-4 font-medium text-sm text-start pl-2 w-[80%] border-b-2 border-gray-300"
            >
              <div className="col-span-2 flex flex-col p-2">
                <div className="text-indigo-500">{batsman.name}</div>
                <div className="">{batsman.getOutBy}</div>
              </div>
              <div className="pt-4">{batsman.runs}</div>
              <div className="pt-4">{batsman.balls}</div>
              <div className="pt-4">{batsman.fours}</div>
              <div className="pt-4">{batsman.sixes}</div>
              <div className="pt-4">{batsman.strikeRate}</div>
            </div>
          ))}
          <div className="grid grid-cols-5 bg-slate-400 gap-4 text-black font-bold text-lg text-start pl-2 w-[80%]">
            <div className="col-span-2">Bowler</div>
            <div>R</div>
            <div>O</div>
            <div>ER</div>
          </div>
          {team.bowlers.map((bowler, index) => (
            <div
              key={index}
              className="grid grid-cols-5 bg-slate-50 gap-4 font-medium text-sm text-start pl-2 w-[80%] border-b-2 border-gray-300"
            >
              <div className="col-span-2 p-2">
                <div className="text-indigo-500">{bowler.name}</div>
              </div>
              <div className="pt-4">{bowler.runs}</div>
              <div className="pt-4">{bowler.overs}</div>
              <div className="pt-4">{bowler.economy}</div>
            </div>
          ))}

          <div className="grid grid-cols-7 bg-slate-200 gap-4 font-medium text-sm text-start pl-2 w-[80%] border-b-2 border-gray-300">
            <div className="col-span-2 flex flex-col p-2">Extras</div>
            <div className="col-start-3 col-end-7 pt-2">
              {team.teamInfo.extras}
            </div>
          </div>
          <div className="grid grid-cols-7 bg-slate-200 gap-4 font-medium text-sm text-start pl-2 w-[80%] border-b-2 border-gray-300">
            <div className="col-span-2 flex flex-col p-2">Total</div>
            <div className="col-start-3 col-end-7 pt-2">
              {team.teamInfo.score}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ScoreCard;
