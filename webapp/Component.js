sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/model/json/JSONModel",
	"sap/ui/model/resource/ResourceModel"
], function(UIComponent, JSONModel, ResourceModel) {
	"use strict";
	return UIComponent.extend("clinny.tutorial.wt.Component", {
		metadata : {
			rootView: "clinny.tutorial.wt.view.App"
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
			
			var i18nModel = new ResourceModel({
				bundleName: "clinny.tutorial.wt.i18n.i18n"
			});
			this.setModel(i18nModel, "i18n");
		}
	});
});