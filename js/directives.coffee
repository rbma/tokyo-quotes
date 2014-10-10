'use strict'

quoteDirectives = angular.module('quoteDirectives', [])



quoteDirectives.directive('lazy', ->

	link = ($scope, element, attrs) ->
		id = attrs.videoid
		element.data('youtube-id',id)
		element.lazyYT()


	return{
		link: link
	}
)


quoteDirectives.directive('slide', ['$window', ($window) ->
	
	link = ($scope, element, attrs) ->
		element.bind('load', (event) ->
			imgWidth = element.width()
			imgHeight = element.height()

			ratio = imgWidth / imgHeight

			reset = ->
				winHeight = $window.innerHeight
				winWidth = $window.innerWidth

				if winHeight < 700
					winHeight = 700

				element.height(winHeight)

				wrapperWidth = $('.image-wrapper').width()

				#get diff
				diff = element.width() - wrapperWidth
				offset = diff / 2

				margin = winWidth * .2



				$('.panoram').css
					width: (element.width()) + 'px'
					height: (element.height()) + 'px'
					left: -offset * 1.5 + 'px'

				element.bind('mousemove', (event) ->
					mousemove(event)
				)


				mousemove = (event) ->
					mouseX = -(event.clientX) * 1.5
					mouseY = -(event.clientY) * 0.05
					$('.panoram').css
						left: "#{mouseX}px"
						top: "#{mouseY}px"


			$(window).bind('resize', (event) ->
				reset()
			)

			$window.blur ->
				reset()

			$window.focus ->
				reset()


			reset()
			)
		


	return{
		link: link
	}
])





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
