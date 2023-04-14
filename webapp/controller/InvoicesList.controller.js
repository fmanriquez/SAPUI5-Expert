//@ts-nocheck
sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    '../model/InvoicesFormatter'
],
/**
* @param {typeof sap.ui.core.mvc.Controller} Controller
* @param {typeof sap.ui.model.json.JSONModel} JSONModel
*/
function (Controller, JSONModel, InvoicesFormatter) {

    return Controller.extend("logaligroup.SAPUI5.controller.InvoicesList", {

        formatter: InvoicesFormatter,

            onIni: function() {

                var oViewModel = new JSONModel({
                    usd: "USD",
                    eur: "EUR"
                });
                this.getView().setModel(oViewModel, "currency");
            }

        });
    });