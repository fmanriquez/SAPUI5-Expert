sap.ui.define([
    "sap/ui/model/json/JSONModel",

],
    /**
     * provide app-view type models (as in the first "V" in MVVC)
     * 
     * @param {typeof sap.ui.model.json.JSONModel} JSONModel
     * @param {typeof sap.ui.Device} Device
     * 
     * @returns {Function} createDeviceModel() for providing runtime info for the device the UI5 app is running on
     */
    function (JSONModel) {
        "use strict";
        return {

            createRecipient: function () {
                var oData = {
                    recipient: {
                        name: "World"
                    }
                };
                return new JSONModel(oData);
            }
        }
    });