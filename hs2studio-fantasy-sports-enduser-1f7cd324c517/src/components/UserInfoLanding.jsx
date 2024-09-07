import React, { useState } from "react";

const names = ["Swadhesh", "Virinchi", "Tauseef", "Ashok", "Khasim"];

const HowToPlay = () => {
  const [activeView, setActiveView] = useState("table");

  const handleSelectView = (view) => {
    setActiveView(view);
  };

  const isActive = (view) => {
    return activeView === view;
  };

  return (
    <div className="flex flex-col w-full h-full items-center justify-start mt-6">
      <div className="w-full flex flex-col items-center justify-center p-4 m-0 rounded-lg text-base md:text-lg lg:text-2xl">
        <div className="flex flex-col gap-y-5">
          <h1 className="text-3xl font-bold mb-4 text-center">
            <span className="text-violet-700">
              Fantasy Sports 11 <br />{" "}
            </span>{" "}
            and how Others feel about it !
          </h1>
          <p className="text-gray-600 text-xl mb-6 text-justify">
            We have a wide range of features in our application to offer so that
            users can throughly enjoy the exprtience of Fantasy sports betting.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={() => handleSelectView("table")}
            className={`px-4 py-2 rounded ${
              isActive("table")
                ? "bg-white text-violet-700 underline"
                : "bg-white text-slate-700"
            } focus:outline-none border-none text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold`}
          >
            Creators
          </button>

          <button
            onClick={() => handleSelectView("teamCreate")}
            className={`px-4 py-2 rounded ${
              isActive("teamCreate")
                ? "bg-white text-violet-700 underline"
                : "bg-white text-slate-700"
            } focus:outline-none border-none text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl font-semibold`}
          >
            User Reviews
          </button>
        </div>

        <div className="w-full">
          {activeView === "table" && (
            /* Table Component */
            <div className="flex items-center justify-center flex-wrap gap-10">
              {names.map((ele, index) => (
                <div className="card flex flex-row w-[350px] h-[200px] rounded-xl shadow-md border hover:scale-110 transition-all duration-200">
                  <div className="flex w-[55%] bg-[url('https://www.w3schools.com/howto/img_avatar.png')] h-full bg-cover rounded-l-xl"></div>
                  <div className="flex w-[45%] flex-col h-full justify-center items-start pl-4">
                    <h1 className="text-[28px] font-bold">{ele}</h1>
                    <h1 className="text-xl pl-0.5 text-violet-700">Intern</h1>
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeView === "teamCreate" && (
            <div className="w-full">
              <div className="container gap-x-5 flex flex-col items-center justify-center w-full text-center xl:px-0">
                <h2 className="max-w-2xl text-3xl font-bold leading-snug tracking-tight lg:leading-tight lg:text-4xl text-violet-900">
                  Here's what our users said <br /> about Fantasy 11
                </h2>
                <p className="max-w-2xl py-4 text-lg leading-normal lg:text-xl xl:text-xl text-gray-600">
                  Testimonials are a great way to showcase the positive
                  experiences of our users on Fantasy 11. Here are some
                  testimonials from our satisfied players.
                </p>
              </div>
              <div className="container p-6 mx-auto mb-10 xl:px-10">
                <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                  <div className="lg:col-span-2 xl:col-auto">
                    <div className="flex flex-col justify-between w-full h-full px-5 py-5 bg-violet-950 md:px-8 rounded-2xl md:py-10 dark:bg-trueGray-800">
                      <p className="text-lg md:text-xl leading-normal dark:text-gray-300">
                        Fantasy 11 is the best fantasy sports platform I've ever
                        used. The user interface is intuitive, and I love
                        competing with other users in various contests.
                      </p>
                      <div className="flex items-center mt-4 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-16 h-16">
                          <img
                            alt="Avatar"
                            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-200">
                            John Doe
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-lg">
                            Professional Fantasy Player
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col justify-between w-full h-full px-5 py-5 bg-violet-950 md:px-8 rounded-2xl md:py-10 dark:bg-trueGray-800">
                      <p className="text-lg md:text-xl leading-normal dark:text-gray-300">
                        Fantasy 11 has completely changed the way I enjoy
                        watching sports. Now, every match is an opportunity to
                        win exciting prizes!
                      </p>
                      <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-16 h-16">
                          <img
                            alt="Avatar"
                            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-200">
                            Jane Smith
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-lg">
                            Sports Enthusiast
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex flex-col justify-between w-full h-full px-5 py-5 bg-violet-950 md:px-8 rounded-2xl md:py-10 dark:bg-trueGray-800">
                      <p className="text-lg md:text-xl leading-normal dark:text-gray-300">
                        I've tried several fantasy sports platforms, but Fantasy
                        11 stands out with its fair gameplay and responsive
                        customer support.
                      </p>
                      <div className="flex items-center mt-8 space-x-3">
                        <div className="flex-shrink-0 overflow-hidden rounded-full w-16 h-16">
                          <img
                            alt="Avatar"
                            src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80"
                            loading="lazy"
                          />
                        </div>
                        <div>
                          <div className="text-lg font-medium text-gray-200">
                            Michael Johnson
                          </div>
                          <div className="text-gray-600 dark:text-gray-400 text-lg">
                            Dedicated Fantasy Player
                          </div>
                        </div>
                      </div>
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
