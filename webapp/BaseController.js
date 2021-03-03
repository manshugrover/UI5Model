sap.ui.define(
    ["sap/ui/core/mvc/Controller"],
    function(Controller){
        return Controller.extend("oft.BaseController",{
            _oCore:sap.ui.getCore(),
            getCore:function(){
                return this._oCore;
            },
            getModel:function(){
                return this._oCore.getModel();
            }

        });
    });
    
