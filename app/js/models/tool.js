var Backbone       = require('backbone')
  , fs             = require('fs')
  , path           = require('path')
  , temp           = require('temp')
  , exec           = require('child_process').exec
  , XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
  ;

var Tool = Backbone.Model.extend({
  checkUrl: function() {
    return 'https://raw.githubusercontent.com/flatiron-labs/environmentalizer_app/master/script/' + this.get('checkScript');
  },

  versionUrl: function() {
    return 'https://raw.githubusercontent.com/flatiron-labs/environmentalizer_app/master/script/' + this.get('versionScript');
  },

  checkInstallation: function(opts) {
    var sender    = opts.sender
      , scriptUrl = this.checkUrl()
      , title     = this.get('title')
      , id        = this.get('id')
      , req       = new XMLHttpRequest()
      , resp
      ;

    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        temp.track();

        temp.mkdir(this.get('slug'), function(err, dirPath) {
          var filePath = path.join(dirPath, 'check.sh');

          fs.writeFile(filePath, req.responseText, function(err) {
            fs.chmodSync(filePath, '0755');
            exec(filePath, function(error, stdout, stderr) {
              sender.send('check-installation-result', {id: id, title: title, result: stdout});
            });
          });
        });
      }
    }.bind(this)

    req.open("GET", scriptUrl, true);
    req.send();
  },

  checkVersion: function(opts) {
    var sender    = opts.sender
      , scriptUrl = this.versionUrl()
      , title     = this.get('title')
      , id        = this.get('id')
      , req       = new XMLHttpRequest()
      , resp
      ;

    req.onreadystatechange = function() {
      if (req.readyState == 4 && req.status == 200) {
        temp.track();

        temp.mkdir(this.get('slug'), function(err, dirPath) {
          var filePath = path.join(dirPath, 'version.sh');

          fs.writeFile(filePath, req.responseText, function(err) {
            fs.chmodSync(filePath, '0755');
            exec(filePath, function(error, stdout, stderr) {
              sender.send('check-installation-result', {id: id, title: title, result: stdout});
            });
          });
        });
      }
    }.bind(this)

    req.open("GET", scriptUrl, true);
    req.send();
  }
});

module.exports = Tool;
