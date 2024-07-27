// app/routes/signup.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';

export default class SignupRoute extends Route {
  @service signup;
  model() {
    return {
      name: '',
      email: '',
      password: '',
      cpf: '',
    };
  }
  @action
  updateField(field, event) {
    this.modelFor(this.routeName)[field] = event.target.value;
  }

  @action
  async signupUser(userData) {
    try {
      await this.signup.signup(userData);
      alert('User signed up successfully!');
      this.transitionTo('home');
    } catch (error) {
      alert('Failed to signup. Please try again.');
    }
  }
}
