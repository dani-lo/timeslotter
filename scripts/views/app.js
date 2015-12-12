define([
  "backbone",
  "underscore",
  "views/partials/timeslot/display",
  "views/partials/timeslot/create",
  "lib/ts",
  "lib/slotshub",
  "text!timeslots.html"
], function(Backbone, _, TimeSlotDisplayView, 
  TimeSlotCreateView, TsHelper, SlotsHubManager, TimeSlotsTpl) {
  //
  "use strict";

  var App = Backbone.View.extend({
    //
    el: ".timeslotter-timeslots",
    //
    initialize: function() {
      //
      this.hub = new SlotsHubManager();

      this.loader = TsHelper.getLoader();

      return this;
    },
    //
    render: function () {
      //      
      this.$el.append(TimeSlotsTpl);

      this.hub.fetchSlots().then(_.bind(function (slotItems) {
        //
        _.each(slotItems, _.bind(function (item) {

          this.appendTimeslot(item);
        }, this));
      }, this));

      var slotsCreateView = new TimeSlotCreateView({
        owner: this
      });
      //
      slotsCreateView.render();

      this.loader.loaded();

      setTimeout(_.bind(function () {
        this.loader.unload();
      }, this), 250);
    },
    //
    appendTimeslot: function (item, boolNew) {
      //
      var slotView = new TimeSlotDisplayView({
        slotsData: item
      });
      
      slotView.render(boolNew);
    }
  });
  //
  return App;
});