require.config({
	paths: {
		"jquery": "jquery/dist/jquery.min",
		"underscore": "underscore-amd/underscore",
		"backbone": "backbone-amd/backbone",
		"text": "requirejs-text/text",
		"spec": "jasmine/spec",
		"jasmine": "lib/jasmine",
		"jasmine-html": "lib/jasmine-html",
		"boot":  "lib/boot",
		"squire": "squire/src/Squire"
	},
	shim: {
		"jasmine": {
			exports: "window.jasmineRequire"
		},
		"jasmine-html": {
			deps: ["jasmine"],
			exports: "window.jasmineRequire"
		},
		"boot": {
			deps: ["jasmine", "jasmine-html"],
			exports: "window.jasmineRequire"
		}
    }
});

require(["boot"], function () {
	//
	"use strict";

	var specs = [];

	specs.push("spec/timeslotter_Spec");

    // Load the specs
    require(specs, function () {

      // Initialize the HTML Reporter and execute the environment (setup by `boot.js`)
      window.onload();
    });
  });

/*
require(["underscore", "jquery", "jasmine-html"], function(_, $, jasmine){

	"use strict";

	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var htmlReporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(htmlReporter);

	jasmineEnv.specFilter = function(spec) {
		return htmlReporter.specFilter(spec);
	};

	var specs = [];

	specs.push("spec/timeslotter_Spec");

	$(function(){
		require(specs, function(){
			jasmineEnv.execute();
		});
	});

});
*/