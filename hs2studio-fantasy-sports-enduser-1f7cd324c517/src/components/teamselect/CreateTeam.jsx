import React, { useEffect, useState } from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { Theme } from "@radix-ui/themes";
import { useSelector, useDispatch } from "react-redux";
import { setMatchPlayerList } from "../../redux/playerSlice";
import "boxicons";
import { createDreamTeam, getPlayersForMatch } from "../../services/sports";

const CreateTeam = ({ matchId }) => {
  const [totalCredits, setTotalCredits] = useState(100);
  const userIdVal = useSelector((state) => state.auth.id);

  const [playerList, setPlayerList] = useState([]);
  const [wicketkeepers, setWicketkeepers] = useState(0);
  const [batsman, setBatsman] = useState(0);
  const [allrounders, setAllrounders] = useState(0);
  const [bowlers, setBowlers] = useState(0);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchPlayersForMatch = async () => {
      try {
        const response = await getPlayersForMatch(matchId);
        dispatch(setMatchPlayerList(response.data));
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPlayersForMatch();
  }, []);

  const matchPlayerList = useSelector((state) => state.players.matchPlayerList);

  const addPlayerToList = (playerObject, role, credit) => {
    if (playerList.includes(playerObject)) {
      alert("Player Already Selected");
      return;
    } else if (playerList.length >= 11) {
      alert("11 Players Already Selected");
      return;
    } else {
      if (role == "wicketkeeper") setWicketkeepers(wicketkeepers + 1);
      if (role == "batsman") setBatsman(batsman + 1);
      if (role == "allrounder") setAllrounders(allrounders + 1);
      if (role == "bowler") setBowlers(bowlers + 1);
      setPlayerList([...playerList, playerObject]);
      setTotalCredits(totalCredits - parseInt(credit));
    }
  };

  const removePlayer = (playerObject, role, credit) => {
    let indexToRemove = playerList.indexOf(playerObject);
    if (indexToRemove !== -1) {
      if (role == "wicketkeeper") setWicketkeepers(wicketkeepers - 1);
      if (role == "batsman") setBatsman(batsman - 1);
      if (role == "allrounder") setAllrounders(allrounders - 1);
      if (role == "bowler") setBowlers(bowlers - 1);
      setPlayerList((prevItems) => {
        return prevItems.filter((item, index) => index !== indexToRemove);
      });
      setTotalCredits(totalCredits + parseInt(credit));
    } else {
      alert("Player Not in List");
    }
    console.log(wicketkeepers, batsman, allrounders, bowlers);
  };

  const validation = () => {
    if (playerList.length < 11) {
      alert("Select 11 Players");
      return false;
    } else if (wicketkeepers < 1) {
      alert("Minimum 1 WicketKeeper");
      return false;
    } else if (batsman < 3) {
      alert("Minimum 3 Batsman");
      return false;
    } else if (allrounders < 2) {
      alert("Minimum 2 Allrounders");
      return false;
    } else if (bowlers < 3) {
      alert("Minimum 3 Bowlers");
      return false;
    } else {
      return true;
    }
  };

  const handleSubmit = async () => {
    const validate = validation();

    if (validate) {
      const data = {
        dreamTeam: {
          userId: userIdVal,
          matchId: "660e3b3530925490b03e4ddc",
          teamCredit: 100 - totalCredits,
          team: playerList,
        },
      };
      try {
        const response = await createDreamTeam(matchId, data);
        console.log(response.data);
        alert("Team Created Successfully");
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div className="w-full h-auto">
      <div className="flex flex-col">
        <div className="flex flex-row justify-between  mb-2">
          <div className="flex w-[50%]">
            <h1 className="font-bold text-xl">Choose Your Dream Team</h1>
          </div>
          <div className="flex flex-row w-[50%] justify-end items-center gap-2">
            <p>
              <span className="font-bold">Credits Remaining: </span>
              {totalCredits}
            </p>
            <button
              onClick={handleSubmit}
              className="w-[130px] bg-violet-600 text-white bg-primary-600 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2 text-center"
            >
              Create Team
            </button>
          </div>
        </div>
        <Tabs.Root
          className="flex flex-col w-full shadow-[0_2px_10px] shadow-blackA2"
          defaultValue="tab1"
        >
          <Tabs.List
            className="shrink-0 flex border-b border-mauve6"
            aria-label="Manage your account"
          >
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab1"
            >
              WK
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab2"
            >
              Batsman
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab3"
            >
              All Rounder
            </Tabs.Trigger>
            <Tabs.Trigger
              className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default"
              value="tab4"
            >
              Bowler
            </Tabs.Trigger>
          </Tabs.List>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab1"
          >
            <Theme>
              <div class="relative overflow-x-auto h-[45%] ml-2">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-8 py-4 w-1/7">
                        #
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Name
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Credits
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Button
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {matchPlayerList.wicketkeeper?.map((ele, index) => (
                      <tr class="bg-white border-b" key={index}>
                        <th scope="row" class="px-8 py-4 w-2/7">
                          {index + 1}
                        </th>
                        <td class="px-8 py-4 w-2/7">{ele.playerName}</td>
                        <td class="px-8 py-4 w-2/7">{ele.credit}</td>
                        <td class="px-8 py-4 w-2/7">
                          {!playerList.includes(ele) ? (
                            <button
                              onClick={() =>
                                addPlayerToList(ele, "wicketkeeper", ele.credit)
                              }
                            >
                              <box-icon
                                name="plus-circle"
                                size="md"
                                color="green"
                              ></box-icon>
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                removePlayer(ele, "wicketkeeper", ele.credit)
                              }
                            >
                              <box-icon
                                name="minus-circle"
                                size="md"
                                color="red"
                              ></box-icon>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Theme>
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab2"
          >
            <Theme>
              <div class="relative overflow-x-auto h-[45%] ml-2">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-8 py-4 w-1/7">
                        #
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Name
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Credits
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Button
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {matchPlayerList.batsman?.map((ele, index) => (
                      <tr class="bg-white border-b" key={index}>
                        <th scope="row" class="px-8 py-4 w-2/7">
                          {index + 1}
                        </th>
                        <td class="px-8 py-4 w-2/7">{ele.playerName}</td>
                        <td class="px-8 py-4 w-2/7">{ele.credit}</td>
                        <td class="px-8 py-4 w-2/7">
                          {!playerList.includes(ele) ? (
                            <button
                              onClick={() =>
                                addPlayerToList(ele, "batsman", ele.credit)
                              }
                            >
                              <box-icon
                                name="plus-circle"
                                size="md"
                                color="green"
                              ></box-icon>
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                removePlayer(ele, "batsman", ele.credit)
                              }
                            >
                              <box-icon
                                name="minus-circle"
                                size="md"
                                color="red"
                              ></box-icon>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Theme>
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab3"
          >
            <Theme>
              <div class="relative overflow-x-auto h-[45%] ml-2">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-8 py-4 w-1/7">
                        #
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Name
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Credits
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Button
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {matchPlayerList.allrounder?.map((ele, index) => (
                      <tr class="bg-white border-b" key={index}>
                        <th scope="row" class="px-8 py-4 w-2/7">
                          {index + 1}
                        </th>
                        <td class="px-8 py-4 w-2/7">{ele.playerName}</td>
                        <td class="px-8 py-4 w-2/7">{ele.credit}</td>
                        <td class="px-8 py-4 w-2/7">
                          {!playerList.includes(ele) ? (
                            <button
                              onClick={() =>
                                addPlayerToList(ele, "allrounder", ele.credit)
                              }
                            >
                              <box-icon
                                name="plus-circle"
                                size="md"
                                color="green"
                              ></box-icon>
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                removePlayer(ele, "allrounder", ele.credit)
                              }
                            >
                              <box-icon
                                name="minus-circle"
                                size="md"
                                color="red"
                              ></box-icon>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Theme>
          </Tabs.Content>
          <Tabs.Content
            className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black"
            value="tab4"
          >
            <Theme>
              <div class="relative overflow-x-auto h-[45%] ml-2">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                  <thead class="text-xs text-gray-700 uppercase bg-gray-50">
                    <tr>
                      <th scope="col" class="px-8 py-4 w-1/7">
                        #
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Name
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Credits
                      </th>
                      <th scope="col" class="px-8 py-4 w-2/7">
                        Button
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {matchPlayerList.bowler?.map((ele, index) => (
                      <tr class="bg-white border-b" key={index}>
                        <th scope="row" class="px-8 py-4 w-2/7">
                          {index + 1}
                        </th>
                        <td class="px-8 py-4 w-2/7">{ele.playerName}</td>
                        <td class="px-8 py-4 w-2/7">{ele.credit}</td>
                        <td class="px-8 py-4 w-2/7">
                          {!playerList.includes(ele) ? (
                            <button
                              onClick={() =>
                                addPlayerToList(ele, "bowler", ele.credit)
                              }
                            >
                              <box-icon
                                name="plus-circle"
                                size="md"
                                color="green"
                              ></box-icon>
                            </button>
                          ) : (
                            <button
                              onClick={() =>
                                removePlayer(ele, "bowler", ele.credit)
                              }
                            >
                              <box-icon
                                name="minus-circle"
                                size="md"
                                color="red"
                              ></box-icon>
                            </button>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Theme>
          </Tabs.Content>
        </Tabs.Root>
      </div>
    </div>
  );
};

export default CreateTeam;
