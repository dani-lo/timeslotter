define([
	"backbone",
	"underscore",
	"jquery",
	"collections/slots"
], function (Backbone, _, jQuery, SlotsCollection) {
	"use strict";
	//
	function SlotsHub () {
		//
	}

	SlotsHub.prototype.start = function () {
		//
		var dfd = jQuery.Deferred();

		return dfd.promise();
	}

	return SlotsHub;
});