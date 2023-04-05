chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('window.html', {
    'bounds': {
      'width': 400,
      'height': 575
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