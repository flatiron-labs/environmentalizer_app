var Marionette = require('backbone.marionette')
  , ipc        = electronRequire('ipc')
  ;

var TitleBarView = Marionette.ItemView.extend({
  template: require('../templates/title_bar.jade'),

  ui: {
    applyButton: 'button#apply'
  },

  events: {
    'click @ui.applyButton': 'onApplyButtonClick'
  },

  initialize: function(opts) {
    this.eventManager = opts.eventManager;
  },

  onApplyButtonClick: function() {
    this.eventManager.checkInstallations([]);
  }
});

module.exports = TitleBarView;
