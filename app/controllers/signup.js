// app/controllers/signup.js
import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';

export default class SignupController extends Controller {
  @service signup;
  model = {
    name: '',
    email: '',
    password: '',
    cpf: '',
  };

  @action
  updateField(field, event) {
    this.model[field] = event.target.value;
  }

  @action
  async submitForm(event) {
    event.preventDefault();
    try {
      await this.signup.register(this.model);
      alert('Signup successful!');
    } catch (error) {
      alert('Signup failed: ' + error.message);
    }
  }
}
