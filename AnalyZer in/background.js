chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 320,
      'height': 260
    },alwaysOnTop: true
  });

});