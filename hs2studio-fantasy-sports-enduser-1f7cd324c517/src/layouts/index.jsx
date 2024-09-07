import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import NavbarComponent from "../components/navbar/NavbarComponent";
import Dropdown from "../components/navbar/Dropdown";

export default function Layout() {
  const loginStatus = useSelector((state) => state.auth.token);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 bg-white">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex justify-between h-14 items-center">
            <Link className="flex items-center gap-2" href="#">
              <div className="w-14 h-14">
                <img
                  src="https://www.legitgambling.com/images/icons/dfs.svg"
                  alt=""
                />
              </div>
            </Link>
            <nav className="hidden md:flex gap-4">
              <Link
                className="font-medium flex items-center text-lg transition-colors hover:text-violet-700"
                to="/landing"
              >
                Home
              </Link>
              <Link
                className="font-medium flex items-center text-lg transition-colors hover:text-violet-700"
                to="/aboutus"
              >
                About
              </Link>
              <Link
                className="font-medium flex items-center text-lg transition-colors hover:text-violet-700"
                to="/howtoplay"
              >
                How To Play
              </Link>
              <Link
                className="font-medium flex items-center text-lg transition-colors hover:text-violet-700"
                to="/pointsinfo"
              >
                Points Info
              </Link>
              <Dropdown />
            </nav>
            {!loginStatus ? (
              <div className="flex items-center gap-4">
                <Link
                  to={"/login"}
                  className="border border-slate-300 font-medium rounded-md px-4 py-1.5 text-sm"
                >
                  Sign in
                </Link>
                <Link
                  to={"/register"}
                  className="border border-gray-900 font-medium text-white bg-black text-sm rounded-md px-4 py-1.5"
                >
                  Sign up
                </Link>
              </div>
            ) : (
              <NavbarComponent />
            )}
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}
