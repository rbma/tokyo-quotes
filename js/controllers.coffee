'use strict'

quoteControllers = angular.module('quoteControllers', [])

quoteControllers.controller('IndexCtrl', [
	'$scope'
	'$window'
	'$http'
	'$sce'
	'contentfulClient'
	($scope, $window, $http, $sce, contentfulClient) ->

		converter = new Showdown.converter()

		$scope.body = {}
		$scope.videoStopped = false
		$scope.begin = true
		
		$scope.player = {}
		$scope.background = {}

		$scope.reload = ->
			window.location.reload()

		#video is initially visible
		$scope.playing = false

		#show we show info?
		$scope.showInfo = false
		
		showVideo = ->
			$(".video-wrapper").removeClass "hidden"

		hideVideo = ->
			$(".video-wrapper").addClass "hidden"

		#yt parameters
		$scope.playerVars = {
			controls: 0
			autoplay: 0
			modestbranding: 1
			showinfo: 0
			hd: 1
			enablejsapi: 1
			origin: '*'
		}

		
		$scope.$on('youtube.player.ready', ($event, player) ->
			$scope.player = player
		)

		
		$scope.$on('youtube.player.ended', ($event, player) ->
			$scope.playing = false
			$scope.showInfo = true
			hideVideo()
			)

		
		#watch for changes on playing so we can trigger ng-hide/ng-show
		$scope.$watch('playing', (value) ->
			console.log value
			)

		$scope.$watch('player', (value) ->
			)

		


		
		contentfulClient.entries({'content_type': '3NIaEMnF5CcQOCUeUaGESy', 'include': 1}).then (data) ->
			
			$scope.data =  data[0]
			
			$scope.body = $scope.data.fields
			

			$scope.background = $scope.body.bodyImage.fields.file.url

			$scope.$watch('background', (value) ->
			)


			#loop through each quote and render markdown
			for quote in $scope.body.individualQuote
				quote.fields.artistText = converter.makeHtml(quote.fields.artistText)
			
			#get array of all quotes
			quoteCollection = $scope.body.individualQuote


			#current quote
			$scope.current = quoteCollection[0]


			$scope.launchVid = (quote) ->
				$scope.playing = true

				showVideo()

				video = quote.fields.youtubeId


				
				$scope.player.loadVideoById(video)
				
				#play video
				# $scope.player.playVideo()

				$scope.titleName = quote.fields.titleName
				$scope.artistText = quote.fields.artistText

				
				


			$scope.closeInfo = ->
				$scope.showInfo = false

			$scope.updateInfo = (quote) ->
				$scope.current = quote


			$scope.trust = (text) ->
				return $sce.trustAsHtml(text)





])