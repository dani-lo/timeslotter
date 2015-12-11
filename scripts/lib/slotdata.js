define([
	"underscore"
], function (_) {
	"use strict";
	//
	var SlotData = function () {
		//
		this.types = {
			"A": 2,
			"B": 3,
			"C": 4
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
	SlotData.prototype.initialize = function (options) {
		//
		console.log(options)
		if (options && options.type) {
			//
			this.type = options.type;
			this.setInterval();
		}
		if (options && options.name) {
			//
			this.name = options.name;
		}

		if(this.interval !== null) {
			this.initSlots();
		}
	}
	/**
	*
	*
	*/
	SlotData.prototype.setInterval = function () {
		//
		this.interval = this.range / this.types[this.type];
	}
	/**
	*
	*
	*/
	SlotData.prototype.initSlots = function () {
		//
		for (var i = 0; i < this.interval; i++) {
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
	SlotData.prototype.getPace = function () {
		//
		return this.range / this.interval;
	}
	/**
	*
	*
	*/
	SlotData.prototype.inflate = function (slotModel) {
		//
		this.type = slotModel.get("type");
		this.name = slotModel.get("name");
		
		this.setInterval();

		this.initSlots();

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