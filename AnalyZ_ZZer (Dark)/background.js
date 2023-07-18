chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 275,
      'height': 295
    },alwaysOnTop: true
  });

});