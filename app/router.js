import EmberRouter from '@ember/routing/router';
import config from 'api-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('signup');
  this.route('signin');
  this.route('item', { path: '/item/:item_id' });
  this.route('cart');
  this.route('not-found', { path: '/*path' });
});
