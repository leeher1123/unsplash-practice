import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
  },
});

export const jiminApi = (method, url, data) => {
  try {
    const result = axiosInstance({
      url,
      method,
      params: data,
    });
    return result;
  } catch (err) {
    return err;
  }
};
