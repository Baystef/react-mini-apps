import axios from 'axios';

// const KEY = 'AIzaSyDUTpi1VcMT-Ukyw97Eno8TaOGoAI6E30E';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3', 
  // params: {
  //   part: 'snippet',
  //   maxResults: 5,
  //   key: KEY
  // }
});
