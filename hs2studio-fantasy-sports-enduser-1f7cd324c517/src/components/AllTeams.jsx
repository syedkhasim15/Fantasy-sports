import React, { useEffect, useState } from 'react';
import ShowTeam from './teamselect/ShowTeam';

export default function AllTeams({ userTeams }) {
    

    const [currTeam,setCurrTeam] = useState(null)
    const [modal,setModal] = useState(true)

    return (
        <>
        
            {
                modal && currTeam && <ShowTeam team={currTeam} setModal={setModal}/>
            }
            {
                userTeams && 
                <div className="grid grid-cols-3 gap-4">
                {userTeams.map((team, index) => (
                    <div onClick={()=>{setModal(true);setCurrTeam(team.team)}} key={index} className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 to-blue-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <div className="p-4">
                            <p className="text-white font-bold text-lg mb-2">Team {index + 1}</p>
                        </div>
                    </div>
                ))}
                {userTeams.map((team, index) => (
                    <div key={index} className="rounded-lg overflow-hidden shadow-lg bg-gradient-to-br from-blue-500 to-blue-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1">
                        <div className="p-4">
                            <p className="text-white font-bold text-lg mb-2">Team {index + 1}</p>
                            {/* Other team details can go here */}
                        </div>
                    </div>
                ))}
            </div>
            }
        </>
    );
}
