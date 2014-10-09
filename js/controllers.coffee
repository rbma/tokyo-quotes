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
			
			#get array of all quotes
			quoteCollection = $scope.body.individualQuote


			#shuffle array and return shuffled version
			# $scope.shuffledQuotes = quoteService.shuffleQuotes(quoteCollection)

			#current quote
			$scope.current = quoteCollection[0]


			$scope.launchVid = (video, quote) ->
				$scope.playing = true

				$scope.player.loadVideoById(video)
				#play video
				$scope.player.playVideo()

				

				# $scope.updateInfo(quote)
				
				#only for debug. take out in prod.
				$scope.player.seekTo(28)


			$scope.closeInfo = ->
				$scope.showInfo = false

			$scope.updateInfo = (quote) ->
				$scope.current = quote


			# $scope.nextVideo = ->
			# 	order++


			# 	#make sure text is hidden before new video starts
			# 	$scope.playing = true
				
			# 	if order >= $scope.shuffledQuotes.length
			# 		order = 0
				
			# 	$scope.current = $scope.shuffledQuotes[order]
				
			# 	newVid = $scope.current.fields.youtubeId







])