var Backbone = require('backbone')
  , _        = require('underscore')
  , ipc      = electronRequire('ipc')
  ;

var EventManager = Backbone.Model.extend({
  ipcEvents: {
    'check-installations-results': 'handleInstallationCheckResults'
  },

  start: function() {
    _.each(this.ipcEvents, function(fun, e) {
      ipc.on(e, function(arg) {
        this[fun]({results: arg});
      }.bind(this));
    }.bind(this));
  },

  handleInstallationCheckResults(args) {
    alert(args.results);
  },
});

module.exports = EventManager;
