import React from "react";

const ShowTeam = ({ userTeam }) => {
  console.log(userTeam.team[0]);

  return (
    <div className="flex flex-col w-full h-[100%] bg-[url('src/assets/5205447.jpg')] bg-cover bg-center p-4 text-center">
      <div className="row-1 flex flex-row justify-between w-full h-[33%]">
        <div className="flex flex-col items-center w-1/4">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[0].playerName}</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[1].playerName}</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[2].playerName}</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[3].playerName}</p>
          </div>
        </div>
      </div>
      <div className="row-2 flex flex-row justify-around w-full h-[33%] px-5">
        <div className="flex flex-col items-center w-1/3">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[4].playerName}</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[5].playerName}</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/3">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[6].playerName}</p>
          </div>
        </div>
      </div>
      <div className="row-3 flex flex-row justify-between w-full h-[33%]">
        <div className="flex flex-col items-center w-1/4">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[7].playerName}</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[8].playerName}</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[9].playerName}</p>
          </div>
        </div>
        <div className="flex flex-col items-center w-1/4">
          <img
            src="https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/IPLHeadshot2024/57.png"
            alt=""
            width={"150px"}
          />
          <div className="font-bold bg-white px-5 rounded-sm">
            <p>{userTeam.team[10].playerName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowTeam;
