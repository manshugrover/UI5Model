sap.ui.define([],
    function(){
        return{
            getMeName:function(inp){
                if(inp){
                    return inp.toUpperCase();
                }
            },
            getFormattedCurrency:function(num,numUnit){
                return ""; 
            }
        };
    })