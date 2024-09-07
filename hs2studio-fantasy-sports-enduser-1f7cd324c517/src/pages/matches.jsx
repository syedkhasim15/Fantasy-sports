import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getMatches } from "../services/sports";

const Matches = () => {
  const [matches, setMatches] = useState([]);
  const { sportId, leagueId } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await getMatches(leagueId);
        console.log(response.data);
        setMatches(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div className="flex items-center flex-col justify-center w-[100%] h-auto bg-blue-100 mt-14">
      <div className="flex h-20 w-full bg-indigo-950 text-white items-center justify-start ">
        <h1 className="text-4xl pl-[7%] font-bold font-BebasNeue">Matches</h1>
      </div>
      <div
        className="flex flex-col w-[80%] justify-center items-center rounded-xl bg-white m-5 border-2 border-slate-200"
        id="match-outer-card"
      >
        {matches.map((key, index) => (
          <div className="flex flex-row w-full border-b-2 border-gray-400">
            <div className="flex flex-col basis-1/6 items-start pl-5 justify-center  border-r-2 border-red-600 border-dotted">
              <div className="flex flex-row items-center my-1">
                <div className="flex text-sm border-2 border-red-600 py-1 px-2">
                  MATCH {key.matchNo}
                </div>
                <div className="h-[2px] w-[80px] flex  bg-red-600"></div>
              </div>
              <div className="my-5">
                <h1 className="font-bold text-xl">APR, MON 1</h1>
                <p className="text-base">7:30 pm IST</p>
              </div>
            </div>
            <div className="flex basis-5/6 flex-col  p-5">
              <div className="flex py-1 px-2">Wankhede Stadium, Mumbai</div>
              <div className="flex flex-row justify-center py-[30px] ">
                <div className="text-xl font-bold flex basis-5/6 gap-x-5">
                  <div className="flex justify-center items-center">
                    <img
                      src="https://scores.iplt20.com/ipl/teamlogos/MI.png"
                      width="60px"
                      alt=""
                    />{" "}
                    <span>{key.teamA.name}</span>{" "}
                  </div>
                  <div className="flex justify-center items-center font-semibold">
                    VS
                  </div>
                  <div className="flex justify-center items-center">
                    <img
                      src="https://scores.iplt20.com/ipl/teamlogos/MI.png"
                      width="60px"
                      alt=""
                    />{" "}
                    <span>{key.teamB.name}</span>{" "}
                  </div>
                </div>
                <div className="flex basis-1/6 h-[60%] justify-center items-center">
                  <Link
                    to={`/teamselect/${key._id}`}
                    className="bg-[#ef4123] px-5 py-2.5 rounded-sm text-white font-bold -skew-x-[18deg] hover:border-2 hover:border-[#ef4123] hover:bg-white hover:text-[#ef4123] transition-all duration-300 text-xs"
                  >
                    MATCH CENTRE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Matches;
