import axios from "axios";

const _axios = axios.create({
  baseURL: "https://api-test.innoloft.com",
  headers: {},
});

export default _axios;
