requirejs.config({
  baseUrl:  "/javascripts",
  shim: {
    'ember': {
      deps: ['htmlbars', 'jquery', 'handlebars'],
      exports: 'Ember'
    },
    'showdown': {
      exports: 'Showdown'
    }
  },
  paths: {
    'app': 'blogger/app',
    'jquery': 'vendor/jquery/jquery',
    'handlebars': 'vendor/handlebars/handlebars',
    'htmlbars': 'vendor/htmlbars',
    'ember': 'vendor/ember/ember',
    'showdown': 'vendor/showdown/showdown',
    'moment': 'vendor/moment/moment'
  }
});
