import Ember from 'ember';
import testApp from 'tests/create_test_app';

var App;

module('Acceptances - Posts', {
  setup: function() {
    App = testApp();
  },
  teardown: function() {
    Ember.run(App, 'destroy');
  }
});

test("displays all recent posts", function() {
  expect(1);

  visit('/posts');

  andThen(function() {
    var header = find('thead:contains("Recent Posts")');
    var posts = find('tbody > tr', header.closest('table'));
    equal(posts.length, 2, "There are two recent posts.");
  });
});
