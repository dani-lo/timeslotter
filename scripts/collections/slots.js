define([
	"backbone",
	"models/slot"], 
function (Backbone, SlotModel) {

	"use strict";
	//
	var SlotsCollection = Backbone.Collection.extend({
		//
		model: SlotModel,
		url: function () {
			return "/api/slots";
		}
	});
	//
	return SlotsCollection;
});