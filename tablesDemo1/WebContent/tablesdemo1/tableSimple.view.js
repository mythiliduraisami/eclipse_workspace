sap.ui.jsview("tablesdemo1.tableSimple", {

	/** Specifies the Controller belonging to this View. 
	* In the case that it is not implemented, or that "null" is returned, this View does not have a Controller.
	* @memberOf tablesdemo1.tableSimple
	*/ 
	getControllerName : function() {
		return "tablesdemo1.tableSimple";
	},

	/** Is initially called once after the Controller has been instantiated. It is the place where the UI is constructed. 
	* Since the Controller is given to this method, its event handlers can be attached right away. 
	* @memberOf tablesdemo1.tableSimple
	*/ 
	createContent : function(oController) {
		

		var oCol4 = new sap.ui.table.Column({
			label:new sap.m.Label({
				text:"Name"
			}),
			template:new sap.m.Text({
				text:"{Name}"
			})
			
		});
		var oCol5 = new sap.ui.table.Column({
			label:new sap.m.Label({
				text:"Place"
			}),
			template:new sap.m.Text({
				text:"{Place}"
			})
		});
		var oCol6 = new sap.ui.table.Column({
			label:new sap.m.Label({
				text:"Id"
			}),			
			template:new sap.m.Text({
				text:"{Id}"
			})
		});
		var oTable2 = new sap.ui.table.Table({
			title:"Simple Table - ui Table",
			 columns:[
				 oCol4,
				 oCol5,
				 oCol6
			 ]
		});
		
		oTable2.bindRows("/names");
		
		
		
		var oCol1 = new sap.m.Column({
			header:new sap.m.Label({
				text:"Name"
			})
		});
		var oCol2 = new sap.m.Column({
			header:new sap.m.Label({
				text:"Place"
			})
		});
		var oCol3 = new sap.m.Column({
			header:new sap.m.Label({
				text:"Id"
			})
		});
		
		var oTable1 = new sap.m.Table({
			headerText:"Simple Table - mTable",
			 columns:[
				 oCol1,
				 oCol2,
				 oCol3
			 ]
		});
		var oTemplate1 = new sap.m.ColumnListItem({
			cells:[
				new sap.m.Text({
					text:"{Name}"
				}),
				new sap.m.Text({
					text:"{Place}"
				}),
				new sap.m.Text({
					text:"{Id}"
				})
			]
		}); 
		oTable1.bindItems({
			path:"/names",
			template:oTemplate1
		});
		
 		var oPage1 = new sap.m.Page({
			title: "Simple Table Example",
			content: [
				oTable1,oTable2
			]
		}); 
 		return oPage1;
	}

});