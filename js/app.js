(function() {
    "use strict";
    var e;
    e = angular.module("quotes", [ "ngRoute", "ngSanitize", "ng-contentful", "ngAnimate", "quoteControllers", "quoteDirectives", "quoteServices", "youtube-embed" ]);
    e.config([ "$routeProvider", "$locationProvider", "contentfulClientProvider", function(e, t, n) {
        e.when("/", {
            templateUrl: "partials/index.html",
            controller: "IndexCtrl"
        }).otherwise({
            redirectTo: "/"
        });
        n.setSpaceId("4xlwm16911zp");
        return n.setAccessToken("6fe66430d43042a7c28777422e4ae6f8edf5f58bf05d46a072e92a83bf432dab");
    } ]);
}).call(this);