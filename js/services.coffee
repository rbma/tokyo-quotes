'use strict'

quoteServices = angular.module('quoteServices', [])

quoteServices.factory('quoteService', ->
	quotes = []
	shuffledQuotes = []
	order = 0
	
	videoPlaying = false

	

	addQuotes = (quotes) ->
		quotes = quotes

	


	shuffleQuotes = (quotes) ->
		for i in [quotes.length-1..1]
			#choose random element to swap with
			j = Math.floor(Math.random() * (i + 1))

			[quotes[i], quotes[j]] = [quotes[j], quotes[i]]

		shuffledQuotes = quotes
		return shuffledQuotes



	#exposed methods
	return{ 
		getOrder: ->
			return order
		
		shuffleQuotes: (quotes) ->
			shuffleQuotes(quotes)

		addQuotes: (quotes) ->
			addQuotes(quotes)

		infoScreen: ->
			infoScreen()
	}
)