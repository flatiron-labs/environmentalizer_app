var Backbone     = require('backbone')
  , ChildProcess = require('child_process')
  , ipc          = require('ipc')
  , spawn        = ChildProcess.spawn
  , exec         = ChildProcess.exec
  , _            = require('underscore')
  ;

var InstallationManager = Backbone.Model.extend({
  ipcEvents: {
    'check-installations': 'checkInstallations'
  },

  start: function() {
    _.each(this.ipcEvents, function(fun, e) {
      ipc.on(e, function(event, arg) {
        this[fun]({sender: event.sender, data: arg});
      }.bind(this));
    }.bind(this));
  },

  checkInstallations: function(args) {
    var sender = args.sender;
    var data   = args.data;

    sender.send('check-installations-results', {'success': 'yep'});
  }
});

module.exports = InstallationManager;
