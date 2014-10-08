'use strict'

quoteDirectives = angular.module('quoteDirectives', [])

quoteDirectives.directive('hoverPic', ->

	
	mousemove = (event) ->
		mouseX = (event.clientX) * 2
		mouseY = (event.clientY) * 2
		$('.frame').css
			backgroundPosition: "#{mouseX}px #{mouseY}px"


	

	link = ($scope, element, attrs) ->

		element.unbind('mouseenter')
		
		element.bind('mouseenter', ->
			image = attrs.img
			$('.frame').css
				background: "url(#{image})"
			#hide image wrapper
			$('.image-wrapper').hide()
		)

		
		element.unbind('mouseleave')
		element.bind('mouseleave', ->
			$('.frame').css
				background: "black"
			$('.image-wrapper').show()
		)

		element.bind('mousemove', (event) ->
			mousemove(event)
			)



	return{
		link: link
	}
)
