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
		this.type = null;
		this.name = null;
		this.slots = [];
		//
		this.interval = null;
		//
		this.range = 24;
	}
	/**
	*
	*
	*/
	SlotData.prototype.initialize = function () {
		//
		this.initSlots();
	}
	/**
	*
	*
	*/
	SlotData.prototype.initSlots = function () {
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
	SlotData.prototype.inflate = function (slotModel) {
		//
		this.type = slotModel.get("type");
		this.name = slotModel.get("name");
		this.interval = this.range / this.types[this.type];

		var boookedSlots = slotModel.get("booked");

		_.each(this.slots, _.bind(function (slot) {
			//
			if (boookedSlots.indexOf(slot.id) !== -1) {
				//
				this.bookSlot(slot.id);
			}
		}, this));
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
	SlotData.prototype.toObject = function () {
		//
		var bookedSlotsArray = [];
		//
		_.each(this.slots, _.bind(function (slot) {
			//
			if (slot.booked === true) {
				bookedSlotsArray.push(slot.id);
			}
		}, this));

		return {
			name: this.name,
			type: this.type,
			booked: bookedSlotsArray
		};
	}
	/**
	*
	*
	*/
	return SlotData;
});