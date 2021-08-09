import axios from "axios";

const baseUrl = 'https://api.unsplash.com';

const API = {
  getPhotos: (data) => axios({
    url:`${baseUrl}/photos`,
    method: 'get',
    params: data
  }),
  searchPhotos: (data) => axios({
    url:`${baseUrl}/search/photos`,
    method: 'get',
    params: data
  })
}

export default API;