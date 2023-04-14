//ts-nocheck
sap.ui.define([
    "sap/ui/core/UIComponent",
    "fmc/documento/model/models",
    "sap/ui/model/resource/ResourceModel",
],
    /**
     *  * @param {typeof sap.ui/model/resource/ResourceModel} ResourceModel
     */


    function (UIComponent, models, ResourceModel) {
        "use strict";

        return UIComponent.extend("fmc.documento.Component", {
            metadata: { 
                manifest: "json"
            },

            init: function () {
                // call the base component's init function
                UIComponent.prototype.init.apply(this, arguments);

                // enable routing
                this.getRouter().initialize();

                //Set data model on the view
                this.setModel(models.createRecipient());

                //Set i18n model on the view.
                var i18nModel = new ResourceModel({ bundleName: "fmc.documento.i18n.i18n" });
                this.setModel(i18nModel, "i18n");


            }
        });
    }
);