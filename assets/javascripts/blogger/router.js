import Ember from 'ember';

var Router = Ember.Router.extend();

Router.map(function() {
  this.route('about');
  this.route('posts', function() {
    this.route('post', { path: ':post_id', resetNamespace: true });
  });
});

export default Router;
