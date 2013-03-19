'use strict';

var app = angular.module('forms', []);

app.controller ('FormCtrl',  function FormCtrl ($scope, $http, $compile) {
	var schemaPath = 'json/woundFormSchema.json',
		dataPath = 'json/woundFormData.json';

	$http.get(schemaPath).success(function(data) {
	    $scope.formSchema = data;
	    checkDataAvailability();
	});  

	$http.get(dataPath).success(function(data) {
	    $scope.formData = data;    
	    checkDataAvailability();
	});

	/**
	 * Checks if schema and data has been loaded successfully and then
	 * triggers the compile process by hand because 
	 * angular does NOT executes directives after the initial loding of the DOM
	 * @return {[type]}
	 */
	function checkDataAvailability () {
		if($scope.formData && $scope.formSchema ){
			var formElement = $('#yform');
			formElement.attr('yform','true');
			$compile(formElement)($scope);
		}

		return true;
	}
});