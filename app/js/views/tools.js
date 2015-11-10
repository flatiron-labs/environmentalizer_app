var Marionette = require('backbone.marionette');

var ToolView = Marionette.ItemView.extend({
  template: require('../templates/tool.jade'),

  tagName: 'li',

  className: 'list-group-item'
});

var ToolsView = Marionette.CompositeView.extend({
  template: require('../templates/tools.jade'),

  className: 'environmentalizer-tools',

  childView: ToolView,

  childViewContainer: 'ul.list-group',

  initialize: function(opts) {
    this.eventManager = opts.eventManager;
  },

  onBeforeShow: function() {
    this.collection.fetch({
      success: function(collection, response, options) {
        this.eventManager.checkInstallations(collection);
      }.bind(this)
    });
  }
});

module.exports = ToolsView;
