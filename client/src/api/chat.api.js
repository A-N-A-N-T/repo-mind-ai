import api from "./axios";

export const chatRepository = async (data) => {

    const response = await api.post(
        "/repositories/chat",
        data
    );

    return response.data;
};