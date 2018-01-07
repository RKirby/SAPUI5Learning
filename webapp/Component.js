sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"clinny/tutorial/wt/controller/HelloDialog",
	"sap/ui/Device"
], function(UIComponent, JSONModel, HelloDialog, Device) {
	"use strict";
	return UIComponent.extend("clinny.tutorial.wt.Component", {
		metadata: {
			manifest: "json"
		},
		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);

			var oData = {
				recipient: {
					name: "Chuddel"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);

			// set device model
			var oDeviceModel = new JSONModel(Device);
			oDeviceModel.setDefaultBindingMode("OneWay");
			this.setModel(oDeviceModel, "device");

			//set Dialog
			this._helloDialog = new HelloDialog(this.getRootControl());

			this.getRouter().initialize();
		},
		openHelloDialog: function() {
			this._helloDialog.open();
		}
	});
});