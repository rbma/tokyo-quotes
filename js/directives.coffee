'use strict'

quoteDirectives = angular.module('quoteDirectives', [])

quoteDirectives.directive('hoverPic', ->

	
	mousemove = (event) ->
		mouseX = (event.clientX)
		mouseY = (event.clientY) / -5
		$('body').css
			backgroundPosition: "#{mouseX}px #{mouseY}px"


	

	link = ($scope, element, attrs) ->

		element.unbind('mouseenter')
		
		element.bind('mouseenter', ->
			image = attrs.img
			$('body').css
				background: "url(img/#{image})"
		)

		
		element.unbind('mouseleave')
		element.bind('mouseleave', ->
			$('body').css
				background: "black"
		)

		element.bind('mousemove', (event) ->
			mousemove(event)
			)



	return{
		link: link
	}
)
