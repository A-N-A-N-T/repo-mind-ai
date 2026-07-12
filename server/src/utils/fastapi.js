import axios from "axios";

const fastapi = axios.create({
  baseURL: process.env.AI_SERVICE_URL,
  timeout: 60000,
});

export default fastapi;