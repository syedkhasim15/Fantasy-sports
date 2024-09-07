import React from 'react';

const TeamSummary = ({ matchDetails }) => {
  const { teamA, teamB } = matchDetails;

  return (
    <>
      <div className="bg-gradient-to-r from-slate-400 to-slate-50 w-[50%] flex flex-row p-0.5 rounded-md justify-between shadow-lg shadow-slate-600">
            <p className="bg-red-700 text-white font-bold text-lg px-2 py-0.5 rounded-md">{teamA.name}</p>
            <p className="text-black text-lg font-bold">{matchDetails[teamA.teamId].overs} overs</p>
            <p className="bg-red-700 text-white font-bold text-lg px-2 py-0.5 rounded-md">{matchDetails[teamA.teamId].score}-{matchDetails[teamA.teamId].wickets}</p>
      </div>
      <div className='flex flex-row justify-between w-[50%]'>
        <div className='flex flex-col w-[40%] gap-y-1'>
          {matchDetails[teamA.teamId].topBatsmen.map((batsman, index) => (
            <div key={index} className='flex flex-row justify-between w-full bg-gradient-to-r from-slate-400 to-slate-50 rounded-md shadow-md shadow-gray-500'>
              <p className='ml-2 text-black font-bold w-[85%]'>{batsman.name}</p>
              <p className='mr-2 text-white font-bold bg-red-700 px-2 py-0.5 w-[15%] text-center rounded-r-md shadow-md shadow-gray-500'>{batsman.runs}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-col w-[40%] gap-y-1'>
          {matchDetails[teamB.teamId].topBowlers.map((bowler, index) => (
            <div key={index} className='flex flex-row justify-between w-full bg-gradient-to-r from-slate-400 to-slate-50 rounded-md shadow-md shadow-gray-500'>
              <p className='ml-2 text-black font-bold w-[85%]'>{bowler.name}</p>
              <p className='mr-2 text-white font-bold bg-yellow-600 px-2 py-0.5 w-[15%] text-center rounded-r-md shadow-md shadow-gray-500'>{bowler.wickets}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-400 to-slate-50 w-[50%] flex flex-row p-0.5 rounded-md justify-between shadow-lg shadow-slate-600">
            <p className="bg-red-700 text-white font-bold text-lg px-2 py-0.5 rounded-md">{teamB.name}</p>
            <p className="text-black text-lg font-bold">{matchDetails[teamB.teamId].overs} overs</p>
            <p className="bg-red-700 text-white font-bold text-lg px-2 py-0.5 rounded-md">{matchDetails[teamB.teamId].score}-{matchDetails[teamB.teamId].wickets}</p>
      </div>
      <div className='flex flex-row justify-between w-[50%]'>
        <div className='flex flex-col w-[40%] gap-y-1'>
          {matchDetails[teamB.teamId].topBatsmen.map((batsman, index) => (
            <div key={index} className='flex flex-row justify-between w-full bg-gradient-to-r from-slate-400 to-slate-50 rounded-md shadow-md shadow-gray-500'>
              <p className='ml-2 text-black font-bold w-[85%]'>{batsman.name}</p>
              <p className='mr-2 text-white font-bold bg-red-700 px-2 py-0.5 w-[15%] text-center rounded-r-md shadow-md shadow-gray-500'>{batsman.runs}</p>
            </div>
          ))}
        </div>
        <div className='flex flex-col w-[40%] gap-y-1'>
          {matchDetails[teamA.teamId].topBowlers.map((bowler, index) => (
            <div key={index} className='flex flex-row justify-between w-full bg-gradient-to-r from-slate-400 to-slate-50 rounded-md shadow-md shadow-gray-500'>
              <p className='ml-2 text-black font-bold w-[85%]'>{bowler.name}</p>
              <p className='mr-2 text-white font-bold bg-yellow-600 px-2 py-0.5 w-[15%] text-center rounded-r-md shadow-md shadow-gray-500'>{bowler.wickets}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-gradient-to-r from-slate-400 to-slate-50 w-[50%] h-10 flex flex-row p-0.5 rounded-md justify-center shadow-lg shadow-slate-600">
            <p className="font-bold text-xl">
              {!matchDetails.matchCompleted?'Match is Still in progress ...':matchDetails[teamB.teamId].score>matchDetails[teamA.teamId].score ? `${teamB.name} won`: `${teamA.name} won`}
            </p>
      </div>
    </>
      
  );
};

export default TeamSummary;
