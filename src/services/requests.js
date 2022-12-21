import axios from "axios";

const HOST = process.env.REACT_APP_API_HOST || "localhost";
const PROTOCOL = process.env.REACT_APP_API_PROTOCOL || "http";

const API = axios.create({
    baseURL: `${PROTOCOL}://${HOST}`,
    timeout: 10000,
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  })

export const fetchDataUsers = async (page) => {
    const { data } = await API.get(`/api/users?since=${page}`);
    return data;
}

export const fetchDataUserDetails = async (username) => {
    const { data } = await API.get(`/api/users/${username}/details`);
    return data;
}

export const fetchDataUserRepos = async (username) => {
    const { data } = await API.get(`/api/users/${username}/repos`);
    return data;
}
export default API;
