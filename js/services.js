(function(){"use strict";var n;n=angular.module("quoteServices",[]),n.factory("quoteService",function(){var n,t,r,e;return t=[],e=[],n=function(n){return n=n},r=function(n){var t,r,u,o,i;for(t=u=o=n.length-1;1>=o?1>=u:u>=1;t=1>=o?++u:--u)r=Math.floor(Math.random()*(t+1)),i=[n[r],n[t]],n[t]=i[0],n[r]=i[1];return e=n},{getVids:function(){return vids},shuffleQuotes:function(n){return r(n)},addQuotes:function(t){return n(t)},nextVideo:function(){return console.log("next")}}})}).call(this);