import api from "./axios";

import { TOKEN_KEY } from "../utils/constants";

export const login = async (data) => {

    const response = await api.post(

        "/auth/login",

        data

    );

    return response.data;

};

export const register = async (data) => {

    const response = await api.post(

        "/auth/register",

        data

    );

    return response.data;

};


export const getProfile = async () => {

    const response = await api.get("/auth/profile");

    return response.data;

};

export const logout = () => {

    localStorage.removeItem(TOKEN_KEY);

};