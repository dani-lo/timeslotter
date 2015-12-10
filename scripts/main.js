require.config({
  paths: {
    "jquery": "/vendor/jquery/dist/jquery.min",
    "underscore": "/vendor/underscore-amd/underscore",
    "backbone": "/vendor/backbone-amd/backbone",
	"text": "/node_modules/text/text"
  }
});

require(["views/app"], function(AppView) {
	//
	"use strict";

	console.log(AppView);
	
	var appView = new AppView();

	appView.initialize().render();
});