import axios from "axios";

const _axios = axios.create({
  baseURL: "https://api-test.innoloft.com",
  headers: {
    // "Content-Type": "application/json",
    // Accept: "application/json",
    // "Access-Control-Allow-Origin": "*",
    // "Access-Control-Allow-Credentials": true,
    // "Access-Control-Allow-Headers": "content-type",
    // credentials: false,
  },
});

export default _axios;
