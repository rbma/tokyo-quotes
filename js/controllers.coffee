'use strict'

quoteControllers = angular.module('quoteControllers', [])

quoteControllers.controller('IndexCtrl', [
	'$scope'
	'$http'
	'contentfulClient'
	($scope, $http, contentfulClient) ->

		$scope.body = ''
		
		contentfulClient.entries({'content_type': '3NIaEMnF5CcQOCUeUaGESy', 'include': 1}).then (data) ->
			$scope.data =  data[0]
			$scope.body = $scope.data.fields
			console.log $scope.body

])