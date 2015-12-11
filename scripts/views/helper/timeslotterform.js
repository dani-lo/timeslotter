define([
    "views/helper/form",
    "jquery"
], function (FormUtil, jQuery) {

    "use strict";

    var TimeslotterFormUtil = FormUtil.extend({
        /**
        *
        *
        */
        init : function (options) {
            //
            FormUtil.__super__.initialize.apply(this, arguments);

            this.onSubmitCb = options.onSubmit;

            return this;
        },
        /**
        *
        *
        */
        onSubmit: function (e) {
            //
            e.preventDefault();
            //
            if (this.validate()) {
                //
                this.onSubmitCb.call(null, {
                    name: this.text.val(),
                    type: this.select.val()
                });
                //
                this.reset();
            } else {
                this.flash.render(true, "please see errors and amend").show();
            }

        }
    });
//
    return TimeslotterFormUtil;
});
