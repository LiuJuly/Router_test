sap.ui.define([
        "sap/ui/core/mvc/Controller",
        "sap/ui/core/UIComponent"
    ],      
        
    function(Controller, UIComponent){
        "use strict";
        
         return Controller.extend("Router_test01.controller.Master", {

             onListPress: function(oEvent){
             	//获取当前的 router
                 var oRouter = UIComponent.getRouterFor(this);
                 //获取事件产生元素
                 var oItem = oEvent.getSource();
                 //获取该元素的路径
                 var sPath = oItem.getBindingContext().getPath();
                 //路由路径到detail并传入元素路径
                 oRouter.navTo("detail", {
                     supplierPath: encodeURIComponent(sPath)
                });
             }
         });    
    }
);