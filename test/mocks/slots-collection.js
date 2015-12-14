define(["backbone", "mocks/slots-data"], function (Backbone, d) {

	var mockSLotsCollection = Backbone.Collection.extend({
		url: "foo",
		fetch : function (options) {
			//
			this.reset(d, {silent: true});

			return options.success.call(null, d);
		}
	});
	return mockSLotsCollection;
});