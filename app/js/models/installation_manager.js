var Backbone     = require('backbone')
  , ChildProcess = require('child_process')
  , spawn        = ChildProcess.spawn
  , exec         = ChildProcess.exec
  ;

var InstallationManager = Backbone.Model.extend({
  checkInstallations: function(args) {
    var sender = args.sender;
    var data   = args.data;

    sender.send('check-installations-results', {'success': 'yep'});
  }
});

module.exports = InstallationManager;
