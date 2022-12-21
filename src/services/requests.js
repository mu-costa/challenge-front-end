import axios from "axios";

const API = axios.create({
    baseURL: `http://localhost:${process.env.REACT_APP_API_PORT || '3001'}`,
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
