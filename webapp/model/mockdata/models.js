sap.ui.define([
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/xml/XMLModel",
    "sap/ui/model/resource/ResourceModel"],
    function (JSONModel, XMLModel, ResourceModel) {
        return {
            createMyModel: function (sFilename) {
                var oModel = new JSONModel();
                oModel.loadData(sFilename);
                return oModel;
            },
            // createMyXMLModel: function (spath) {
            //     var OModelXml = new XMLModel();
            //     OModelXml.loadData(spath);
            //     return OModelXml;
            // }
            createResourceModel: function (){
                var oResource= new ResourceModel({
                bundleUrl:"i18n/i18n.properties"
                });
                return oResource;
            }
        };

    });