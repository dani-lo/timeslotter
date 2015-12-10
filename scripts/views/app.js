define([
  "backbone",
  "underscore",
  "views/partials/timeslot/display",
  "views/partials/timeslot/plot",
  "views/partials/timeslot/create",
  "util/slotshub",
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

      this.subviews = {
        display: new TimeSlotDisplayView(),
        create:  new TimeSlotCreateView(),
        plot:  new TimeSlotPlotView()
      };

      this.hub = new SlotsHubManager();

      this.hub.initialize();

      return this;
    },
    //
    render: function () {
      //      
      this.$el.append(this.tpl);

      this.hub.start().then(_.bind(function () {

      }, this));
    },
  });
  //
  return App;
});