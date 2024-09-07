import React, { useState } from "react";

const Dropdown = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="my-2 w-full max-w-4xl 2xl:max-w-3xl xl:max-w-2xl lg:max-w-1xl md:max-w-lg sm:max-w-md xs:w-full p-1 m-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800">
      <button
        className="w-full py-2 px-4 bg-white rounded hover:bg-gray-100"
        onClick={() => setIsOpen(!isOpen)}
      >
        {title}
      </button>
      {isOpen && (
        <div className="mt-2 bg-white border rounded shadow">{children}</div>
      )}
    </div>
  );
};

const PointsComponent = () => {
  const imageURL =
    "https://thetechem.com/wp-content/uploads/2022/04/Fantasy-Cricket.jpg";
  return (
    <>
      <div className=" bg-white w-full h-[90vh] flex flex-col justify-center items-center">
        <div className="w-full flex flex-col items-center p-4 m-0 bg-white rounded-lg text-base md:text-lg lg:text-2xl">
          <h1 className="text-3xl font-bold mb-4 text-center">
            How does a Fantasy Cricket team{" "}
            <span className="text-violet-700">earn Fantasy points?</span>
          </h1>
          <p className="text-gray-600 mb-6 text-center p-8">
            Here’s how your{" "}
            <span className="text-violet-700 font-semibold">Fantasy team </span>
            earns Fantasy points
          </p>
          <Dropdown title="Batting Points">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg border-collapse border border-gray-200">
              <tbody className="bg-white ">
                <td className="text-left text-sm font-semibold text-gray-700 divide-y divide-gray-200 w-2/3">
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    Run
                  </tr>
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    Boundary Bonus
                  </tr>
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    Six Bonus
                  </tr>
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    Half-Century Bonus
                  </tr>
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    Century Bonus
                  </tr>
                </td>
                <td className="bg-green-100 text-left text-sm font-semibold text-gray-700 divide-y divide-gray-200">
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +1
                  </tr>
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +1
                  </tr>
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +2
                  </tr>
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +8
                  </tr>
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +16
                  </tr>
                </td>
              </tbody>
            </table>
          </Dropdown>

          <Dropdown title="Bowling Points">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg border-collapse border border-gray-200">
              <tbody className="bg-white ">
                <td className="text-left text-sm font-semibold text-gray-700 divide-y divide-gray-200 w-2/3">
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    Wicket (Excluding Run Out)
                  </tr>
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    4 Wicket Bonus
                  </tr>
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    5 Wicket Bonus
                  </tr>
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    Maiden Over
                  </tr>
                </td>
                <td className="bg-green-100 text-left text-sm font-semibold text-gray-700 divide-y divide-gray-200">
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +25
                  </tr>
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +8
                  </tr>
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +16
                  </tr>
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +8
                  </tr>
                </td>
              </tbody>
            </table>
          </Dropdown>

          <Dropdown title="Fielding Points">
            <table className="min-w-full divide-y divide-gray-200 rounded-lg border-collapse border border-gray-200">
              <tbody className="bg-white ">
                <td className="text-left text-sm font-semibold text-gray-700 divide-y divide-gray-200 w-2/3">
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    Catch
                  </tr>
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    Stumping/ Run Out (direct)
                  </tr>
                  <tr className="pl-4 py-2 flex items-center justify-center">
                    Run Out (Thrower/Catcher)
                  </tr>
                </td>
                <td className="bg-green-100 text-left text-sm font-semibold text-gray-700 divide-y divide-gray-200">
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +8
                  </tr>
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +12
                  </tr>
                  <tr className="px-4 py-2 flex items-center justify-center">
                    +6/6
                  </tr>
                </td>
              </tbody>
            </table>
          </Dropdown>
        </div>
      </div>
    </>
  );
};

export default PointsComponent;
