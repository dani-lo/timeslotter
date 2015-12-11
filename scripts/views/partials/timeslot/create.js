define([
  "backbone",
  "underscore",
  "jquery",
  "views/helper/timeslotterform",
  "lib/slotdata",
  "text!/templates/slot-create.html"
], function(Backbone, _, jQuery, TimeslotFormUtil, SlotDataUtil, SlotsCreateTpl) {
  //
  "use strict";

  var SlotsCreateView = Backbone.View.extend({
    //
    el: ".createslot",
    //
    initialize: function(options) {
      //
      this.tform = new TimeslotFormUtil();

      this.tform.init({
        onSubmit: this.startCreate
      }).render();

      this.slotData = null;

      return this;
    },
    //
    render: function () {
      //      
    },
    startCreate: function (options) {
      //
      this.slotData = new SlotDataUtil();

      this.slotData.initialize(options);

      this.$el.append(_.template(SlotsCreateTpl, {
        name: this.slotsData.name,
        type: this.slotsData.type,
        pace: this.slotsData.getPace(),
        slots: this.slotsData.slots
      }));

      this.$el.find(".go-create").on("click", function () {

      });

      this.$el.find(".slotlist_box").on("click", function (e) {
        var slotBox = jQuery(e.currentTarget),
            boxId = parseInt(slotBox.id.replace("slotbox-", ""), 10);

        slotBox.toggleClass("booked");

        if (slotBox.hasClass("booked")) {
          this.slotData.bookSlot(boxId);
        } else {
          this.slotData.freeSlot(boxId);
        }
      });
    },

    goCreate: function (slot) {
      //
      this.reset();
    },

    reset: function () {
      //
      this.$el.find(".slotlist").remove();
    }
  });
  //
  return SlotsCreateView;
});