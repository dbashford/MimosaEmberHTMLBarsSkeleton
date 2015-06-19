import Ember from 'ember';
import posts from '../data/posts';

export default Ember.Route.extend({
  model: function() {
    return posts;
  }
});
