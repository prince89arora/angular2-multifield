exports.config = {
  // See http://brunch.io/#documentation for docs.
  files: {
    javascripts: {
      joinTo: {
        'vendor.js': /^node_modules/,
        'main.js': /^app/
      },
      order: {
        after: [/\.html$/, /\.css$/]
      }
    },
    stylesheets: {
      joinTo: 'app.css'
    },
    templates: {
      joinTo: 'main.js'
    }
  },
  plugins: {
    inlineCss: {
      html: true,
      passthrough: [/^node_modules/, 'app/global.css']
    },

    copycat:{
      "fonts" : ["node_modules/bootstrap/dist/fonts"],
      verbose : true, //shows each file that is copied to the destination directory 
      onlyChanged: true //only copy a file if it's modified time has changed (only effective when using brunch watch) 
    }

  },

  npm: {
    styles: {
      bootstrap: ['dist/css/bootstrap.css']
    },
    javascripts: {
      bootstrap: ['dist/js/bootstrap.js']
    },
  }
};
