'use strict';

var app = angular.module('forms', []);
app.controller('main', function($scope, woundFormSchema, woundFormData){
	$scope.woundFormData = woundFormData;
    $scope.woundFormSchema = woundFormSchema;
});