define([
  "backbone",
  "underscore",
  "jquery",
  "views/helper/forms/createslots",
  "lib/slotdata",
  "lib/ts",
  "text!slot-create.html"
], function(Backbone, _, jQuery, CreateSlotsFormViewHelper, SlotDataUtil, 
  TsHelper, SlotsCreateTpl) {
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
      this.formCreateView = new CreateSlotsFormViewHelper({
        onSubmit: _.bind(this.startCreate, this)
      });

      this.formCreateView.render();

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

      this.formCreateView.lock();

      this.flash.render("msg", "Now select the slots then save, or cancel").show();
    },
    /**
    *
    *
    */
    bindCreateSubview: function () {
      //
      this.$(".go-create").on("click", _.bind(function () {
        //
        this.goCreate();
      }, this));
      //
      this.$(".go-cancel").on("click", _.bind(function () {
        //
        this.goCancel();
      }, this));
      //
      this.$(".slotlist_box").on("click", _.bind(function (e) {
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
      
      this.formCreateView.unlock();

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

      this.formCreateView.unlock();

      this.reset();

      this.flash.render("success", "Your booking has been cancelled").show();
    },
    /**
    *
    *
    */
    reset: function () {
      //
      this.$(".go-create").off("click");

      this.$(".slotlist_box").off("click");
      
      this.$(".slotlist").remove();
    }
  });
  //
  return SlotsCreateView;
});