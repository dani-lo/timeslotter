define(["views/helper/form"],function(a){"use strict";var b=a.extend({onSubmit:function(a){a.preventDefault(),this.validate()?(this.onSubmitCb.call(null,this.fieldsVal()),this.reset()):this.flash.render("error","Please see errors and amend").show()}});return b});