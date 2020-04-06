sap.ui.controller("resposivetableexample.tableView", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf resposivetableexample.tableView
*/
	onInit : function() {
		
		var oData1 = {
				ProductCollection: [
					{
						"ProductId": "1239102",
						"Name": "Power Projector 4713",
						"Category": "Projector",
						"SupplierName": "Titanium",
						"Description": "A very powerful projector",
						"WeightMeasure": 1467,
						"WeightUnit": "g",
						"Price": 856.49,
						"CurrencyCode": "EUR",
						"Status": "Available",
						"Quantity": 3,
						"UoM": "PC",
						"Width": 51,
						"Depth": 42,
						"Height": 18,
						"DimUnit": "cm"
					},
					{
						"ProductId": "22134T",
						"Name": "Webcam",
						"Category": "Accessory",
						"SupplierName": "Technocom",
						"Description": "Web camera, color, High-Speed USB",
						"WeightMeasure": 700,
						"WeightUnit": "g",
						"Price": 59,
						"CurrencyCode": "EUR",
						"Status": "Available",
						"Quantity": 22,
						"UoM": "PC",
						"Width": 18,
						"Depth": 19,
						"Height": 21,
						"DimUnit": "cm"
						},
						{
						"ProductId": "P1239823",
						"Name": "Monitor Locking Cable",
						"Category": "Accessory",
						"SupplierName": "Technocom",
						"Description": "Lock for Monitor",
						"WeightMeasure": 40,
						"WeightUnit": "g",
						"Price": 13.49,
						"CurrencyCode": "EUR",
						"Status": "Available",
						"Quantity": 30,
						"UoM": "PC",
						"Width": 11,
						"Depth": 11,
						"Height": 3,
						"DimUnit": "cm"
					},
					{
						"ProductId": "214-121-828",
						"Name": "Laptop Case",
						"Category": "Accessory",
						"SupplierName": "Red Point Stores",
						"Description": "Laptop Case with room for pencils and other items",
						"WeightMeasure": 1289,
						"WeightUnit": "g",
						"Price": 78.99,
						"CurrencyCode": "EUR",
						"Status": "Discontinued",
						"Quantity": 15,
						"UoM": "PC",
						"Width": 53,
						"Depth": 34,
						"Height": 7,
						"DimUnit": "cm"
					},
					{
						"ProductId": "XKP-312548",
						"Name": "USB Stick 16 GByte",
						"Category": "Accessory",
						"SupplierName": "Red Point Stores",
						"Description": "USB 2.0 HighSpeed 16GB",
						"WeightMeasure": 11,
						"WeightUnit": "g",
						"Price": 17.19,
						"CurrencyCode": "EUR",
						"Status": "Out of Stock",
						"Quantity": 45,
						"UoM": "PC",
						"Width": 6,
						"Depth": 2,
						"Height": 0.5,
						"DimUnit": "cm"
					},
					{
						"ProductId": "KTZ-12012.V2",
						"Name": "Deskjet Super Highspeed",
						"Category": "Printer",
						"SupplierName": "Red Point Stores",
						"Description": "1200 dpi x 1200 dpi – up to 25 ppm (mono) / up to 24 ppm (colour) – capacity: 100 sheets – Hi-Speed USB2.0, Ethernet",
						"WeightMeasure": 100,
						"WeightUnit": "g",
						"Price": 117.19,
						"CurrencyCode": "EUR",
						"Status": "Available",
						"Quantity": 10,
						"UoM": "PC",
						"Width": 87,
						"Depth": 45,
						"Height": 39,
						"DimUnit": "cm"
					}
					]
		};
		var oModel = new sap.ui.model.json.JSONModel();
		oModel.setData(oData1);
		
		
		this.getView().setModel(oModel);
		},
		
		onAddRow : function() {
			var oTab = this.getView().byId("tableId");
			oTab.getModel().getData().ProductCollection.push({});
			oTab.getModel().refresh(true);
		},
		
		onDeleteRow : function() {
			var oTab = this.getView().byId("tableId");
			oTab.getModel().getData().ProductCollection.pop();
			oTab.getModel().refresh(true);
		}

		

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf resposivetableexample.tableView
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf resposivetableexample.tableView
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf resposivetableexample.tableView
*/
//	onExit: function() {
//
//	}

});