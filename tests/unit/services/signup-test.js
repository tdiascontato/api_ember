import { module, test } from 'qunit';
import { setupTest } from 'api-ember/tests/helpers';

module('Unit | Service | signup', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:signup');
    assert.ok(service);
  });
});
