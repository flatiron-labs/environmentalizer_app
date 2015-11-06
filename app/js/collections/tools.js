var Backbone = require('backbone')
  , Tool     = require('../models/tool')
  ;

var ToolsCollection = Backbone.Collection.extend({
  url: 'https://raw.githubusercontent.com/flatiron-labs/environmentalizer_app/master/script/mac/environmentalizer.json',

  model: Tool
});

module.exports = ToolsCollection
