var Marionette = require('backbone.marionette')
    Backbone   = require('backbone')
  , ipc        = require('ipc')
  , _          = require('underscore')
  ;

var Tool = Backbone.Model.extend({});

var ToolsCollection = Backbone.Collection.extend({
  url: 'https://raw.githubusercontent.com/flatiron-labs/environmentalizer_app/master/script/mac/environmentalizer.json',
  model: Tool
});

var MainLayoutView = Marionette.LayoutView.extend({
  template: function() {
    return _.template("<div id='tools'></div>")({});
  },

  regions: {
    tools: '#tools'
  }
});

var ToolView = Backbone.Marionette.ItemView.extend({
  template: function() {
    return _.template("<img class='img-circle media-object pull-left' src='img/test_avatar.png' width='32' height='32'><div class='media-body'><strong>List item title</strong><p>Lorem ipsum dolor sit amet.</p></div>")({});
  },

  tagName: 'li',

  className: 'list-group-item'
});

var ToolsCompositeView = Marionette.CompositeView.extend({
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

var mainLayout = new MainLayoutView({
  el: '#main'
});

var toolsView = new ToolsCompositeView({
  collection: new ToolsCollection
});

mainLayout.render();

mainLayout.showChildView('tools', toolsView);

//var MainView = Marionette.ItemView.extend({
  //template: false,

  //ui: {
    //'startButton': 'a#start'
  //},

  //events: {
    //'click @ui.startButton': 'startButtonClicked',
  //},

  //startButtonClicked: function(e) {
    //e.preventDefault();
    //if (this.ui.startButton.hasClass('open')) {
      //ipc.send('open-file', this.model.get('fileLocation'));
    //} else {
      //ipc.send('start-script');
    //}
  //},

  //onScriptSuccess: function(stdout) {
    //this.changeButton('success');
    //this.ui.startButton.text('OPEN');
    //this.ui.startButton.addClass('open');
    //this.model.set('fileLocation', stdout);
  //},

  //changeButton: function(type) {
    //if (type == 'success') {
      //this.ui.startButton.css('background-color', 'green');
      //this.ui.startButton.css('color', 'white');
    //} else {
      //this.ui.startButton.css('background-color', 'red');
      //this.ui.startButton.css('color', 'white');
    //}
  //},

  //onScriptError: function(err) {
    //this.changeButton('error');
    //this.ui.startButton.text(err.stderr);
  //}
//});

//var indexModel = new MainModel();
//var indexView = new MainView({
  //el: '#main',
  //model: indexModel
//});

//indexView.render();

//ipc.on('error-running-script', function(arg) {
  //indexView.triggerMethod('script:error', arg);
//});

//ipc.on('success-running-script', function(arg) {
  //indexView.triggerMethod('script:success', arg);
//});
