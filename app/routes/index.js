import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel() {
    console.log(...arguments);
    this.replaceWith('rentals')
  }
});
