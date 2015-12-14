define([
	"underscore",
	"jquery",
	"collections/slots",
	"lib/slotdata"
], function (_, jQuery, SlotsCollection, SlotData) {
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
				dfd.resolve(this.populateSlotsData());
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
	SlotsHub.prototype.populateSlotsData = function (d) {
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
		
		return slotsDataItems;
	}

	
	/**
	*
	*
	*/
	SlotsHub.prototype.storeSlot = function (slotModel) {
		// not implemented
		// as we are using a static json file
	}
	/**
	*
	*
	*/
	return SlotsHub;
});