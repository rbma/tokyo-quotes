(function() {
    "use strict";
    var e;
    e = angular.module("quoteServices", []);
    e.factory("webgl", function() {
        var e;
        e = function() {
            var e, t, n;
            e = document.createElement("canvas");
            n = false;
            try {
                n = !!(e.getContext("webgl") || e.getContext("experimental-webgl"));
            } catch (r) {
                t = r;
            }
            return n;
        };
        return {
            checkWebGL: function() {
                return e();
            }
        };
    });
}).call(this);