import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID ru5TsUnyXPAqSAbjWb1h5zi6LnOI3qCQEvauSn2UkB4',
  },
});

const API = {
  getPhotos: (data) => axiosInstance({
    url: '/photos',
    method: 'get',
    params: data,
  }),
  getPhotoById: (id) => axiosInstance({
    url: `/photos/${id}`,
    method: 'get',
  }),
  search: (data) => axiosInstance({
    url: '/search',
    method: 'get',
    params: data,
  }),
  searchPhotos: (data) => axiosInstance({
    url: '/search/photos',
    method: 'get',
    params: data,
  }),
  searchCollections: (data) => axiosInstance({
    url: '/search/collections',
    method: 'get',
    params: data,
  }),
  searchUsers: (data) => axiosInstance({
    url: '/search/users',
    method: 'get',
    params: data,
  }),
  getTopics: (data) => axiosInstance({
    url: '/topics',
    method: 'get',
    params: data,
  }),
  getRelatedPhotos: (id) => axiosInstance({
    url: `/photos/${id}/related`,
    method: 'get',
  }),
};

export default API;
