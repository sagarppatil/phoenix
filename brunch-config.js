exports.config = {
  // See http://brunch.io/#documentation for docs.
  modules: {
    // use common js wrapper, but expose global `Phoenix` object for browser
    wrapper: function(path, data){
      return(
        "require.define({phoenix: function(exports, require, module){ " + data + " }});\n" +
        "if(typeof(window) === 'object' && !window.Phoenix){ window.Phoenix = require('phoenix') };"
      )
    }
  },
  files: {
    javascripts: {
      joinTo: 'phoenix.js'
    },
    stylesheets: {
      joinTo: 'app.css'
    },
  },

  // Phoenix paths configuration
  paths: {
    // Which directories to watch
    watched: ["web/static", "test/static"],

    // Where to compile files to
    public: "priv/static"
  },

  // Configure your plugins
  plugins: {
    ES6to5: {
      // Do not use ES6 compiler in vendor code
      ignore: [/^(vendor)/]
    }
  }
};
