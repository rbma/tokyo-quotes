'use strict'

quoteControllers = angular.module('quoteControllers', [])

quoteControllers.controller('IndexCtrl', [
	'$scope'
	'$http'
	'contentfulClient'
	'quoteService'
	($scope, $http, contentfulClient, quoteService) ->

		$scope.body = ''
		$scope.quotes = []
		$scope.videoStopped = true

		
		contentfulClient.entries({'content_type': '3NIaEMnF5CcQOCUeUaGESy', 'include': 1}).then (data) ->
			

			$scope.data =  data[0]
			
			$scope.body = $scope.data.fields
			
			#total data
			console.log $scope.data
			
			#get array of all quotes
			quoteCollection = $scope.body.individualQuote


			#shuffle array and return shuffled version
			$scope.shuffledQuotes = quoteService.shuffleQuotes(quoteCollection)

			#start background
			#current quote
			$scope.current = $scope.shuffledQuotes[0]
			







])