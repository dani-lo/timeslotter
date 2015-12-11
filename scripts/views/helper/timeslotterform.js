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
            if (this.validate()) {
                this.onSubmitCb.call(null, {
                    name: this.text.value(),
                    type: this.select[this.select.seelctedIndex].value()
                });
            } else {
                alert("please see errors and amend");
            }

        }
    });
//
    return TimeslotterFormUtil;
});