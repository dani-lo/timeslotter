define([
  "backbone",
  "underscore"
], function(Backbone, _) {
  //
  "use strict";
  /**
  * THis helper takes a form with
  * a select and a text input only
  * and validates on submit. Uses promises
  * to reject on missing data or continue
  *
  */
  var FormHelperView = Backbone.View.extend({
    //
    el: ".timeslotter-form",
    //
    events: {
      "click .form-submit": "onSubmit"
    },
    /**
    *
    *
    */
    initialize: function(options) {
      //
      this.text = null;
      this.select = null;

      return this;
    },
     /**
    *
    *
    */
    render: function () {
      //      
      this.text = this.$el.find(".timeslotter-form_text");
      this.select = this.$el.find(".timeslotter-form_select");

      this.text.on("click, focus", _.bind(function () {
        this.cleanup("t");
      }, this));

      this.select.on("click, focus", _.bind(function () {
        this.cleanup("s");
      }, this));
    },

    cleanup: function (which) {
      //
      if (which === "t" || !which)
        this.text.removeClass("err");
      if (which === "s" || !which)
        this.select.removeClass("err");
    },
     /**
    *
    *
    */
    validate: function () {
      
      var isvalid = true;

      this.cleanup();

      if (this.text.val() === "") {
        //
        this.text.addClass("err");
        isvalid = false;
      }

      if (this.select[0].selectedIndex === 0) {
        //
        this.select.addClass("err");
        isvalid = false;
      }

      return isvalid;
    }
  });
  //
  return FormHelperView;
});