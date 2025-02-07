import axios from "axios";
import { env } from "./env";

const http = axios.create({
  baseURL: env.apiUrl,
});

export { http };
