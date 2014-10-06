'use strict'

app = angular.module('quotes', [
	'ngRoute'
	'ngSanitize'
	'ng-contentful'
	'quoteControllers'
	'quoteDirectives'
	'quoteServices'
	'duScroll'
	'youtube-embed'
])

app.config(['$routeProvider', '$locationProvider', 'contentfulClientProvider', ($routeProvider, $locationProvider, contentfulClientProvider) ->

	$routeProvider.when('/', {
		templateUrl: 'partials/index.html'
		controller: 'IndexCtrl'
		})
	.otherwise({
		redirectTo: '/'
		})


	contentfulClientProvider.setSpaceId('4xlwm16911zp')
	contentfulClientProvider.setAccessToken('6fe66430d43042a7c28777422e4ae6f8edf5f58bf05d46a072e92a83bf432dab')
])