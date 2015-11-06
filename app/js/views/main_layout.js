var _          = require('underscore')
  , Marionette = require('backbone.marionette')
  ;

var MainLayoutView = Marionette.LayoutView.extend({
  template: function() {
    return _.template("<div id='tools'></div>")({});
  },

  regions: {
    tools: '#tools'
  }
});

module.exports = MainLayoutView;
