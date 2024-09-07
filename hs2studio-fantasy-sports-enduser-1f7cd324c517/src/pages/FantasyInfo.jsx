
import React, { useState } from 'react';

const HowToPlay = () => {
  const [activeView, setActiveView] = useState('table');

  const handleSelectView = (view) => {
    setActiveView(view);
  };

  const isActive = (view) => {
    return activeView === view;
  };

  return (
    <div className="bg-gray-100 w-full h-full flex flex-col items-center justify-start mt-12">
      {/* Adjusted to justify-start and pt-12 to ensure content starts from the top */}

        <div className="w-full flex-grow flex flex-col items-center p-4 m-0 bg-white rounded-lg shadow-md text-base md:text-lg lg:text-2xl">
            {/* Make elements appear in the center */}

            <h1 className="text-3xl font-bold mb-4 text-center"><span className='text-red-700'>How To Play</span> IPL Fantasy Cricket League</h1>
            <p className="text-gray-600 mb-6 text-center p-8">
            To play for TATA IPL Fantasy 20/23, you need to register with FantasySports! The next step is to choose your username and a dream team, and you're set to play!
            </p>

            <div className="flex justify-center space-x-4 mb-6">
            {/* Display buttons side-by-side */}
            
            <button
                onClick={() => handleSelectView('table')}
                className={`px-4 py-2 rounded ${isActive('table') ? 'bg-white text-red-600 underline' : 'bg-white text-slate-700'} focus:outline-none border-none text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}
            >
                Select Match
            </button>

            <button
                onClick={() => handleSelectView('teamCreate')}
                className={`px-4 py-2 rounded ${isActive('teamCreate') ? 'bg-white text-red-600 underline' : 'bg-white text-slate-700'} focus:outline-none border-none text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}
            >
                Create Team
            </button>

            <button
                onClick={() => handleSelectView('chooseLead')}
                className={`px-4 py-2 rounded ${isActive('chooseLead') ? 'bg-white text-red-600 underline' : 'bg-white text-slate-700'} focus:outline-none border-none text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl`}
            >
                Choose the Lead
            </button>
            </div>

            <div className="w-4/5">

                {activeView === 'table' && (
                    /* Table Component */
                    <div className="bg-white flex flex-col items-center justify-center mt-20 sm:p-0 sm:m-1">
                    <h2 className="text-base md:text-lg lg:text-2xl mb-2">There are seven possible combinations to choose your Dream Team</h2>
                    <div className="w-full p-6 bg-white rounded-lg shadow-md sm:p-0 sm:m-1 overflow-x-auto">  
                    <table className="xs:min-w-full w-full border-collapse border border-gray-300 rounded-t-lg">
                    <thead className="bg-white text-base sm:text-md md:text-lg lg:text-2xl text-gray-700 uppercase rounded-t-lg">
                        <tr>
                        <th className="p-2 ">Player Type</th>
                        <th className="p-2 ">C1</th>
                        <th className="p-2 ">C2</th>
                        <th className="p-2 ">C3</th>
                        <th className="p-2 ">C4</th>
                        <th className="p-2 ">C5</th>
                        <th className="p-2 ">C6</th>
                        <th className="p-2 ">C7</th>
                        </tr>
                    </thead>
                    <tbody className='text-center'>
                        <tr className='bg-slate-100'>
                        <td className="p-2 border border-gray-300">WK</td>
                        <td className="p-2 border border-gray-300">1</td>
                            <td className="p-2 border border-gray-300">1</td>
                            <td className="p-2 border border-gray-300">1</td>
                            <td className="p-2 border border-gray-300">1</td>
                            <td className="p-2 border border-gray-300">1</td>
                            <td className="p-2 border border-gray-300">1</td>
                            <td className="p-2 border border-gray-300">1</td>
                        </tr>
                        <tr>
                        <td className="p-2 border border-gray-300">BAT</td>
                        <td className="p-2 border border-gray-300">5</td>
                            <td className="p-2 border border-gray-300">5</td>
                            <td className="p-2 border border-gray-300">4</td>
                            <td className="p-2 border border-gray-300">4</td>
                            <td className="p-2 border border-gray-300">4</td>
                            <td className="p-2 border border-gray-300">3</td>
                            <td className="p-2 border border-gray-300">3</td>
                        </tr>
                        <tr className='bg-slate-100'>
                        <td className="p-2 border border-gray-300">AR</td>
                        <td className="p-2 border border-gray-300">2</td>
                            <td className="p-2 border border-gray-300">1</td>
                            <td className="p-2 border border-gray-300">1</td>
                            <td className="p-2 border border-gray-300">2</td>
                            <td className="p-2 border border-gray-300">3</td>
                            <td className="p-2 border border-gray-300">2</td>
                            <td className="p-2 border border-gray-300">3</td>
                        </tr>
                        <tr>
                        <td className="p-2 border border-gray-300">BOWL</td>
                        <td className="p-2 border border-gray-300">3</td>
                            <td className="p-2 border border-gray-300">4</td>
                            <td className="p-2 border border-gray-300">5</td>
                            <td className="p-2 border border-gray-300">4</td>
                            <td className="p-2 border border-gray-300">3</td>
                            <td className="p-2 border border-gray-300">5</td>
                            <td className="p-2 border border-gray-300">4</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr className='bg-slate-200 text-center'>
                        <td className="p-2 border border-gray-300">TOTAL</td>
                        <td className="p-2 border border-gray-300">11</td>
                            <td className="p-2 border border-gray-300">11</td>
                            <td className="p-2 border border-gray-300">11</td>
                            <td className="p-2 border border-gray-300">11</td>
                            <td className="p-2 border border-gray-300">11</td>
                            <td className="p-2 border border-gray-300">11</td>
                            <td className="p-2 border border-gray-300">11</td>
                        </tr>
                    </tfoot>
                    </table>
                    </div>
                    </div>
                )}

                {activeView === 'teamCreate' && (
                    /* Team Create Component */
                    <div className="bg-gray-100 flex flex-col items-center justify-center">
                    <div className="w-full p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-bold mb-4">How To Play IPL Fantasy Cricket League</h1>
                    <p className="text-gray-600 mb-6">
                        To play for TATA IPL Fantasy 20/23, you need to register with FantasySports! The next step is to choose your username and a team name, and you're set to play!
                    </p>
        
                    <h2 className="text-xl font-semibold mb-2">Follow the steps below to make your very own TATA IPL Fantasy team today:</h2>
                    <ol className="list-decimal pl-6 mb-6">
                        <li>Select Match</li>
                        <li>Create Team</li>
                        <li>Join Contests</li>
                    </ol>
        
                    <div className="bg-red-200 p-4 rounded-md text-red-800 mb-4">
                        <p className="font-semibold">Pro Tip:</p>
                        <ul className="list-disc pl-6">
                        <li>Keep track of the number of players added to your team.</li>
                        <li>Manage your available credits wisely.</li>
                        <li>Remember the deadline (official match start time).</li>
                        </ul>
                    </div>
                    </div>
                </div>
                )}

                {activeView === 'chooseLead' && (
                    /* Choose Lead Component */
                    <div className="bg-gray-100 flex flex-col items-center justify-center">
                        <div className="w-full p-6 bg-white rounded-lg shadow-md">
                            <div className="p-4 space-y-4 text-base md:text-lg lg:text-2xl">
                                    <p className='pb-20'>After creating your TATA IPL fantasy team, select your TATA IPL fantasy team’s Captain & Vice-Captain:</p>
                                
                                    <div className="flex w-full px-4 sm:px-6 md:justify-between">
                                    <div className="flex flex-col items-center p-4 pr-4 border rounded-md w-full md:w-1/2 md:mr-2">
                                        <div className="bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 p-2 rounded-full">
                                        <span className="text-white text-xl font-bold">2X</span>
                                        </div>
                                        <span className="mt-2 text-lg font-semibold">Captain</span>
                                        <span>Gets 2x points scored in the actual game</span>
                                    </div>
                            
                                    <div className="flex flex-col items-center p-4 pl-4 border rounded-md w-full md:w-1/2 md:ml-2">
                                        <div className="bg-gradient-to-r from-yellow-300 via-orange-400 to-red-500 p-2 rounded-full">
                                        <span className="text-white text-xl font-bold">1.5X</span>
                                        </div>
                                        <span className="mt-2 text-lg font-semibold">Vice captain</span>
                                        <span>Gets 1.5x points scored in the actual game</span>
                                    </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                )}
            
            </div>

        </div>
    </div>
  );
};

export default HowToPlay;