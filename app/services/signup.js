// app/services/signup.js
import Service from '@ember/service';
import { api } from '../assets/api';

export default class SignupService extends Service {
  async register(data) {
    try {
      const response = await api({
        url: 'http://localhost:8080/signup',
        method: 'POST',
        data: JSON.stringify(data),
      });

      console.log('POST response:', response);
      return response;
    } catch (error) {
      console.error('POST error:', error);
      throw error;
    }
  }
}
