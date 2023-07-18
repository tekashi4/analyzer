chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 285,
      'height': 440
    },alwaysOnTop: true
  });

});