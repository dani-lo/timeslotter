define([
    "views/helper/flash",
    "views/helper/loader"], 
function (FlashViewHelper, LoaderViewHelper) {

    "use strict";

    var instance = null;
    /** Timeslot Helper
    * Singleton utility class to share some
    * common functionality (i.e helpers) throughout the app
    */
    function TsHelper() {
        //
        if (instance !== null) {
            throw new Error("Cannot instantiate more than one ATP object");
        }
        //
        this.initialize();
    }
    //
    TsHelper.prototype = {
        /**
        *
        *
        */
        initialize: function () {
            this.flash = new FlashViewHelper();
            this.loader = new LoaderViewHelper();
        },
        /**
        *
        *
        */
        getFlash: function () {
            return this.flash;
        },
        /**
        *
        *
        */
        getLoader: function () {
            return this.loader;
        }
    };
    //
    TsHelper.getInstance = function () {

        if (instance === null) {
            instance = new TsHelper();
        }
        //
        return instance;
    };
    //
    return TsHelper.getInstance();
});