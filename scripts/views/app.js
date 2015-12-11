define([
  "backbone",
  "underscore",
  "views/partials/timeslot/display",
  "views/partials/timeslot/create",
  "views/helper/loader",
  "lib/slotshub",
  "text!timeslots.html"
], function(Backbone, _, TimeSlotDisplayView, 
  TimeSlotCreateView, LoaderViewHelper, SlotsHubManager, TimeSlotsTpl) {
  //
  "use strict";

  var App = Backbone.View.extend({
    //
    el: ".timeslotter-timeslots",
    //
    initialize: function() {

      this.tpl = TimeSlotsTpl;

      this.hub = new SlotsHubManager();

      this.loader = new LoaderViewHelper();

      return this;
    },
    //
    render: function () {
      //      
      this.$el.append(this.tpl);

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
      
      if (boolNew) {
        this.$el.find(".view-slots").prepend(slotView.render());
      } else {
        this.$el.find(".view-slots").append(slotView.render());
      }
      
    }
  });
  //
  return App;
});