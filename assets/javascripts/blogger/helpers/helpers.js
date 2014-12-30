import Ember from 'ember';
import Showdown from 'showdown';
import moment from 'moment';

var showdown = new Showdown.converter();

Ember.HTMLBars.helper('format-markdown', function(input) {
  return new Ember.Handlebars.SafeString(showdown.makeHtml(input));
});

Ember.HTMLBars.helper('format-date', function(date) {
  return moment(date).fromNow();
});