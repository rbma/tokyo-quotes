// Generated by CoffeeScript 1.7.1
'use strict';
var quoteDirectives;

quoteDirectives = angular.module('quoteDirectives', []);

quoteDirectives.directive('lazy', function() {
  var link;
  link = function($scope, element, attrs) {
    var id;
    id = attrs.videoid;
    element.data('youtube-id', id);
    return element.lazyYT();
  };
  return {
    link: link
  };
});

quoteDirectives.directive('slide', [
  '$window', '$rootScope', function($window, $rootScope) {
    var link;
    link = function($scope, element, attrs) {
      return element.bind('load', function(event) {
        var imgHeight, imgWidth, ratio, reset;
        $rootScope.$broadcast('loaded');
        element.show();
        imgWidth = element.width();
        imgHeight = element.height();
        ratio = imgWidth / imgHeight;
        reset = function() {
          var diff, margin, mousemove, offset, winHeight, winWidth, wrapperWidth;
          winHeight = $window.innerHeight;
          winWidth = $window.innerWidth;
          if (winHeight < 700) {
            winHeight = 700;
          }
          element.height(winHeight);
          element.width(winHeight * ratio);
          wrapperWidth = $('.image-wrapper').width();
          diff = element.width() - wrapperWidth;
          offset = diff / 2;
          margin = winWidth * .2;
          $('.panoram').css({
            width: (element.width()) + 'px',
            height: (element.height()) + 'px',
            left: -offset * 1.5 + 'px'
          });
          element.bind('mousemove', function(event) {
            return mousemove(event);
          });
          return mousemove = function(event) {
            var mouseX;
            mouseX = -event.clientX * 1.5;
            return $('.panoram').css({
              left: "" + mouseX + "px"
            });
          };
        };
        $(window).bind('resize', function(event) {
          return reset();
        });
        return reset();
      });
    };
    return {
      link: link
    };
  }
]);

quoteDirectives.directive('spin', [
  '$rootScope', function($rootScope) {
    var link, target;
    target = document.getElementById("spinner");
    link = function($scope, element, attrs) {
      var opts, spinner;
      opts = {
        lines: 13,
        color: '#fff'
      };
      spinner = new Spinner(opts);
      return spinner.spin(target);
    };
    $rootScope.$on('loaded', function(event) {
      return target.remove();
    });
    return {
      link: link
    };
  }
]);

quoteDirectives.directive('hoverPic', function() {
  var link, mousemove;
  mousemove = function(event) {
    var mouseX, mouseY;
    mouseX = event.clientX * 2;
    mouseY = event.clientY * 2;
    return $('.frame').css({
      backgroundPosition: "" + mouseX + "px " + mouseY + "px"
    });
  };
  link = function($scope, element, attrs) {
    element.unbind('mouseenter');
    element.bind('mouseenter', function() {
      var image;
      image = attrs.img;
      $('.frame').css({
        background: "url(" + image + ")"
      });
      return $('.image-wrapper').hide();
    });
    element.unbind('mouseleave');
    element.bind('mouseleave', function() {
      $('.frame').css({
        background: "black"
      });
      return $('.image-wrapper').show();
    });
    return element.bind('mousemove', function(event) {
      return mousemove(event);
    });
  };
  return {
    link: link
  };
});

quoteDirectives.directive('scene', [
  '$window', function($window) {
    var link;
    link = function($scope, element, attrs) {
      var animate, camera, container, init, mouseX, mouseY, onDocumentMouseMove, onWindowResize, render, renderer, scene, stats, windowHalfX, windowHalfY;
      container = {};
      stats = {};
      camera = {};
      scene = {};
      renderer = {};
      mouseX = 0;
      mouseY = 0;
      windowHalfX = $window.innerWidth / 2;
      windowHalfY = $window.innerHeight / 2;
      init = function() {
        var ambient, directionalLight, loader, manager, texture;
        container = document.getElementById('threed');
        camera = new THREE.PerspectiveCamera(45, $window.innerWidth / $window.innerHeight, 1, 10000);
        camera.position.z = 100;
        camera.position.x = 0;
        camera.position.y = 100;
        scene = new THREE.Scene();
        ambient = new THREE.AmbientLight(0xffffff);
        scene.add(ambient);
        directionalLight = new THREE.DirectionalLight(0xffeedd);
        directionalLight.position.set(100, 0, 1);
        scene.add(directionalLight);
        directionalLight = new THREE.DirectionalLight(0xffffff);
        directionalLight.position.set(20, 20, 0);
        scene.add(directionalLight);
        manager = new THREE.LoadingManager();
        manager.onProgress = function(item, loaded, total) {
          return console.log(item, loaded, total);
        };
        texture = THREE.ImageUtils.loadTexture("img/pattern_poster.jpg");
        texture.needsUpdate = true;
        loader = new THREE.OBJLoader(manager);
        loader.load('obj/quote_clan.obj', function(object) {
          object.traverse(function(child) {
            if (child instanceof THREE.Mesh) {
              return child.material.map = texture;
            }
          });
          object.position.y = 0;
          object.position.x = -20;
          return scene.add(object);
        });
        renderer = new THREE.WebGLRenderer({
          alpha: true
        });
        renderer.setSize($window.innerWidth, $window.innerHeight);
        container.appendChild(renderer.domElement);
        document.addEventListener('mousemove', onDocumentMouseMove, false);
        return window.addEventListener('resize', onWindowResize, false);
      };
      onWindowResize = function() {
        windowHalfX = window.innerWidth / 4;
        windowHalfY = window.innerHeight / 4;
        camera.aspect = ($window.innerWidth / 2) / window.innerHeight;
        camera.updateProjectionMatrix();
        return renderer.setSize($window.innerWidth / 2, window.innerHeight);
      };
      onDocumentMouseMove = function(event) {
        mouseX = (event.clientX - windowHalfX) / 2;
        return mouseY = (event.clientY - windowHalfY) / 2;
      };
      animate = function() {
        requestAnimationFrame(animate);
        return render();
      };
      render = function() {
        camera.position.x += (mouseX - camera.position.x) * .1;
        camera.position.y += (-mouseY - camera.position.y) * .1;
        camera.lookAt(scene.position);
        return renderer.render(scene, camera);
      };
      init();
      return animate();
    };
    return {
      link: link
    };
  }
]);
