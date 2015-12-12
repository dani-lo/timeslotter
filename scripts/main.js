require.config({
  paths: {
    "jquery": "jquery/dist/jquery.min",
    "underscore": "underscore-amd/underscore",
    "backbone": "backbone-amd/backbone",
	"text": "requirejs-text/text"
  }
});

require(["views/app"], function(AppView) {
	//
	"use strict";
	
	var appView = new AppView();

	appView.initialize().render();
});