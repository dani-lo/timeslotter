require.config({paths:{jquery:"jquery/dist/jquery.min",underscore:"underscore-amd/underscore",backbone:"backbone-amd/backbone",text:"requirejs-text/text",spec:"jasmine/spec",jasmine:"lib/jasmine","jasmine-html":"lib/jasmine-html",boot:"lib/boot",squire:"squire/src/Squire"},shim:{jasmine:{exports:"window.jasmineRequire"},"jasmine-html":{deps:["jasmine"],exports:"window.jasmineRequire"},boot:{deps:["jasmine","jasmine-html"],exports:"window.jasmineRequire"}}}),require(["boot"],function(){"use strict";var a=[];a.push("spec/timeslotter_Spec"),require(a,function(){window.onload()})});