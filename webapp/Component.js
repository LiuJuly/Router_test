sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
	"Router_test01/model/models"
], function(UIComponent, Device, models) {
	"use strict";

	return UIComponent.extend("Router_test01.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function() {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// 在视图上设置 model
			this.setModel(models.createDeviceModel(), "device");
			this.setModel(models.createBasicDataModel());
			
			this.getRouter().initialize();
		}
	});
});