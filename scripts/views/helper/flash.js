define([
  "backbone",
  "underscore"
], function(Backbone, _) {
  //
  "use strict";

  var FlashViewHelper = Backbone.View.extend({
    //
    el: ".flash-container",

    initialize: function() {
      //
      this.tpl = "<p class='flash'></p>";

      this.tOut = null;

      return this;
    },
    //
    render: function (type, msg) {
      // 
      if (!msg) {
        return this;
      }

      this.$el.append(this.tpl);

      this.$el.find("p").addClass(type);

      this.$el.find("p").html(msg);

      return this
    },
    //
    show: function () {
      //
      this.$el.fadeIn();

      clearTimeout(this.tOut);
      
      this.tOut = setTimeout(_.bind(function () {
        //
        this.$el.fadeOut(_.bind(function () {
          //
          this.$el.find("p").remove();

          this.tOut = null;
        }, this));
      }, this), 3500);
    }
  });
  //
  return FlashViewHelper;
});