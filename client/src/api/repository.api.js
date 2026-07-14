import api from "./axios";

export const getRepositories = async () => {

    const response = await api.get("/repositories");

    return response.data;

};

export const createRepository = async (data) => {

    const response = await api.post(
        "/repositories",
        data
    );

    return response.data;

};

export const deleteRepository = async (id) => {

    const response = await api.delete(
        `/repositories/${id}`
    );

    return response.data;

};

export const analyzeRepository = async (id) => {

    const response = await api.post(
        `/repositories/${id}/analyze`
    );

    return response.data;

};