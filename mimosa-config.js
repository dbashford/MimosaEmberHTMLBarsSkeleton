exports.config = {
  minMimosaVersion:"2.3.1",
  modules: [
    // misc
    'jshint',
    'bower',

    // ember-specific stuff
    'ember-module-import',
    'ember-test',
    'ember-env',
    'ember-htmlbars',

    // compilers
    'es6-module-transpiler',
    'copy',
    'sass',
    'stream-copy',

    // server support
    'live-reload',
    'server',
    'server-reload',

    // packaging
    'combine',
    'minify-js',
    'minify-css',
    'minify-img',
    'require@3.1.2',
    'web-package',
    'handlebars-on-window'
  ],
  sass: {
    // want to use node-sass rather than ruby compiler
    lib: require('node-sass')
  },
  require: {
    optimize: {
      overrides: {
        paths: {
          // want to use ember.prod for packaging
          ember: 'vendor/ember/ember.prod'
        }
      }
    }
  },
  emberHtmlbars: {
    emberPath: "ember",
    helpers:["blogger/helpers/helpers"]
  },
  emberModuleImport: {
    apps: [{
      namespace: "blogger",
      manifestFile: "modules",
      additional: ["router"]
    }]
  },
  emberTest: {
   apps: [{
     testLocation: 'tests',
     testAppFactory: 'create_test_app',
     stylesheetPaths: [
       '/public/stylesheets/vendor.css',
       '/public/stylesheets/blogger.css'
     ]
   }]
  },
  emberEnv: {
    env: {
      FEATURES: {
        'ember-htmlbars': true,
        'ember-htmlbars-block-params': true
      }
    }
  },
  template: {
    nameTransform: /.*\/templates\//
  },
  combine: {
    folders:[{
      folder: "stylesheets/vendor",
      output: "stylesheets/vendor.css"
    }]
  },
  bower: {
    copy: {
      mainOverrides: {
        showdown: ["compressed/showdown.js"],
        bootstrap: ["dist/css/bootstrap.css", "dist/js/bootstrap.js"],
        ember:["ember.js","ember.prod.js"]
      }
    }
  },
  server: {
    views: {
      compileWith: "handlebars",
      extension: "hbs"
    }
  }
};
