// @ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
"sap/m/MessageToast"
],
/**
 * @param {typeof sap.ui.mvc.Controller} Controller
 * @param {typeof sap.m.MessageToast} MessageToast
 */
function (Controller, MessageToast) {
    "use strcit";

    return Controller.extend("logaligroup.SAPUI5.controller.HelloPanel", {

        onInit: function () {

        },

        onShowHello: function () {
            //read text from i18n model
            var oBundle = this.getView().getModel("i18n").getResoBuundle();
            //read property from data model
            var sRecipient = this.getView().getModel().getProperty("/recipient/name");
            var sMsg = oBundle.getText("helloMsg", [sRecipient]);
            MessageToast.show(sMsg);
        }
    })
});
