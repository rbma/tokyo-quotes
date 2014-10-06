'use strict'

quoteServices = angular.module('quoteServices', [])

quoteServices.factory('quoteService', ->
	quotes = []
	shuffledQuotes = []

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
		
		getVids: ->
			return vids
		
		shuffleQuotes: (quotes) ->
			shuffleQuotes(quotes)

		addQuotes: (quotes) ->
			addQuotes(quotes)

		nextVideo: ->
			console.log 'next'
	}
)