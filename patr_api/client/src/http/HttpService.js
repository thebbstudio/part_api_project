import axios from 'axios';
import BASE_URL from './config';

export default class HttpService {
  static API_URL = `${BASE_URL}/patr_api`;

  static async getNews({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/news`, {
      params: {
        format: obj.format,
      },
    });
    return response;
  }

  static async getEvents({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/events/`, {
      params: {
        format: obj.format,
      },
    });
    return response;
  }

  static async getPartners({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/allpartners`, {
      params: {
        format: obj.format,
      },
    });
    return response;
  }

  static async getStaff({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/allstaff`, {
      params: {
        format: obj.format,
      },
    });
    return response;
  }

  static async getCards({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/allpark`, {
      params: {
        format: obj.format,
        type: obj.type,
      },
    });
    return response;
  }

  static async getDocs({ ...obj }) {
    const response = await axios.get(`${this.API_URL}/alldocuments`, {
      params: {
        format: obj.format,
      },
    });
    return response;
  }
}
