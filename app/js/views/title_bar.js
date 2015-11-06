var Marionette = require('backbone.marionette');

var TitleBarView = Marionette.ItemView.extend({
  template: require('../templates/title_bar.jade'),

  ui: {
    applyButton: 'button#apply'
  },

  events: {
    'click @ui.applyButton': 'onApplyButtonClick'
  },

  onApplyButtonClick: function() {
    alert('Clicked!');
  }
});

module.exports = TitleBarView;
