define([
	"backbone",
	"underscore",
	"jquery",
	"collections/slots",
	"util/slotdata"
], function (Backbone, _, jQuery, SlotsCollection, SlotData) {
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
	SlotsHub.prototype.fetch = function () {
		//
		var dfd = jQuery.Deferred();

		this.collection.fetch({
			success: _.bind(function (d) {
				//
				var slotsDataItems = [],
					slotItem;

				this.collection.each(function (slotModel) {
					//
					slotItem = new SlotData();
					slotItem.initialize();
					//
					slotItem.inflate(slotModel);
					
					slotsDataItems.push(slotItem);
				});
				//
				dfd.resolve(slotsDataItems);
			}, this),
			error: function () {
				//
				dfd.reject(new Error("Can not fetch slots data"));
			}
		});

		return dfd.promise();
	}
	/**
	*
	*
	*/
	SlotsHub.prototype.store = function (slotModel) {
		//
		var slotsDataItem = new SlotData();
		slotsDataItem.initialize();
		slotsDataItem.inflate(slotModel);
		//
		console.log(slotsDataItem.toObject());
	}
	/**
	*
	*
	*/
	return SlotsHub;
});