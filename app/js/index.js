var ipc            = electronRequire('ipc')
  , Tools          = require('./collections/tools')
  , MainLayoutView = require('./views/main_layout')
  , ToolsView      = require('./views/tools')
  , TitleBarView   = require('./views/title_bar')
  , EventManager   = require('./models/event_manager')
  ;

var eventManager = new EventManager;
eventManager.start();

var mainLayout = new MainLayoutView({
  el: '#main'
});

var toolsView = new ToolsView({
  collection: new Tools,
  eventManager: eventManager
});

var titleBarView = new TitleBarView({
  eventManager: eventManager
});

mainLayout.render();

mainLayout.showChildView('tools', toolsView);
mainLayout.showChildView('title', titleBarView);

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
