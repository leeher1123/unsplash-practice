import axios from "axios";

const MyAxios = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ru5TsUnyXPAqSAbjWb1h5zi6LnOI3qCQEvauSn2UkB4'
  }
})

const API = {
  getPhotos: (data) => MyAxios({
    url:`/photos`,
    method: 'get',
    params: data
  }),
  searchPhotos: (data) => MyAxios({
    url:`/search`,
    method: 'get',
    params: data
  })
}

export default API;