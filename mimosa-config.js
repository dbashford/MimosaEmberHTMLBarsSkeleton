var htmlbarsLib;
try {
  // have to guard against first mimosa bower run
  // when this doesn't exist just yet
  htmlbarsLib = require('./assets/javascripts/vendor/ember/ember-template-compiler');
} catch (err) {
  // error out unless user is currently running bower
  if (process.argv.indexOf('bower') === -1 && process.argv.indexOf('bower:clean') === -1) {
    console.error('You need to execute "mimosa bower" first.')
    process.exit(1);
  }
}

exports.config = {
  minMimosaVersion:'2.3.1',
  modules: [
    // misc
    'jshint@2.2.0',
    'bower',

    // ember-specific stuff
    'ember-module-import',
    'ember-test',
    'ember-htmlbars@0.5.0',

    // compilers
    'babel',
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
    'htmlclean',
    'require@3.2.0',
    'web-package'
  ],
  htmlclean: {
    extensions:['hbs']
  },
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
    emberPath: 'ember',
    helpers:['blogger/helpers/helpers'],
    lib: htmlbarsLib
  },
  emberModuleImport: {
    apps: [{
      namespace: 'blogger',
      manifestFile: 'modules',
      additional: ['router']
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
  template: {
    nameTransform: /.*\/templates\//
  },
  combine: {
    folders:[{
      folder: 'stylesheets/vendor',
      output: 'stylesheets/vendor.css'
    }]
  },
  bower: {
    copy: {
      // ember still depends on handlebars via bower, but we don't need it
      exclude:[/handlebars/],
      mainOverrides: {
        showdown: ['compressed/showdown.js'],
        bootstrap: ['dist/css/bootstrap.css', 'dist/js/bootstrap.js'],
        ember:['ember.debug.js','ember.min.js', 'ember-template-compiler.js']
      }
    }
  },
  server: {
    views: {
      compileWith: 'handlebars',
      extension: 'hbs'
    }
  },
  jshint: {
    rules: {
      esnext:true
    },
    executeAfterCompile: false
  },
  babel: {
    lib: require('babel-core'),
    exclude: [/[/\\]vendor[/\\]/],
    options: {
      whitelist: ['es6.modules'],
      modules: 'amd',
      sourceMap: 'inline'
    }
  }
};
