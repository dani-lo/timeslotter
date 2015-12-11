define([
  "backbone",
  "underscore"
], function(Backbone, _, SlotsDisplayTpl) {
  //
  "use strict";

  var FlashViewHelper = Backbone.View.extend({
    //
    el: ".flash-container",

    initialize: function() {
      //
      this.tpl = "<p class='flash'></p>";

      return this;
    },
    //
    render: function (iserror, msg) {
      // 
      if (!msg) {
        return this;
      }

      this.$el.append(this.tpl);

      if (iserror) {
        this.$el.find("p").addClass("error");
      } else {
        this.$el.find("p").removeClass("error");
      }

      this.$el.find("p").html(msg);

      return this
    },
    //
    show: function () {
      //
      this.$el.fadeIn();

      setTimeout(_.bind(function () {
        //
        this.$el.fadeOut(_.bind(function () {
          //
          this.$el.find("p").remove();
        }, this));
      }, this), 2000);
    }
  });
  //
  return FlashViewHelper;
});