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
		imageSrc = attrs.image
		
		img = new Image()
		img.src = imageSrc
		
		#get original specs
		imgWidth = img.width
		imgHeight = img.height

		ratio = imgWidth / imgHeight
		


		reset = ->
			winHeight = $window.innerHeight

			img = new Image()
			img.src = imageSrc

			

			#set height of image to window height
			img.height = winHeight

			img.width = winHeight * ratio
			img.style.opacity = 0.8

			wrapperWidth = $('.image-wrapper').width()

			#get diff
			diff = img.width - wrapperWidth
			offset = diff / 2

			$('.panoram').css
				width: img.width + 'px'
				height: winHeight + 'px'
				left: -offset

			$('.panoram').empty().append img


		element.bind('mousemove', (event) ->
			mousemove(event)
			)


		mousemove = (event) ->
			mouseX = -(event.clientX)
			mouseY = (event.clientY)
			console.log mouseX
			element.css
				left: "#{mouseX}px"


		reset()
		$(window).resize ->
			reset()

		

		# $(window).resize ->
		# 	console.log 'yo'



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
