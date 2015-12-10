define(["backbone"], function (Backbone) {

	"use strict";

	var SlotModel = Backbone.Model.extend({

		defaults : {
			name : null,
			type : null,
			booked: null
		},

		url : function () {
			return "/data/slots.json"
		}
	});
	return SlotModel;
});