define([
  "backbone",
  "underscore",
  "lib/ts"
], function(Backbone, _, TsHelper) {
  //
  "use strict";
  /**
  * THis helper takes a form with
  * a select and a text input only
  * and provides logic for validation (very basic ..).
  * The submit functionality (onSubmit) needs to be
  * provided by a subclass
  *
  */
  var FormViewHelper = Backbone.View.extend({
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

      this.flash = TsHelper.getFlash();

      this.onSubmitCb = options.onSubmit;
      
      return this;
    },
     /**
    *
    *
    */
    render: function () {
      //      
      this.text = this.$(".timeslotter-form_text");
      this.select = this.$(".timeslotter-form_select");

      this.text.on("click, focus", _.bind(function () {
        this.cleanup("t");
      }, this));

      this.select.on("click, focus", _.bind(function () {
        this.cleanup("s");
      }, this));
    },
    /**
    *
    *
    */
    cleanup: function (which) {
      //
      if (which === "t" || !which) {
        this.text.removeClass("err");
      }
        
      if (which === "s" || !which) {
        this.select.removeClass("err");
        
      }
    },
    /**
    *
    *
    */
    reset: function () {
      //
      this.text.val("");
      this.select[0].selectedIndex = 0;

      this.cleanup();
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
    },
    /**
    *
    *
    */
    fieldsVal: function () {
      //
      return {
          name: this.text.val(),
          type: this.select.val()
      };
    },
    /**
    *
    *
    */
    lock: function () {
      //
      this.$el.addClass("form-locked");
    },
    /**
    *
    *
    */
    unlock: function () {
      //
      this.$el.removeClass("form-locked");
    }
  });
  //
  return FormViewHelper;
});