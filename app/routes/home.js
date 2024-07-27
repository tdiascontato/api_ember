// app/routes/home.js
import Route from '@ember/routing/route';

export default class HomeRoute extends Route {
  async model() {
    let response = await api({
      method: 'GET',
      url: '',
    });
    this.items = await response.json();
    return response;
  }
}
