import Ember from 'ember';
import posts from '../data/posts';

export default Ember.Route.extend({
  model: function(params) {
    return posts.findBy('id', params.post_id);
  }
});
