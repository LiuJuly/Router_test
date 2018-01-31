sap.ui.define([
	"sap/ui/model/json/JSONModel",
	"sap/ui/Device"
], function(JSONModel, Device) {
	"use strict";

	return {

		createDeviceModel: function() {
			var oModel = new JSONModel(Device);
			oModel.setDefaultBindingMode("OneWay");
			return oModel;
		},
		createBasicDataModel: function(){
			var oModel = new JSONModel();
			oModel.setData({
				    "CountOfSuppliers" : "2",
				    "Suppliers" : [
				        {
				            "ID": "1",
				            "Name": "ABC汽车有限公司",
				            "Address": {
				                "Street": "东风大道10号",
				                "City": "武汉",
				                "ZipCode": "430056",
				                "Country": "中国"
				            }
				        },
				        {
				            "ID": "2",
				            "Name": "福建飞驰新能源汽车有限公司",
				            "Address": {
				                "Street": "福建莆田城厢区荔城北大道1999号",
				                "City": "莆田",
				                "ZipCode": "123456",
				                "Country": "中国"
				            }
				        }
				    ]
			});
			return oModel;
		}

	};
});