import React, { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom'
import { joinedFantasyTeams, leaderBoard } from '../services/sports';
import { useSelector } from "react-redux";
import ShowTeam from './teamselect/ShowTeam';
const LeaderBoard = () => {

    const { matchId,contestId } = useParams()
    const [data,setData] = useState([])
    const userId = useSelector((state) => state.auth.id)
    const [myRank,setMyRank] = useState(0)
    const [userDetails,setUserDetails] = useState({})
    const [joinedTeams,setJoinedTeams] = useState([])
    const [modal,setModal] = useState(false)
    const [currTeam,setCurrTeam] = useState(null)

    const fetchJoinedTeams = async()=>{
        
        joinedFantasyTeams(matchId,contestId,userId)
          .then((res)=>{
              console.log(res)
              setJoinedTeams(res)
          })
          .catch((err)=>{
            console.log(err)
          })
    }

    const fetchLeaderBoard = async ()=>{
        leaderBoard(matchId,contestId,userId)
            .then((res)=>{
                console.log(res)
                setData(res.leaderboard)
                setMyRank(res.userRank)
                setUserDetails({...res.userDetails})
            })
            .catch((err)=>console.log(err))
    }

    useEffect(()=>{
        fetchLeaderBoard()
        fetchJoinedTeams()
    },[])

    return (
        <>
            {
                modal && currTeam && <ShowTeam team={currTeam} setModal={setModal}/>
            }
            <div className='flex justify-between mt-4 w-full'>

                    <div className="flex flex-col items-center justify-center w-full px-4">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-slate-700">Leaderboard</h2>
                        {/* Added a wrapper with a fixed height and overflow-y-auto */}
                        <div className="w-full max-w-4xl lg:max-w-6xl shadow-lg rounded-lg overflow-hidden">
                            <div className="max-h-[500px] overflow-y-auto">
                            <table className="w-full table-fixed">
                                <thead className="bg-slate-700 text-white sticky top-0">
                                <tr>
                                    <th className="w-1/5 px-4 py-2 text-sm md:text-base lg:text-lg text-center">Rank</th>
                                    <th className="w-2/5 px-4 py-2 text-sm md:text-base lg:text-lg text-left">User</th>
                                    <th className="w-2/5 pr-8 px-4 py-2 text-sm md:text-base lg:text-lg text-center">Points</th>
                                    {/* <th className="w-2/5 pr-8 px-4 py-2 text-sm md:text-base lg:text-lg text-center">Winning Amount (₹)</th> */}
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">
                                <tr className="bg-slate-200 hover:bg-slate-400 hover:shadow-lg hover:text-white transition duration-300 ease-in-out">
                                        <td className="px-4 py-3 text-sm md:text-base lg:text-lg text-center">{myRank+1}</td>
                                        <td className="px-4 py-3 text-sm md:text-base lg:text-lg text-left">{userDetails?.userName}</td>
                                        <td className="w-2/5 pr-8 px-4 py-3 text-sm md:text-base lg:text-lg text-center">{userDetails?.points}</td>
                                    {/* <td className="w-2/5 pr-8 px-4 py-3 text-sm md:text-base lg:text-lg text-center">{parseFloat(prize).toFixed(2)}</td> */}
                                </tr>
                                {data.map(({ rank, userName, points }, index) => (
                                    <tr key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-slate-200"} hover:bg-slate-400 hover:shadow-lg hover:text-white transition duration-300 ease-in-out`}>
                                        <td className="px-4 py-3 text-sm md:text-base lg:text-lg text-center">{index+1}</td>
                                        <td className="px-4 py-3 text-sm md:text-base lg:text-lg text-left">{userName}</td>
                                        <td className="w-2/5 pr-8 px-4 py-3 text-sm md:text-base lg:text-lg text-center">{points}</td>
                                    {/* <td className="w-2/5 pr-8 px-4 py-3 text-sm md:text-base lg:text-lg text-center">{parseFloat(prize).toFixed(2)}</td> */}
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
                    
                    <div className="flex  flex-col w-full px-4">
                        <h2 className="text-2xl md:text-3xl text-center lg:text-4xl font-bold mb-4 text-slate-700">Teams</h2>
                        {/* Added a wrapper with a fixed height and overflow-y-auto */}
                        <div className="w-full max-w-4xl lg:max-w-6xl shadow-lg rounded-lg overflow-hidden">
                            <div className="max-h-[500px] overflow-y-auto">
                            <table className="w-full table-fixed">
                                <thead className="bg-slate-700 text-white sticky top-0">
                                <tr>
                                    <th className="w-1/5 px-4 py-2 text-sm md:text-base lg:text-lg text-center">#</th>
                                    <th className="w-2/5 px-4 py-2 text-sm md:text-base lg:text-lg text-left">Teams</th>
                                    <th className="w-2/5 pr-8 px-4 py-2 text-sm md:text-base lg:text-lg text-center">Points</th>
                                    {/* <th className="w-2/5 pr-8 px-4 py-2 text-sm md:text-base lg:text-lg text-center">Winning Amount (₹)</th> */}
                                </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-200 bg-white">                        
                                {
                                    joinedTeams.map((team,index)=>(
                                
                                    <tr onClick={()=>{setModal(true);setCurrTeam(team.team)}} key={index} className={`${index % 2 === 0 ? "bg-white" : "bg-slate-200"} hover:bg-slate-400 hover:shadow-lg hover:text-white transition duration-300 ease-in-out`}>
                                        <td className="px-4 py-3 text-sm md:text-base lg:text-lg text-center">{index+1}</td>
                                        <td className="px-4 py-3 text-sm md:text-base lg:text-lg text-start">Team{index+1}</td>
                                        <td className="px-4 py-3 text-sm md:text-base lg:text-lg text-center">{team.points}</td>
                                    {/* <td className="w-2/5 pr-8 px-4 py-3 text-sm md:text-base lg:text-lg text-center">{parseFloat(prize).toFixed(2)}</td> */}
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                            </div>
                        </div>
                    </div>
            </div>
        </>
  );
};

export default LeaderBoard;