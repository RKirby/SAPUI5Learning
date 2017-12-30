sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function(Controller) {
	"use strict";
	return Controller.extend("clinny.tutorial.wt.controller.Chuddel", {
		onShowHello : function () {
			alert("Hello Chuddel!");
		}
	});
});