import axios from "axios";

export const fetcher = async (chemin = "", ...options) => {
  try {
    const res = await fetch(`${process.env.API_URL}${chemin}`, ...options);
    const parsed = res.json();
    return parsed;
  } catch (error) {
    return error;
  }
}

const fetcherAxios = () => {
  axios.interceptors.request.use((config) => {
    // Do something before request is sent
    
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  })
}