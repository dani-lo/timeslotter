define(["backbone"], function (Backbone) {

	"use strict";

	var SlotModel = Backbone.Model.extend({

		defaults : {
			name : null,
			type : null,
			booked: null
		}
	});
	return SlotModel;
});