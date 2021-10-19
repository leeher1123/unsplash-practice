import { jiminApi } from '../lib/jiminApi';

const API = {
  getPhotos: (data) => jiminApi('get', '/photos', data),
  getPhotoById: (id) => jiminApi('get', `/photos/${id}`),
  search: (data) => jiminApi('get', '/search', data),
  searchPhotos: (data) => jiminApi('get', '/search/photos', data),
  searchCollections: (data) => jiminApi('get', '/search/collections', data),
  searchUsers: (data) => jiminApi('get', '/search/users', data),
  getTopics: (data) => jiminApi('get', '/topics', data),
  getRelatedPhotos: (id) => jiminApi('get', `/photos/${id}/related`),
};

export default API;
