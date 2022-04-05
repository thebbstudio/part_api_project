import axios from 'axios';

export default class PostService {
  static async getAll(url) {
    const response = await axios.get(url);
    return response;
  }
}
