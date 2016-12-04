import { test } from 'qunit';
import moduleForAcceptance from 'super-rentals/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list rentals');

test('should redirect to rentals route', (assert) => {
  visit('/');
  andThen(() => {
    assert.equal( currentURL(), '/rentals', 'should redirect automatically');
  })
});

test('should list available rentals.', function (assert) {
  visit('/');
  andThen(() => {
    assert.equal(find('.listing').length, 3, 'should see e listing')
  })
});

test('should link to information about the company.', function (assert) {
});

test('should link to contact information.', function (assert) {
});

test('should filter the list of rentals by city.', function (assert) {
});

test('should show details for a specific rental', function (assert) {
});
