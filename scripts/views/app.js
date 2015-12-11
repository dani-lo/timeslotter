define([
  "backbone",
  "underscore",
  "views/partials/timeslot/display",
  "views/partials/timeslot/plot",
  "views/partials/timeslot/create",
  "lib/slotshub",
  "text!/templates/timeslots.html"
], function(Backbone, _, TimeSlotDisplayView, TimeSlotPlotView, 
  TimeSlotCreateView, SlotsHubManager, TimeSlotsTpl) {
  //
  "use strict";

  var App = Backbone.View.extend({
    //
    el: ".timeslotter",
    //
    initialize: function() {

      this.tpl = TimeSlotsTpl;

      this.hub = new SlotsHubManager();

      return this;
    },
    //
    render: function () {
      //      
      this.$el.append(this.tpl);

      this.hub.fetchSlots().then(_.bind(function (slotItems) {
        //
        _.each(slotItems, _.bind(function (item) {
          
          var slotView = new TimeSlotDisplayView({
            slotsData: item
          });
          
          this.$el.find(".view-slots").append(slotView.render());
        }, this));
      }, this));
    },
  });
  //
  return App;
});