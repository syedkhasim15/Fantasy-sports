import { React, useState } from "react";
import {useNavigate,useParams} from 'react-router-dom'
import "boxicons";
import JoinContestModal from "../JoinContestModal";
//Progress bar representing the contest user count
const ProgressBar = ({
  progress,
  bgColor = "bg-gray-200",
  fillColor = "bg-blue-600",
}) => {
  // Ensure progress does not go outside 0 to 100 bounds.
  const validProgress = Math.min(100, Math.max(0, progress));

  return (
    <div className={`w-full ${bgColor} rounded-full h-2 dark:bg-gray-700`}>
      <div
        style={{ width: `${validProgress}%` }}
        className={`${fillColor} h-2 rounded-full transition-width duration-200 ease-in-out`}
      />
    </div>
  );
};

// HoverInfo Component
const HoverInfoLeft = ({ children, info }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="inline-block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute -left-56 mt-2 w-auto px-4 py-2 text-sm text-green-900 bg-green-100 rounded shadow-lg max-w-xs">
          {info}
        </div>
      )}
    </div>
  );
};

const HoverInfoRight = ({ children, info }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="inline-block relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div
          className="absolute left-0 mt-2 w-auto min-w-max px-4 py-2 text-sm text-green-900 bg-green-100 rounded shadow-lg"
          style={{ whiteSpace: "nowrap" }}
        >
          {info}
        </div>
      )}
    </div>
  );
};

const Contests = ({contestDetails}) => {

  const {matchId} = useParams()
  const [modal,setModal] = useState(false)
  const navigate = useNavigate()
  console.log(contestDetails)
  return (
    <div className="flex flex-col justify-center items-center">
      {
        modal && <JoinContestModal contestId={contestDetails.contestId}  setModal={setModal}/>
      }
      <div className="w-full max-w-full 2xl:max-w-4xl xl:max-w-2xl lg:max-w-1xl md:max-w-lg sm:max-w-md xs:w-full p-6 m-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 divide-y divide-slate-200">
        {/* Row 1: Only Text */}
        <div className="mb-2 justify-between flex dark:text-white">
          <p className="text-gray-700 dark:text-white">{contestDetails.name}</p>
          <p onClick={()=>navigate(`/view-contest/${matchId}/${contestDetails.contestId}`)} className="text-blue-300 hover:text-blue-600">View contest</p>
        </div>

        {/* Row 2 */}
        <div className="mb-2 pb-4">
          <div className="p-4">
            <div className="flex justify-between items-center pb-4">
              <div className="flex items-center space-x-2">
                <p className="text-lg text-gray-600 dark:text-gray-400 ">
                  ₹{contestDetails.poolMoney}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded transition duration-150 ease-in-out"
                  onClick={()=>setModal(true)}
                >
                  ₹{contestDetails.entryPrize}
                </button>
              </div>
            </div>
            <ProgressBar
              progress={((contestDetails.joinedUsers)/contestDetails.count)*100}
              bgColor="bg-red-200"
              fillColor="bg-red-500"
            />
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <p className="text-md text-red-600 dark:text-gray-400 pl-4">
                {contestDetails.count-contestDetails.joinedUsers}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-md text-gray-600 dark:text-gray-400 pr-4">
                {contestDetails.count} spots
              </p>
            </div>
          </div>
        </div>

        {/* Row 3: Icons with Text */}
        <div className="flex justify-between pt-4">
          <HoverInfoRight info="First Prize = ₹ 280">
            <div className="flex items-center space-x-2">
              <svg
                className="h-6 w-6 flex-none fill-green-100 stroke-green-500 stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <text
                  x="12"
                  y="16"
                  text-anchor="middle"
                  font-size="10"
                  fill="white"
                >
                  1st
                </text>
              </svg>
              <p className="text-md text-gray-600 dark:text-gray-400">
                
              </p>
            </div>
          </HoverInfoRight>

          <HoverInfoRight info="315 Teams win the contest">
            <div className="flex items-center space-x-2">
              <box-icon name="trophy" color="#32cd32"></box-icon>
              <p className="text-md text-gray-600 dark:text-gray-400">57%</p>
            </div>
          </HoverInfoRight>

          <HoverInfoRight info="Max 2 entries per user">
            <div className="flex items-center space-x-2">
              <box-icon type="logo" name="medium" color="#32cd32"></box-icon>
              <p className="text-md text-gray-600 dark:text-gray-400">
                
              </p>
            </div>
          </HoverInfoRight>

          <HoverInfoLeft info="Takes place even if 2 spots fill, and the Prize Pool will depend on how many spots are filled.">
            <div className="flex items-center space-x-2">
              <svg
                className="h-6 w-6 flex-none fill-green-100 stroke-green-500 stroke-2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="11" />
                <path
                  d="m8 13 2.165 2.165a1 1 0 0 0 1.521-.126L16 9"
                  fill="none"
                />
              </svg>
              <p className="text-md text-gray-600 dark:text-gray-400">
                Flexible
              </p>
            </div>
          </HoverInfoLeft>
        </div>
      </div>
      
    </div>
  );
};

export default Contests;
