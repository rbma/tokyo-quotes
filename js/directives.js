(function() {
    "use strict";
    var n;
    n = angular.module("quoteDirectives", []);
    n.directive("lazy", function() {
        var n;
        n = function(n, e, r) {
            var i;
            i = r.videoid;
            e.data("youtube-id", i);
            return e.lazyYT();
        };
        return {
            link: n
        };
    });
    n.directive("slide", [ "$window", "$rootScope", function(n, e) {
        var r;
        r = function(r, i, t) {
            return i.bind("load", function(r) {
                var t, o, u, c;
                e.$broadcast("loaded");
                o = i.width();
                t = i.height();
                u = o / t;
                c = function() {
                    var e, r, t, o, u, c, a;
                    u = n.innerHeight;
                    c = n.innerWidth;
                    if (u < 700) {
                        u = 700;
                    }
                    i.height(u);
                    a = $(".image-wrapper").width();
                    e = i.width() - a;
                    o = e / 2;
                    r = c * .2;
                    $(".panoram").css({
                        width: i.width() + "px",
                        height: i.height() + "px",
                        left: -o * 1.5 + "px"
                    });
                    i.bind("mousemove", function(n) {
                        return t(n);
                    });
                    return t = function(n) {
                        var e;
                        e = -n.clientX * 1.5;
                        return $(".panoram").css({
                            left: "" + e + "px"
                        });
                    };
                };
                $(window).bind("resize", function(n) {
                    return c();
                });
                return c();
            });
        };
        return {
            link: r
        };
    } ]);
    n.directive("spin", [ "$rootScope", function(n) {
        var e, r;
        r = document.getElementById("spinner");
        e = function(n, e, i) {
            var t, o;
            t = {
                lines: 13,
                color: "#fff"
            };
            o = new Spinner(t);
            return o.spin(r);
        };
        n.$on("loaded", function(n) {
            return r.remove();
        });
        return {
            link: e
        };
    } ]);
    n.directive("hoverPic", function() {
        var n, e;
        e = function(n) {
            var e, r;
            e = n.clientX * 2;
            r = n.clientY * 2;
            return $(".frame").css({
                backgroundPosition: "" + e + "px " + r + "px"
            });
        };
        n = function(n, r, i) {
            r.unbind("mouseenter");
            r.bind("mouseenter", function() {
                var n;
                n = i.img;
                $(".frame").css({
                    background: "url(" + n + ")"
                });
                return $(".image-wrapper").hide();
            });
            r.unbind("mouseleave");
            r.bind("mouseleave", function() {
                $(".frame").css({
                    background: "black"
                });
                return $(".image-wrapper").show();
            });
            return r.bind("mousemove", function(n) {
                return e(n);
            });
        };
        return {
            link: n
        };
    });
}).call(this);