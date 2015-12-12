define([
  "backbone",
  "underscore",
  "text!slot-display.html"
], function(Backbone, _, SlotsDisplayTpl) {
  //
  "use strict";

  var SlotsDisplayView = Backbone.View.extend({
    //
    el: ".view-slots",
    //
    initialize: function(options) {
      //
      this.slotsData = options.slotsData;
      return this;
    },
    //
    render: function (boolNew) {
      //  
      var slotHtml = _.template(SlotsDisplayTpl, {
        name: this.slotsData.name,
        type: this.slotsData.type,
        pace: this.slotsData.getPace(),
        slots: this.slotsData.slots
      });
      //
      if (boolNew) {
        //
        this.$el.prepend(slotHtml);
      } else {
        //
        this.$el.append(slotHtml);
      }
    },
  });
  //
  return SlotsDisplayView;
});