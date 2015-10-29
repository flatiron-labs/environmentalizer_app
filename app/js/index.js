var Marionette = require('backbone.marionette')
  , ipc        = require('ipc')
  ;

var MainView = Marionette.ItemView.extend({
  template: false,

  ui: {
    'startButton': 'a#start'
  },

  events: {
    'click @ui.startButton': 'startButtonClicked',
  },

  startButtonClicked: function(e) {
    e.preventDefault();

    ipc.send('start-script');
  },

  onScriptSuccess: function() {
    this.ui.startButton.css('background-color', 'green');
    this.ui.startButton.css('color', 'white');
    this.ui.startButton.text('SUCCESS!');
  },

  onScriptError: function(err) {
    this.ui.startButton.css('background-color', 'red');
    this.ui.startButton.css('color', 'white');
    this.ui.startButton.text(err.stderr);
  }
});

var indexView = new MainView({ el: '#main' });
indexView.render();

ipc.on('error-running-script', function(arg) {
  indexView.triggerMethod('script:error', arg);
});

ipc.on('success-running-script', function() {
  indexView.triggerMethod('script:success');
});
