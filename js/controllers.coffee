'use strict'

quoteControllers = angular.module('quoteControllers', [])

quoteControllers.controller('IndexCtrl', [
	'$scope'
	'$http'
	'$sce'
	'contentfulClient'
	'quoteService'
	($scope, $http, $sce, contentfulClient, quoteService) ->

		converter = new Showdown.converter()

		$scope.body = {}
		$scope.videoStopped = false
		$scope.begin = true
		
		$scope.player = {}


		order = 0

		#video is initially visible
		$scope.playing = false

		#show we show info?
		$scope.showInfo = false
		
		

		#yt parameters
		$scope.playerVars = {
			controls: 0
			autoplay: 0
			modestbranding: 1
			showinfo: 0
			hd: 1
		}

		
		$scope.$on('youtube.player.ready', ($event, player) ->
			$scope.player = player
		)

		
		$scope.$on('youtube.player.ended', ($event, player) ->
			$scope.playing = false
			$scope.showInfo = true
			)

		
		#watch for changes on playing so we can trigger ng-hide/ng-show
		$scope.$watch('playing', (value) ->
			console.log value
			)


		
		contentfulClient.entries({'content_type': '3NIaEMnF5CcQOCUeUaGESy', 'include': 1}).then (data) ->
			
			$scope.data =  data[0]
			
			$scope.body = $scope.data.fields
			
			#total data
			console.log $scope.body

			#loop through each quote and render markdown
			for quote in $scope.body.individualQuote
				quote.fields.artistText = converter.makeHtml(quote.fields.artistText)
			
			#get array of all quotes
			quoteCollection = $scope.body.individualQuote


			#current quote
			$scope.current = quoteCollection[0]


			$scope.launchVid = (quote) ->
				$scope.playing = true

				video = quote.fields.youtubeId



				$scope.player.loadVideoById(video)
				
				#play video
				$scope.player.playVideo()

				$scope.titleName = quote.fields.titleName
				$scope.artistText = quote.fields.artistText

				
				#only for debug. take out in prod.
				$scope.player.seekTo(28)


			$scope.closeInfo = ->
				$scope.showInfo = false

			$scope.updateInfo = (quote) ->
				$scope.current = quote


			$scope.trust = (text) ->
				return $sce.trustAsHtml(text)





])