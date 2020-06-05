import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 30a9d0897e96c7b7cc71b3ad084dfd0deac8c12edf899b69472b5cfa7da63f50'
  }
});
