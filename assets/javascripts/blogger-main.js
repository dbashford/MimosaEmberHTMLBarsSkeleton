require(['common'], function() {
  require(['app', 'blogger/modules'], function(App, modules) {
    window.Blogger = App.createWithMixins(modules);
    if (modules.Router) {
      window.Blogger.Router.map(modules.Router);
    }
  });
});
