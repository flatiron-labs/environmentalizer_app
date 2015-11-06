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

  onApplyButtonClick: function() {
    ipc.send('check-installations', []);
  }
});

module.exports = TitleBarView;
