sap.ui.define([
		'sap/m/MessageBox',
		'sap/ui/core/mvc/Controller',
		'sap/ui/model/json/JSONModel'
	], function(MessageBox, Controller, JSONModel) {
	"use strict";

	var appController = Controller.extend("com.nimsoc.demo.App", {

		onInit : function() {
			var oModel = new JSONModel(jQuery.sap.getModulePath("com.nimsoc.demodata", "/countries.json"));
			this.getView().setModel(oModel);
		},

		handleButtonPress : function(oEvent) {
			alert("Country code is " + oEvent.getSource().data("cCode"));
		}
	});

	return appController;

});
