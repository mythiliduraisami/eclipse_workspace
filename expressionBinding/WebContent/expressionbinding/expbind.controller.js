sap.ui.controller("expressionbinding.expbind", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf expressionbinding.expbind
*/
	onInit : function () {
		var data = [{
		  name: 'A',
		  age: 11
		}, {
		  name: 'B',
		  age: 20
		}, {
		  name: 'C',
		  age: 17
		}];
		
		  var model = new sap.ui.model.json.JSONModel();
		  model.setData(data);
		  this.getView().setModel(model);
	},
	
	onAgeChange: function() {
	  this.getView().getModel().refresh(true);
	},
	
	filterPeopleByAge: function(people) {
	  return people.filter(person => parseInt(person.age) > 15).length
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf expressionbinding.expbind
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf expressionbinding.expbind
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf expressionbinding.expbind
*/
//	onExit: function() {
//
//	}

});