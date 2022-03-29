import axios from 'axios';

export default class PostService {
  static async getAll(type) {
    const response = await axios.get('', {
      params: {
        _type: type,
      },
    });
    return response;
  }
}
