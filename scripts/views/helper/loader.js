define([
  "backbone",
  "underscore"
], function(Backbone, _) {
  //
  "use strict";

  var LoaderViewHelper = Backbone.View.extend({
    //
    el: ".loader",
    //
    initialize: function() {
      //
      return this;
    },
    //
    render: function () {
      //  
    },
    //
    loaded: function () {
      //
      this.$el.addClass("loaded");
    },
    //
    unload: function () {
      //
      this.$el.addClass("unload");
    }
  });
  //
  return LoaderViewHelper;
});