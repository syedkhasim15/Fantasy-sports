import React, { useEffect, useState } from "react";
import Contests from "../components/teamselect/Contests";
import MyTeams from "../components/teamselect/MyTeams";
import * as Tabs from "@radix-ui/react-tabs";
import { setMatchPlayerList } from "../redux/playerSlice";
import { useParams } from "react-router-dom";
import ShowContest from "../components/ShowContest";

const TeamSelect = () => {
  const [teams, setTeams] = useState([]);
  const { matchId } = useParams();
  console.log(matchId);

  return (
    <div className="flex justify-center mt-16">
      <Tabs.Root className="flex flex-col w-[80%] " defaultValue="tab1">
        <Tabs.List
          className="shrink-0 flex border-b border-mauve6"
          aria-label="Manage your account"
        >
          <Tabs.Trigger
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
            value="tab1"
          >
            My Teams
          </Tabs.Trigger>
          <Tabs.Trigger
            className="bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[inset_0_-1px_0_0,0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative outline-none cursor-default"
            value="tab2"
          >
            Contests
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none"
          value="tab1"
        >
          <MyTeams matchId={matchId} />
        </Tabs.Content>
        <Tabs.Content
          className="grow p-5 bg-white rounded-b-md outline-none"
          value="tab2"
        >
          <ShowContest matchId={matchId}/>
          {/* <Contests /> */}
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

export default TeamSelect;
