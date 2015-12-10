define([
	'backbone',
	'views/pages/slots'
], function(Backbone, SlotsPage) {
  var App = Backbone.View.extend({
  	el: ".timeslotter",
    initialize: function() {
      console.log( 'Wahoo!' );
      var slotsPage = new SlotsPage({
      	el: ".slots-view"
      });
      slotsPage.initialize().render();
    }
  });

  return App;
});