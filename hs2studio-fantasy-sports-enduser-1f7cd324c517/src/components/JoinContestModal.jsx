import React from 'react';
import { joinContest } from '../services/sports';
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const JoinContestModal = ({setModal,contestId}) => {

  const {matchId} = useParams()
  const userId = useSelector((state) => state.auth.id)
  const onJoinContest = (e)=>{
    e.preventDefault()
    const joiningDetails = {
      userId,
      contestId
    }
    joinContest(matchId,{joiningDetails})
      .then((res)=>{
        alert(res)
        setModal(false)
      })
      .catch((err)=>{
        console.log(err)
      })
  }
  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto">
        <div className="flex items-center justify-center min-h-screen bg-gray-500/75">
          <div className="bg-white p-16 rounded-lg">
            <form action="" onSubmit={onJoinContest}>
              <p className="text-1xl font-semibold mb-4">Click yes to Join the Contest</p>
              <div className="flex justify-between">
                <button type='submit' className="bg-blue-500 w-full hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">Yes</button>
                <button onClick={()=>setModal(false)} className="bg-red-500 w-full hover:bg-red-600 text-white font-bold py-2 px-4 rounded">No</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default JoinContestModal;