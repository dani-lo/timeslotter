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
            console.log(this)
            alert(this.select.val())
            if (this.validate()) {
                this.onSubmitCb.call(null, {
                    name: this.text.val(),
                    type: this.select.val()
                });
            } else {
                alert("please see errors and amend");
            }

        }
    });
//
    return TimeslotterFormUtil;
});
