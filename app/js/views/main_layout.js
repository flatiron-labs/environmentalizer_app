var _          = require('underscore')
  , Marionette = require('backbone.marionette')
  ;

var MainLayoutView = Marionette.LayoutView.extend({
  template: require('../templates/main_layout.jade'),

  regions: {
    title: '#title-bar',
    tools: '#tools'
  }
});

module.exports = MainLayoutView;
