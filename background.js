chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 250,
      'height': 365
    },
	/*
    'innerBounds': { 
    minWidth: 270,
    maxWidth: 270,
    'height': 430,
    maxHeight: 430
    },
    */
    alwaysOnTop: true
  });

});