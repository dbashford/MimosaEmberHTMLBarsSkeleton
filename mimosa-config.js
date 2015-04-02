var htmlbarsLib;
try {
  // have to guard against first mimosa bower run
  // when this doesn't exist just yet
  htmlbarsLib =
    require('./.mimosa/bower/bower_components/ember/ember-template-compiler');
} catch (err) {
  var isExecutingBower = process.argv.some(function(arg){ return arg === "bower"});
  // error out unless user is currently running bower
  if (!isExecutingBower) {
    console.error("You need to execute 'mimosa bower' first.")
    process.exit(1);
  }
}

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
    'ember-htmlbars@0.5.0',

    // compilers
    'esperanto-es6-modules',
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
    'web-package'
  ],
  minifyJS: {
    exclude:[/ember.debug.js$/, /\.min\./]
  },
  sass: {
    // want to use node-sass rather than ruby compiler
    lib: require('node-sass')
  },
  require: {
    optimize: {
      overrides: {
        paths: {
          // want to use ember.min for packaging
          ember: 'vendor/ember/ember.min'
        }
      }
    }
  },
  emberHtmlbars: {
    emberPath: "ember",
    helpers:["blogger/helpers/helpers"],
    lib: htmlbarsLib
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
        //'ember-htmlbars': true,
        //'ember-htmlbars-block-params': true
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
    // keeping bower_components around for ember-template-compiler.js
    bowerDir: {
      clean: false
    },
    copy: {
      // ember still depends on handlebars via bower, but we don't need it
      exclude:[/handlebars/],
      mainOverrides: {
        showdown: ["compressed/showdown.js"],
        bootstrap: ["dist/css/bootstrap.css", "dist/js/bootstrap.js"],
        ember:["ember.debug.js","ember.min.js"]
      }
    }
  },
  server: {
    views: {
      compileWith: "handlebars",
      extension: "hbs"
    }
  },
  jshint: {
    rules: {
      esnext:true
    }
  }
};
