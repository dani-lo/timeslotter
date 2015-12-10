define([
	"underscore",
	"moment"
], function (_, moment) {
	"use strict";
	//
	function SlotData () {
		//
		this.types = {
			"A": 1,
			"B": 2,
			"c": 4
		};
		//
		this.interval = null;
		this.range = 24;
		this.slots = [];
	}
	/**
	*
	*
	*/
	SlotData.prototype.initialize = function (options) {
		//
		this.interval = this.types[options.type];

		this.initSLots();
	}
	/**
	*
	*
	*/
	SlotData.prototype.initSLots = function () {
		//
		var totalSlots = this.range / this.interval;

		for (var i = 0; i < totalSlots; i++) {
			//
			this.slots.push({
				id: i,
				booked: false
			});
		}
	}
	/**
	*
	*
	*/
	SlotData.prototype.bookSlot = function (slotId) {
		//
		_.each(this.slots, _.bind(function (slot) {
			//
			if (slot.id === slotId) {
				slot.booked = true;
			}
		}, this));
	}
	/**
	*
	*
	*/
	SlotData.prototype.freeSlot = function (slotId) {
		//
		_.each(this.slots, _.bind(function (slot) {
			//
			if (slot.id === slotId) {
				slot.booked = false;
			}
		}, this));
	}
	/**
	*
	*
	*/
	SlotData.prototype.toArray = function () {
		//
		var bookedSlotsArray = [];
		//
		_.each(this.slots, _.bind(function (slot) {
			//
			if (slot.booked === true) {
				bookedSlotsArray.push(slot.id);
			}
		}, this));

		return bookedSlotsArray;
	}
	/**
	*
	*
	*/
	return SlotData;
});