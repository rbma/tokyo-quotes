'use strict'

quoteDirectives = angular.module('quoteDirectives', [])

quoteDirectives.directive('fullscreenVideo', [
	'$rootScope', 
	'quoteService', 
	($rootScope, quoteService) ->

		link = ($scope, element, attrs) ->

			attrs.$observe('vid', (value) ->
				if (value)
					$.okvideo({
						video: value
						hd: true
						loop: false
						volume: 15
						autoplay: false
						onFinished: ->
							quoteService.nextVideo()
					})
				)



		return{
			$scope:{
				vid: '@'
			}
			link: link
		}

])