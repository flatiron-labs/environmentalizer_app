var Backbone = require('backbone');

var EventManager = Backbone.Model.extend({
  handleEvent: function(args) {
    alert(args.eventType + ': ' + args.results);
  }
})

module.exports = EventManager;
