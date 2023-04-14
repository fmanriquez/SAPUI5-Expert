sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    
],
    /**
     * @param {typeof sap.ui.core.mvc.Controller} Controller
     * @param {typeof sap.m.MessageToast} MessageToast
    
    */

    function (Controller, MessageToast) {
        "use strict";

        return Controller.extend("fmc.documento.controller.App", {

            onInit: function () {

            },

            onShowHello: function () {
                //Read Text from i18n model
                var oBundle    = this.getView().getModel("i18n").getResourceBundle();
                //Read Property from data model
                var sRecipient = this.getView().getModel().getProperty("/recipient/name");
                var sMsg       = oBundle.getText("helloMsg", [sRecipient]);
                MessageToast.show(sMsg);
            }
        });
    });
