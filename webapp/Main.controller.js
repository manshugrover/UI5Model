sap.ui.define([
    "oft/BaseController",
    "oft/model/mockdata/models",
    "oft/utils/lifesaver"
    
], function (Controller, oSpidy, lifesaver) {
    "use strict";

    return Controller.extend("oft.Main", {
        formatter:lifesaver,
        // // oCore: sap.ui.getCore(),
        // getCore:function(){
        //     return sap.ui.getCore();
        // },
        // getModel:function(){
        //     return sap.ui.getCore().getModel();
        // },

        bEnabled: true,

        onInit: function () {
            var oModel = oSpidy.createMyModel("./model/mockdata/spiderman.json");
            var oModelSuper = oSpidy.createMyModel("./model/mockdata/superman.json");
            // var OModelXml= oSpidy.createMyXMLModel("model/mockdata/SampleData.xml");
            var oResource= oSpidy.createResourceModel();
            this.getCore().setModel(oResource,"i18n");


            this.getCore().setModel(oModel);
            this.getCore().setModel(oModelSuper, "super");
        },
        onRowSelect:function(oAnubhav){
            // find the address(rowcontext)of selected record event object.
            // bind the simpleform control with this address
            // move the data to I/P field binding
            var elementAddress= oAnubhav.getParameter("rowContext");
            var oSimpleForm= this.getView().byId("idSimple");
            oSimpleForm.bindElement(elementAddress.sPath);

        },
        onMagic: function () {
            var oSal = this.getView().byId("idSal");
            oSal.bindValue("/empStr/salary");
            var oCurr = this.getView.byId("idCurr");
            oCurr.bindProperty("value", "/empStr/currency");
        },
        onFlip: function(){
            var oModel= this.getModel();
            var oModelSuper= this.getModel("super");

            this.getCore().setModel(oModel, "super");
            this.getCore().setModel(oModelSuper);
          
        },
        onInsert:function(){
           var oModel= this.getCore().getModel();
           oModel.getProperty("/empStr");
           var itab= oModel.getProperty("/empTab");
           itab.push(oModel.getProperty("/empStr"));
           oModel.setProperty("/empTab",itab);


        },
        onDivansh:function(){
            var oModel= this.getCore().getModel();
            // oModel.setProperty("/empStr/mario", false);
            if (this.bEnabled === true){
                oModel.setProperty("/empStr/mario",false);
                this.bEnabled=false;

            } else if(this.bEnabled === false)
            {
                oModel.setProperty("/empStr/mario",true);
                this.bEnabled = true;

            }

        }


    });
});
