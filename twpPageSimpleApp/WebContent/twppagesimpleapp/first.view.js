sap.ui.jsview("twppagesimpleapp.first", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf twppagesimpleapp.first
	*/ 
	getControllerName : function() {
		return "twppagesimpleapp.first";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf twppagesimpleapp.first
	*/ 
	createContent : function(oController) {
		var oSimpleInput = new sap.m.Input("idInput",{
			placeholder: "Enter your Name"
		});
		
		var oSimpleButton = new sap.m.Button("idButton",{
			text: "Submit",
			press:[oController.goToSecondPage, oController]
		});
		
 		var oPage = new sap.m.Page({
			title: "Two Page Simple Application",
			content: [
						oSimpleInput, oSimpleButton
			]
		});
 		return oPage;
	}

});