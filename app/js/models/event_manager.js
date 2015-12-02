var Backbone = require('backbone')
  , _        = require('underscore')
  , ipc      = electronRequire('ipc')
  , radio    = require('../lib/radio')
  ;

var EventManager = Backbone.Model.extend({
  ipcEvents: {
    'check-installation-result': 'handleInstallationCheckResult',
    'check-version-result': 'handleVersionCheckResult'
  },

  start: function() {
    _.each(this.ipcEvents, function(fun, e) {
      ipc.on(e, function(arg) {
        this[fun](arg);
      }.bind(this));
    }.bind(this));
  },

  handleInstallationCheckResult(args) {
    radio.trigger('installation:check-result', args);
  },

  handleVersionCheckResult(args) {
    radio.trigger('installation:version-result', args);
  },

  checkInstallations: function(arg) {
    ipc.send('check-installations', arg)
  },

  checkVersion: function(arg) {
    ipc.send('check-version', arg)
  }
});

module.exports = EventManager;
