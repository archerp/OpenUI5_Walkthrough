sap.ui.define([
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/demo/wt/controller/HelloDialog"
    ], 
    function (UIComponent, JSONModel, HelloDialog) {
        "use strict";
        return UIComponent.extend("sap.ui.demo.wt.Component", {

            metadata : {
                manifest: "json"
            },
            
            init : function () {
                // call the init function of the base class
                UIComponent.prototype.init.apply(this, arguments);

                // set data model on view
                var oData = {
                    recipient : {
                        name : "World"
                    }
                };
                var oModel = new JSONModel(oData);
                this.setModel(oModel);

                // create dialog 
                this.helloDialog = new HelloDialog();
            }
        });
    }
);