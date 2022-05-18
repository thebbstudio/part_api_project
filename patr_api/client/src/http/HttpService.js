import axios from 'axios';
import BASE_URL from './config';

export default class HttpService {
  static API_URL = `${BASE_URL}/api`;

  static async getNews({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/news`, {
      params: {
        format: obj.format,
      },
    });
    return response;
  }

  static async getEvents({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/events`, {
      params: {
        format: obj.format,
      },
    });
    return response;
  }

  static async getPartners({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/partners`, {
      params: {
        format: obj.format,
      },
    });
    return response;
  }

  static async getStaff({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/staff`, {
      params: {
        format: obj.format,
      },
    });
    return response;
  }

  static async getCards({ ...params }) {
    console.log(params);
    if (!params.id) {
      const response = await axios.get(`${this.API_URL}/parkcategories`, {
        params: {
          format: params.format,
        },
      });
      return response;
    }
    const response = await axios.get(`${this.API_URL}/park`, {
      params: {
        format: params.format,
        id: params.id,
      },
    });
    return response;
  }

  static async getDocs({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/documents`, {
      params: {
        format: obj.format,
      },
    });
    return response;
  }

  static async getPostNews({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/news`, {
      params: {
        format: obj.format,
        id: obj.id,
      },
    });
    return response;
  }

  static async getPostEvent({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/events`, {
      params: {
        format: obj.format,
        id: obj.id,
      },
    });
    return response;
  }
}
