sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel"
], function(UIComponent, JSONModel) {
	"use strict";
	return UIComponent.extend("clinny.tutorial.wt.Component", {
		metadata : {
			manifest: "json"
		},
		init: function() {
			// call the init function of the parent
			UIComponent.prototype.init.apply(this, arguments);
			
			var oData = {
				recipient : {
					name : "Chuddel"
				}
			};
			var oModel = new JSONModel(oData);
			this.setModel(oModel);
		}
	});
});