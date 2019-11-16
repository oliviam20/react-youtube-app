import axios from 'axios';
import KEY from './key';

// https://developers.google.com/youtube/v3/docs/search/list
export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
