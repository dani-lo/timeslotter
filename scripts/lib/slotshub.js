define([
	"backbone",
	"underscore",
	"jquery",
	"collections/slots",
	"lib/slotdata"
], function (Backbone, _, jQuery, SlotsCollection, SlotData) {
	"use strict";
	//
	var SlotsHub = function () {
		//
		this.collection =  new SlotsCollection();
	}
	/**
	*
	*
	*/
	SlotsHub.prototype.fetchSlots = function () {
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
	SlotsHub.prototype.storeSlot = function (slotModel) {
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