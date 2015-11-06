var _          = require('underscore')
  , Marionette = require('backbone.marionette')
  ;

var ToolView = Marionette.ItemView.extend({
  template: function() {
    return _.template("<img class='img-circle media-object pull-left' src='img/test_avatar.png' width='32' height='32'><div class='media-body'><strong>List item title</strong><p>Lorem ipsum dolor sit amet.</p></div>")({});
  },

  tagName: 'li',

  className: 'list-group-item'
});

var ToolsView = Marionette.CompositeView.extend({
  template: function() {
    return _.template("<div class='list-group-header tools-header'><div class='header-title'><h1 class='heading'>Environmentalizer</h1></div><div class='header-button'><button class='btn btn-large btn-positive'>Apply</button></div></div><ul class='list-group'></ul>")({});
  },

  className: 'environmentalizer-tools',

  childView: ToolView,

  childViewContainer: 'ul.list-group',

  onBeforeShow: function() {
    this.collection.fetch();
  }
});

module.exports = ToolsView;
