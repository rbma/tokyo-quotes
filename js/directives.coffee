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









quoteDirectives.directive('slide', ['$window', '$rootScope', ($window, $rootScope) ->
	
	link = ($scope, element, attrs) ->
		element.bind('load', (event) ->
			$rootScope.$broadcast('loaded')
			element.show()
			imgWidth = element.width()
			imgHeight = element.height()

			ratio = imgWidth / imgHeight

			reset = ->
				winHeight = $window.innerHeight
				winWidth = $window.innerWidth

				if winHeight < 700
					winHeight = 700

				element.height(winHeight)

				element.width(winHeight * ratio)

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
					$('.panoram').css
						left: "#{mouseX}px"


			$(window).bind('resize', (event) ->
				reset()
			)



			reset()
			)
		


	return{
		link: link
	}
])











quoteDirectives.directive('spin', ['$rootScope', ($rootScope) ->

	target = document.getElementById("spinner")

	link = ($scope, element, attrs) ->

		opts = {
			lines: 13
			color: '#fff'
		}

		spinner = new Spinner(opts)
		
		spinner.spin(target)


	$rootScope.$on('loaded', (event) ->
		target.remove()
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







quoteDirectives.directive('scene', ['$window', ($window) ->

	link = ($scope, element, attrs) ->
			container = {}
			stats = {}
			camera = {}
			scene = {}
			renderer = {}
			mouseX = 0
			mouseY = 0

			windowHalfX = $window.innerWidth / 2
			windowHalfY = $window.innerHeight / 2

			supportsWebGL = ->
				canvas = document.createElement( 'canvas' )
				webgl = false
				try
					webgl = !!( canvas.getContext( 'webgl' ) || canvas.getContext( 'experimental-webgl' ) )
				
				catch e
					alert 'no support'
				
				return webgl

			supportsWebGL()

			init = ->

				container = document.getElementById('threed')


				camera = new THREE.PerspectiveCamera( 45, ($window.innerWidth) / $window.innerHeight, 1, 10000)
				camera.position.z = 200
				camera.position.x = -180
				camera.position.y = 100

				#scene

				scene = new THREE.Scene()

				ambient = new THREE.AmbientLight( 0xffffff )
				scene.add( ambient )

				directionalLight = new THREE.DirectionalLight( 0xffeedd )
				directionalLight.position.set( 100, -20, 1 )
				scene.add( directionalLight )

				# directionalLight = new THREE.DirectionalLight( 0xffeedd )

				manager = new THREE.LoadingManager()
				manager.onProgress = (item, loaded, total) ->
					console.log( item, loaded, total )



				texture = THREE.ImageUtils.loadTexture( "img/grad.png" );
				texture.needsUpdate = true


				#model

				loader = new THREE.OBJLoader( manager )
				loader.load( 'obj/quotes.obj', (object) ->

					object.traverse (child) ->
						if child instanceof THREE.Mesh
							child.material.map = texture

					# object.scale(2,2,2)
					object.position.y = 0
					object.position.x = -25
					scene.add( object )
				)



				renderer = new THREE.WebGLRenderer({alpha: true, antialiasing: true})
				renderer.setSize( $window.innerWidth, $window.innerHeight )
				container.appendChild( renderer.domElement )

				document.addEventListener( 'mousemove', onDocumentMouseMove, false )

				window.addEventListener( 'resize', onWindowResize, false )


			onWindowResize = ->
				windowHalfX = window.innerWidth / 2
				windowHalfY = window.innerHeight / 2

				camera.aspect = ($window.innerWidth) / window.innerHeight
				camera.updateProjectionMatrix()

				renderer.setSize( $window.innerWidth, window.innerHeight )


			onDocumentMouseMove = (event) ->
				mouseX = ( event.clientX - windowHalfX ) / 5
				mouseY = ( event.clientY - windowHalfY ) / 10

			animate = ->

				requestAnimationFrame( animate )
				render()

			render = ->
				camera.position.x += ( -mouseX - camera.position.x ) * .1
				camera.position.y += ( -mouseY - camera.position.y ) * .1

				camera.lookAt( scene.position )

				renderer.render( scene, camera )

			init()
			animate()




	return{
		link: link
	}
])

