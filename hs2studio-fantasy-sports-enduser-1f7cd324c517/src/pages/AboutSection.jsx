import React from 'react';
import Footer from '../components/Footer';

const AboutSection = () => {
  return (
    <div className="flex flex-col w-full bg-gradient-to-l from-violet-300 to-violet-50">
      <div className="w-[60%] p-5">
        <div className="text">
          <span className="text-gray-500 border-b-2 border-indigo-600 uppercase text-sm font-semibold">About Us</span>
          <h2 className="my-4 font-bold text-3xl sm:text-4xl text-gray-800">
            About <span className="text-indigo-600">Fantasy Sports</span>
          </h2>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fantasy Game Development: Cricket</strong>
            <br />
            <br />
            <strong>SKILL SCORE:</strong>
            <br />
            It is for the end users. Used to evaluate the user’s performance.
            <br />
            <strong>Range:</strong> 0 to 999 [0 - lowest to 999 - Highest]
            <br />
            <strong>Category:</strong> Should be calculated for each single sport and one overall score (combining all the sports skill score value.)
            <br />
            <strong>How to calculate the score?</strong>
            <br />
            The users participate in different various contests [select teams, C, VC, for each match].
            <br />
            The team which the user has selected should join the match for which the contest has been conducted.
            <br />
            Then the selected team is compared with other teams in the same match.
            <br />
            A percentile for each team combination is calculated.
            <br />
            That percentile values for that user for the past 25 contests that the user has participated in is added and an average value below 1000 is deduced.
            <br />
            <br />
            <strong>POINTS FOR PLAYER LOGIC:</strong>
            <br />
            It is calculated for each player that is part of the match. Each activity has a point value.
            <br />
            Since we are pushing the data for each innings, the allocated points can be calculated for the overall data.
            <br />
            <br />
            <strong>BATTING POINTS</strong>
            <ul className="list-disc pl-6">
              <li>Run: +1</li>
              <li>Boundary Bonus: +1</li>
              <li>Six Bonus: +2</li>
              <li>Half-Century Bonus: +8</li>
              <li>Century Bonus: +16</li>
              <li>Dismissal for a duck (Batter, Wicket-Keeper, & All-Rounder): -2</li>
            </ul>
            <br />
            <strong>BOWLING POINTS</strong>
            <ul className="list-disc pl-6">
              <li>Wicket (Excluding Run Out): +25</li>
              <li>4 Wicket Bonus: +8</li>
              <li>5 Wicket Bonus: +16</li>
              <li>Maiden Over: +8</li>
            </ul>
            <br />
            <strong>FIELDING POINTS</strong>
            <ul className="list-disc pl-6">
              <li>Catch: +8</li>
              <li>Stumping/ Run Out: +12</li>
              <li>Run Out (Thrower/ Catcher): +6/6</li>
            </ul>
            <br />
            <strong>Other Important Points</strong>
            <ul className="list-disc pl-6">
              <li>All the X-Factor substitutes will get 4 points for being announced and score points for any contributions they make as per our Fantasy Point System. Since we do not have substitutions (we consider only players already in the team), this is not applicable. A default point of 44 will be awarded to all users (11x4).</li>
              <li>No points will be awarded for any actions during a Super Over or a Super Five.</li>
              <li>No further adjustments will be made to the points awarded once a match has been marked as completed and winners have been declared. Points awarded for a LIVE game will be subject to change only when the match status is “In Progress” or “In Review”.</li>
              <li>There are no negative points for low Strike Rates in Test matches.</li>
              <li>No points will be awarded for Strike, economy.</li>
            </ul>
            <br />
            <strong>LEADERBOARD LOGIC:</strong>
            <br />
            It is for the end users. The leaderboard consists of all the participants for each contest.
            <br />
            The rank assignment is assigned based on the points obtained by each user’s team formation. The sum of all the team player’s score in the user’s team will give the user’s score for that contest.
            <br />
            Arranging the score of all the users gives their ranks.
            <br />
            <br />
            <strong>CONTEST CREATION:</strong>
            <br />
            <strong>Type of contests and winning strategy</strong>
            <br />
            Type of contest are divided into leagues based on the number of participants i.e.,
            <br />
            Small Leagues- Less participants. Probably less than 25.
            <br />
            Mini grand leagues – Medium number of participants. Probably less than 2000.
            <br />
            Grand leagues – High number of participants. More than 2000.
            <br />
            The above thresholds are only for indicative purposes.
            <br />
            <strong>Small leagues</strong>
            <br />
            Small leagues are best for winning regular income. They are less risky compared to mini gl and gl. But you require more investment as compared to the other two for winning good money.
            <br />
            Type of contests in small league:
            <ul className="list-disc pl-6">
              <li>Head-to-head contest</li>
              <li>3 and 4 Member contest</li>
              <li>Contest for Champions</li>
            </ul>
            <br />
            <strong>Head-to-head contests</strong>
            <br />
            These are one on one contests. You must face only 1 opponent. The risk is lowest but return on investment is also lowest. Further, you need to invest large amounts of money to win a good amount.
            <br />
            There are many head-to-head contests available with varying prices ranging from ₹15 to ₹5750.
            <br />
            Winning strategy – Try to bring the best possible team. You must beat only one opposition. So, it is advised to not take any risk.
            <br />
            <strong>3 and 4 Member Contest</strong>
            <br />
            You must face 2 or 3 competitors here. These are the most played leagues. Fantasy guide also recommends playing these leagues. They are slightly risky with medium return on investment. The investment required is medium to high.
            <br />
            There are many contests available ranging from ₹17 to ₹3850.
            <br />
            Winning strategy – Play with the best team possible with one or two risky picks in the team. These risky picks will differentiate your teams from others. You don’t need to win every match to remain profitable here. So, take small risks to win some games.
            <br />
            <strong>Contests for champions</strong>
            <br />
            These contests require a high budget as the entry fee is very high. You can join some of the contests with multiple teams also.
            <br />
            Entry fee ranges from ₹590 to ₹3999.
            <br />
            Winning strategy – The strategy is like small league contests. The opponents will try to bring the best team possible. A slight risk from you can differentiate your teams from others. But take this risk wisely as a lot of money is at stake.
            <br />
            <strong>Mini grand league</strong>
            <br />
            These contests have a higher number of participants. The risk is high in these contests. However, the return on investment is also higher. The investment needed is moderate and less than small leagues. The entry fee varies with different sports and fantasy platforms.
            <br />
            Winning strategy – The risk is higher here. It is difficult to win these contests with 1 team only. Further, you need to take risks in your teams to win. So, increase risk and the number of teams with an increase in participants. Like if the number of participants is 50 then 2 teams with moderate risk might be a good option. If the number of participants is 400 then increasing the teams to 4 or 6 with higher risk can be tried.
            <br />
            <strong>Grand leagues</strong>
            <br />
            Both the number of participants and return on investment is very high in grand leagues. If your team comes on top, then you can win from lacs to even a crore through these leagues.
            <br />
            The entry fee is generally low. So, investment required is low compared to other leagues.
            <br />
            Winning strategy – You need to create multiple teams with a dedicated strategy to win this. If you create teams with a consistent strategy, then chances of winning increases.
          </p>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default AboutSection;
