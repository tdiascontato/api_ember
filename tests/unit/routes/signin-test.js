import { module, test } from 'qunit';
import { setupTest } from 'api-ember/tests/helpers';

module('Unit | Route | signin', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:signin');
    assert.ok(route);
  });
});
