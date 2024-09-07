import React, { useEffect, useState } from 'react'
import { getContests } from '../services/sports'
import Contests from './teamselect/Contests'

export default function ShowContest({matchId}) {

    const [constest,setContest] = useState([])

    useEffect(()=>{
        getContests(matchId)
            .then((res)=>{
                setContest(res)
                console.log(constest);
            })
            .catch((res)=>console.log(res))
    },[])
    return (
        <div>   
            {
                constest.map((con)=>(
                    <Contests key={con.contestId} contestDetails={con}/>
                ))
            }
        </div>
    )
}
