var Marionette = require('backbone.marionette')
  , radio      = require('../lib/radio')
  ;

var ToolView = Marionette.ItemView.extend({
  template: require('../templates/tool.jade'),

  tagName: 'li',

  className: 'list-group-item',

  ui: {
    'title': 'strong.title'
  },

  onBeforeShow: function() {
    this.listenTo(radio, 'installation:check-result', this.handleCheckResult);
  },

  handleCheckResult: function(args) {
    if (args.id === this.model.get('id')) {
      if (args.result === '1') {
        this.ui.title.removeClass('not-installed');
        this.ui.title.addClass('installed');
      } else {
        this.ui.title.removeClass('installed');
        this.ui.title.addClass('not-installed');
      }
    }
  }
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
