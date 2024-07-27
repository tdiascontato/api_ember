import Service from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
const api = require('api')
export default class HomeService extends Service {
  @tracked items = [];

  @action
  async fetchItems() {
    try {
      const data = await api({
        url: 'https://example.com/api/items', // Substitua pela URL correta da sua API
        method: 'GET'
      });
      this.items = data;
    } catch (error) {
      console.error('Failed to fetch items:', error);
    }
  }
}
