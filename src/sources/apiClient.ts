import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'e87692cee92846358b5b93a2ae5a2a42',
  },
});
