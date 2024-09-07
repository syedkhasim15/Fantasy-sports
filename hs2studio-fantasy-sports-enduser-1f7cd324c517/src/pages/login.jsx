import React, { useState } from "react";
import imgfront from "../assets/all.jpg";
import logo from "../assets/11.jpg";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { authorize } from "../redux/authSlice";
import { login } from "../services/authentication";

const schema = yup.object({
  email: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const Login = () => {
  const reduxState = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [errorMsg, setErrorMsg] = useState("");

  let navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = async (data) => {
    try {
      const response = await login(data);
      console.log(response.data);
      const logObj = {
        id: response.data.user.id,
        token: response.data.accessToken,
        name: response.data.user.name,
        wallet: response.data.user.wallet,
        skillScore: response.data.user.skillScore,
      };
      dispatch(authorize(logObj));
      // console.log(logObj);
      // console.log(reduxState);
      navigate("/");
    } catch (error) {
      console.log("User Not Found/Incorrect Password!");
      setErrorMsg("Email / Password is Incorrect!");
    }

  };

  return (
    <div className="flex flex-row h-screen w-full">
      <section className="bg-gradient-to-bl from-violet-50 to-violet-400 w-[50%]">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            className="flex items-center mb-6 text-6xl text-gray-900 font-caveat font-bold gap-x-6"
          >
            <img className="w-16 h-16 mr-2 rounded-full" src={logo} alt="logo" />
            Fantasy 11
          </a>
          <div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Log in to your account
              </h1>
              {errorMsg ? (
                <p className="text-center text-sm text-red-500 font-semibold">
                  {errorMsg}
                </p>
              ) : (
                <></>
              )}
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Your email
                  </label>
                  <input
                    {...register("email")}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    {...register("password")}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 placeholder-gray-400 focus:ring-blue-500 focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500">
                        Remember me
                      </label>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline"
                  >
                    Forgot password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="w-full bg-violet-600 text-white bg-primary-600 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500">
                  Don’t have an account yet?{" "}
                  <Link
                    to={"/register"}
                    className="font-medium text-primary-600 hover:underline"
                  >
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
      <div className="w-[50%]  ">
        <img src={imgfront} alt="Versus" className="h-screen" />
      </div>
    </div>
  );
};

export default Login;
