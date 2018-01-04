sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"clinny/tutorial/wt/model/formatter"
], function(Controller, JSONModel, formatter) {
	"use strict";

	return Controller.extend("clinny.tutorial.wt.controller.InvoiceList", {
		formatter: formatter,
		onInit: function() {
			var oViewModel = new JSONModel({
				currency: "EUR"
			});
			this.getView().setModel(oViewModel, "view");
		}

	});
});