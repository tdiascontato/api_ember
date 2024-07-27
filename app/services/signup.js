// app/services/signup.js
import Service from '@ember/service';
import api from '../assets/api';

export default class SignupService extends Service {
  async signup(userData) {
    try {
      const response = await api({
        url: 'http://localhost:8080/user/signup',
        method: 'POST',
        data: userData,
      });
      return response;
    } catch (error) {
      console.error('Failed to signup:', error);
      throw error;
    }
  }
}
