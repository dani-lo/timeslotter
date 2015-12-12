define([
    "views/helper/form"
], function (FormViewHelper) {

    "use strict";

    var CreateSlotsFormViewHelper = FormViewHelper.extend({
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
                this.onSubmitCb.call(null, this.fieldsVal());
                //
                this.reset();
            } else {
                this.flash.render("error", "Please see errors and amend").show();
            }

        }
    });
    //
    return CreateSlotsFormViewHelper;
});