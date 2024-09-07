import { instance } from "./axiosBase";

export const login = async(data) => {
    const response = await instance.post("http://localhost:8000/login",data);
    return response;
}

export const registerUser = async(data) => {
    const response = await instance.post("http://localhost:8000/register",data);
    return response;
}