//app.js
(function () {
	"use strict";

	var x = 0;

	var module = angular.module("pizzaApp", ["ngRoute"]);
	module.config(function ($routeProvider) {


		$routeProvider.when('/', {
			templateUrl: 'templates/order.tmpl.html',
			controller: 'orderController',
			controllerAs: "order"
		});

		$routeProvider.when('/status', {
			templateUrl: 'templates/status.tmpl.html',
			controller: 'statusController',
			controllerAs: "status"
		});

		$routeProvider.otherwise({redirectTo: '/'});

	});


	module.controller("statusController", function () {
		var status = this;
		status.steps = [{
			num: 1,
			name: "Make Pie"
		},{
			num: 2,
			name: "Bake Pie"
		},{
			num: 3,
			name: "Box Pie"
		},{
			num: 4,
			name: "Queue Pie"
		},{
			num: 5,
			name: "Deliver Pie"
		},{
			num: 6,
			name: "Collect Money"
		}];
		status.currentStep = 2;

	});

	module.directive('wmPizzaBar', function () {

		return {
			link: function (scope, element, attrs) {
			element.text("this is the statusBar");
			},
			restrict: "E"
		};
	});

	module.controller("orderController", function() {
		var order = this;
		order.orderCount = 0;

		order.addOrder = function() {
			order.orderCount++;
		};
	});

})();