import axios from "axios";

export const coreApi = axios.create({
  baseURL: process.env.APP_BACKEND_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
