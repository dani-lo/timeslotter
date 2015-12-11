define([
  "backbone",
  "underscore",
  "text!/templates/slot-display.html"
], function(Backbone, _, SlotsDisplayTpl) {
  //
  "use strict";

  var SlotsDisplayView = Backbone.View.extend({
    //
    actions: {
      //
    },
    //
    initialize: function(options) {
      //
      this.slotsData = options.slotsData;
      return this;
    },
    //
    render: function () {
      //  
      console.log(this.slotsData)
      return _.template(SlotsDisplayTpl, {
        name: this.slotsData.name,
        type: this.slotsData.type,
        "pace": this.slotsData.getPace(),
        slots: this.slotsData.slots
      });
    },
  });
  //
  return SlotsDisplayView;
});