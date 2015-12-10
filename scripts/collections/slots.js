define([
	"backbone",
	"models/slot"], 
function (Backbone, SlotModel) {

	"use strict";

	var SlotsCollection = Backbone.Collection.extend({

		model: SlotModel
	});

	return SlotsCollection;
});