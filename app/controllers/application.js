import Ember from 'ember';

export default Ember.Controller.extend({
  store: Ember.inject.service(),
  actions: {
    createTodo(text) {
      console.log(text);
      let record = this.get("store").createRecord('todo', {text});
      record.save();
    }
  }
});
