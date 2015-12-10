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
		this.collection =  new SlotsCollection();
	}
	/**
	*
	*
	*/
	SlotsHub.prototype.start = function () {
		//
		var dfd = jQuery.Deferred();

		this.collection.fetch({
			success: function (d) {
				dfd.resolve();
			},
			error: function () {
				dfd.reject(new Error("Can not fetch slots data"));
			}
		});

		return dfd.promise();
	}
	/**
	*
	*
	*/
	SlotsHub.prototype.store = function () {
		//
		var dfd = jQuery.Deferred();

		// TODO ....

		return dfd.promise();
	}
	/**
	*
	*
	*/
	return SlotsHub;
});