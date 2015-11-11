var Backbone = require('backbone')
  , _        = require('underscore')
  , ipc      = electronRequire('ipc')
  ;

var EventManager = Backbone.Model.extend({
  ipcEvents: {
    'check-installation-result': 'handleInstallationCheckResult'
  },

  start: function() {
    _.each(this.ipcEvents, function(fun, e) {
      ipc.on(e, function(arg) {
        this[fun](arg);
      }.bind(this));
    }.bind(this));
  },

  handleInstallationCheckResult(args) {
    console.log(args.title + ': ' + args.result);
  },

  checkInstallations: function(arg) {
    ipc.send('check-installations', arg)
  }
});

module.exports = EventManager;
