import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addPlayer } from "../redux/playerSlice";
import "boxicons";

const SelectPlayers = ({ playerData, addPlayer, playerList }) => {
  // const dispatch = useDispatch();
  // const playerData = useSelector((state) => state.players.matchPlayerList);
  // console.log(matchPlayerList)
  // const selectTeam = useSelector((state) => state.players.selectTeam);

  const addPlayerToList = (playerObject) => {
    if (playerList.includes(playerObject)) {
      alert("Player Already Selected");
    } else {
      addPlayer([...playerList, playerObject]);
    }
  };

  const removePlayer = (playerObject) => {
    let indexToRemove = playerList.indexOf(playerObject);
    if (indexToRemove !== -1) {
      addPlayer((prevItems) => {
        return prevItems.filter((item, index) => index !== indexToRemove);
      });
    } else {
      alert("Player Not in List");
    }
  };

  return (
    <div className="relative overflow-x-auto h-[45%] ml-2">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-8 py-4 w-1/7">
              #
            </th>
            <th scope="col" className="px-8 py-4 w-2/7">
              Name
            </th>
            <th scope="col" className="px-8 py-4 w-2/7">
              Credits
            </th>
            <th scope="col" className="px-8 py-4 w-2/7">
              Button
            </th>
          </tr>
        </thead>
        <tbody>
          {playerData.map((ele, index) => (
            <tr className="bg-white border-b" key={index}>
              <th scope="row" className="px-8 py-4 w-2/7">
                {index + 1}
              </th>
              <td className="px-8 py-4 w-2/7">{ele.playerName}</td>
              <td className="px-8 py-4 w-2/7">{ele.credits}</td>
              <td className="px-8 py-4 w-2/7">
                <button
                  className="bg-green-300 mr-3"
                  onClick={() => addPlayerToList(ele)}
                >
                  <box-icon
                    name="plus-circle"
                    size="md"
                    color="green"
                  ></box-icon>
                </button>
                <button
                  className="bg-red-300 ml-3"
                  onClick={() => removePlayer(ele)}
                >
                  <box-icon
                    name="minus-circle"
                    size="md"
                    color="red"
                  ></box-icon>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SelectPlayers;

