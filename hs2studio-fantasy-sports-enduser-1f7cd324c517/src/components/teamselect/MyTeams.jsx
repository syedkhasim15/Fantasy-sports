import React, { useEffect, useState } from "react";
import CreateTeam from "./CreateTeam";
import ShowTeam from "./ShowTeam";
import { useSelector } from "react-redux";
import { getUserTeams } from "../../services/sports";

const MyTeams = ({ matchId }) => {
  const [team, setTeam] = useState([]);
  const userId = useSelector((state) => state.auth.id);
  console.log(userId);

  useEffect(() => {
    const fetchUserTeams = async () => {
      try {
        const response = await getUserTeams(userId, matchId);
        setTeam(response.data);
        console.log(response.data);
      } catch (error) {
        console.log("Team Not Found");
      }
    };
    fetchUserTeams();
  }, []);

  return (
    <>
      {team.length == 0 ? (
        <CreateTeam matchId={matchId} />
      ) : (
        <ShowTeam userTeam={team} />
      )}
    </>
  );
};

export default MyTeams;
