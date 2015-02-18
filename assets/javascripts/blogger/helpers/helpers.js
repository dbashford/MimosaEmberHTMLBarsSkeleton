import Ember from 'ember';
import Showdown from 'showdown';
import moment from 'moment';

var showdown = new Showdown.converter();

Ember.HTMLBars.registerBoundHelper = function(name, helper) {
  var boundHelper = Ember.HTMLBars.makeBoundHelper(helper);
  Ember.HTMLBars._registerHelper(name, boundHelper);
};

Ember.HTMLBars.registerBoundHelper('format-markdown', function(input) {
  return new Ember.Handlebars.SafeString(showdown.makeHtml(input[0]));
});

Ember.HTMLBars.registerBoundHelper('format-date', function(date) {
  return moment(date[0]).fromNow();
});