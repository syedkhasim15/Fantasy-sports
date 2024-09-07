import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { getSports } from "../services/sports";

const ChooseSport = () => {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchSport = async () => {
      try {
        const response = await getSports()
        setSports(response.data);
      } 
      catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSport();
  }, []);

  return (
    <div className="mt-[10%] w-full max-w-2xl p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
        Choose Sport
      </h5>
      <ul className="my-4 space-y-3">
        {sports.map((sport) => (
          <li key={sport._id}>
            <NavLink to={`/${sport._id}`}>
              <a className="flex items-center p-3 text-base font-bold text-gray-900 rounded-lg bg-gray-50 hover:bg-gray-100 group hover:shadow dark:bg-gray-600 dark:hover:bg-gray-500 dark:text-white">
                <span className="flex-1 ms-3 whitespace-nowrap">{sport.sport}</span>
                {/* <span className="inline-flex items-center justify-center px-2 py-0.5 ms-3 text-xs font-medium text-gray-500 bg-gray-200 rounded dark:bg-gray-700 dark:text-gray-400">
                  Popular
                </span> */}
              </a>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChooseSport;
