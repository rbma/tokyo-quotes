(function(){"use strict";var e;e=angular.module("quoteControllers",[]),e.controller("IndexCtrl",["$scope","$http","contentfulClient","quoteService",function(e,n,o,t){var u;return e.body="",e.quotes=[],e.videoStopped=!1,e.begin=!0,e.player={},u=0,e.playing=!1,e.playerVars={controls:0,autoplay:0,modestbranding:1,showinfo:0,hd:1},e.$on("youtube.player.ready",function(n,o){return e.player=o,o.seekTo(28)}),e.$on("youtube.player.ended",function(n,o){return e.playing=!1}),e.$watch("playing",function(e){return console.log(e)}),o.entries({content_type:"3NIaEMnF5CcQOCUeUaGESy",include:1}).then(function(n){var o;return e.data=n[0],e.body=e.data.fields,console.log(e.body),o=e.body.individualQuote,e.shuffledQuotes=t.shuffleQuotes(o),e.current=e.shuffledQuotes[u],e.launchVid=function(e,n){return console.log(n)}})}])}).call(this);