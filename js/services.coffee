'use strict'

quoteServices = angular.module('quoteServices', [])

quoteServices.factory('webgl', ->

	
	supportsWebGL = ->
		canvas = document.createElement( 'canvas' )
		webgl = false
		try
			webgl = !!( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) )
				
		catch e
				
		return webgl

	
	return{
		checkWebGL: ->
			supportsWebGL()
	}

)
