define([
	"underscore",
	"moment"
], function (_, moment) {
	"use strict";
	//
	function SlotData () {
		//
		this.types = {
			"A": 2,
			"B": 4
		};

		this.interval = null;

		this.range = 24;

		this.slots = {};
	}

	SlotData.prototype.initialize = function (options) {
		//
		this.interval = this.types[options.type];
	}

	SlotData.prototype.bookSlot = function () {
		//
	}

	SlotData.prototype.removeSlot = function () {
		//
	}

	SlotData.prototype.slotAvailable = function () {
		//
	}

	SlotData.prototype.toObject = function () {
		//
	}
	
	return SlotData;
});