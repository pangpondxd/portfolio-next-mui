import axios from "axios";

export const HeaderDefault = () => ({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    Authorization: "Bearer " + localStorage.getItem("token") ?? "",
    "Content-Type": "application/json",
  },
});

const checkUnauthorized = (error) => {
  const statusCode = error.response ? error.response.status : null;
  if (statusCode === 401) {
    localStorage.removeItem("token");
  }
};

let api = axios.create(HeaderDefault());

api.interceptors.response.use(
  (res) => res,
  (error) => {
    checkUnauthorized(error);
    throw error;
  }
);

export { api as axios };
