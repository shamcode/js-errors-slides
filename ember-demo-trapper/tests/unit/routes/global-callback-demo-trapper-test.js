import { moduleFor, test } from 'ember-qunit';

moduleFor('route:global-callback-demo-trapper', 'Unit | Route | global callback demo trapper', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
});

test('it exists', function(assert) {
  let route = this.subject();
  assert.ok(route);
});
