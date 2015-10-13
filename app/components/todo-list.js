import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    create() {
      this.attrs.create(this.get('newTodo'));
    }
  }
});
