(function(){"use strict";var t;t=angular.module("quoteControllers",[]),t.controller("IndexCtrl",["$scope","$http","contentfulClient",function(t,n,e){return t.body="",e.entries({content_type:"3NIaEMnF5CcQOCUeUaGESy",include:1}).then(function(n){return t.data=n[0],t.body=t.data.fields,console.log(t.body)})}])}).call(this);