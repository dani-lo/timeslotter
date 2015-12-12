define([
  "backbone",
  "underscore",
  "jquery",
  "views/helper/timeslotterform",
  "lib/slotdata",
  "lib/ts",
  "text!slot-create.html"
], function(Backbone, _, jQuery, TimeslotFormUtil, SlotDataUtil, TsHelper, SlotsCreateTpl) {
  //
  "use strict";

  var SlotsCreateView = Backbone.View.extend({
    //
    el: ".createslot",
    /**
    *
    *
    */
    initialize: function(options) {
      //
      this.tform = new TimeslotFormUtil();

      this.tform.init({
        onSubmit: _.bind(this.startCreate, this)
      }).render();

      this.slotData = null;

      this.owner = options.owner;

      this.flash = TsHelper.getFlash();

      return this;
    },
    /**
    *
    *
    */
    render: function () {
      // do nothing, the form is pre-eisting     
    },
    /**
    *
    *
    */
    startCreate: function (options) {
      //
      this.slotsData = new SlotDataUtil();

      this.slotsData.initialize(options);

      this.$el.append(_.template(SlotsCreateTpl, {
        name: this.slotsData.name,
        type: this.slotsData.type,
        pace: this.slotsData.getPace(),
        slots: this.slotsData.slots
      }));

      this.bindCreateSubview();

      this.tform.lock();

      this.flash.render("msg", "Now select the slots then save, or cancel").show();
    },
    /**
    *
    *
    */
    bindCreateSubview: function () {
      // bind the slots create UI
      // (should be refactored to own View)
      this.$el.find(".go-create").on("click", _.bind(function () {
        //
        this.goCreate();
      }, this));
      // bind the slots Ccancel UI
      // (should be refactored to own View)
      this.$el.find(".go-cancel").on("click", _.bind(function () {
        //
        this.goCancel();
      }, this));
      // bind the slots create UI
      // (should be refactored to own View)
      this.$el.find(".slotlist_box").on("click", _.bind(function (e) {
        //
        var slotBox = jQuery(e.currentTarget),
            boxId = parseInt(slotBox.attr("id").replace("slotbox-", ""), 10);

        slotBox.toggleClass("booked");

        if (slotBox.hasClass("booked")) {

          this.slotsData.bookSlot(boxId);
        } else {

          this.slotsData.freeSlot(boxId);
        }
      }, this));
    },
    /**
    *
    *
    */
    goCreate: function () {
      //
      this.owner.appendTimeslot(this.slotsData, true);

      // as required, per specifications ...
      console.log(this.slotsData.toObject());
      
      this.tform.unlock();

      this.reset();

      this.flash.render("success", "Your booking has been created").show();
    },
    /**
    *
    *
    */
    goCancel: function () {
      //
      this.slotsData = null;

      this.tform.unlock();

      this.reset();

      this.flash.render("success", "Your booking has been cancelled").show();
    },
    /**
    *
    *
    */
    reset: function () {
      //
      this.$el.find(".go-create").off("click");

      this.$el.find(".slotlist_box").off("click");
      
      this.$el.find(".slotlist").remove();
    }
  });
  //
  return SlotsCreateView;
});