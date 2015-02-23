import Ember from 'ember';

Ember.Application.initializer({
  name: 'router',

  initialize: function(container, application) {
    application.Router.map(function() {
      this.resource('about');
      this.resource('posts', function() {
        this.resource('post', { path: ':post_id' });
      });
    });
  }
});
