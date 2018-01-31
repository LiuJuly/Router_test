sap.ui.define([
       "sap/ui/core/mvc/Controller",
       "sap/ui/core/UIComponent",
       "sap/ui/core/routing/History"
    ], 
            
    function(Controller, UIComponent, History){
        "use strict";
        
        return Controller.extend("Router_test01.controller.Detail", {
            onInit: function(){
                var oRouter = UIComponent.getRouterFor(this);
                oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this); 
            },
            
            onNavPress: function() {
            	//获取历史路径
                var oHistory = History.getInstance();
                var sPreviousHash = oHistory.getPreviousHash();
                
                //如果有历史路径返回上页
                if (sPreviousHash != undefined){
                    window.history.go(-1);
                }else{
                	//没有历史路径跳转到master页面
                    var oRouter = UIComponent.getRouterFor(this);
                    oRouter.navTo("master",{}, true);
                }
            },
            
            _onObjectMatched: function (oEvent) {
            	//获取Master view传递的路径
                var sPath = decodeURIComponent(oEvent.getParameter("arguments").supplierPath);
                //在视图上绑定元素
                this.getView().bindElement({ path: sPath});
            }           
            
        });
    }
);