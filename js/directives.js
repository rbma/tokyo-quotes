(function() {
    "use strict";
    var n;
    n = angular.module("quoteDirectives", []);
    n.directive("lazy", function() {
        var n;
        n = function(n, e, i) {
            var t;
            t = i.videoid;
            e.data("youtube-id", t);
            return e.lazyYT();
        };
        return {
            link: n
        };
    });
    n.directive("slide", [ "$window", "$rootScope", function(n, e) {
        var i;
        i = function(i, t, r) {
            return t.bind("load", function(i) {
                var r, o, u, a;
                e.$broadcast("loaded");
                t.show();
                o = t.width();
                r = t.height();
                u = o / r;
                a = function() {
                    var e, i, r, o, a, d, c;
                    a = n.innerHeight;
                    d = n.innerWidth;
                    if (a < 700) {
                        a = 700;
                    }
                    t.height(a);
                    t.width(a * u);
                    c = $(".image-wrapper").width();
                    e = t.width() - c;
                    o = e / 2;
                    i = d * .2;
                    $(".panoram").css({
                        width: t.width() + "px",
                        height: t.height() + "px",
                        left: -o * 1.5 + "px"
                    });
                    t.bind("mousemove", function(n) {
                        return r(n);
                    });
                    return r = function(n) {
                        var e;
                        e = -n.clientX * 1.5;
                        return $(".panoram").css({
                            left: "" + e + "px"
                        });
                    };
                };
                $(window).bind("resize", function(n) {
                    return a();
                });
                return a();
            });
        };
        return {
            link: i
        };
    } ]);
    n.directive("spin", [ "$rootScope", function(n) {
        var e, i;
        i = document.getElementById("spinner");
        e = function(n, e, t) {
            var r, o;
            r = {
                lines: 13,
                color: "#fff"
            };
            o = new Spinner(r);
            return o.spin(i);
        };
        n.$on("loaded", function(n) {
            return i.remove();
        });
        return {
            link: e
        };
    } ]);
    n.directive("hoverPic", function() {
        var n, e;
        e = function(n) {
            var e, i;
            e = n.clientX * 2;
            i = n.clientY * 2;
            return $(".frame").css({
                backgroundPosition: "" + e + "px " + i + "px"
            });
        };
        n = function(n, i, t) {
            i.unbind("mouseenter");
            i.bind("mouseenter", function() {
                var n;
                n = t.img;
                $(".frame").css({
                    background: "url(" + n + ")"
                });
                return $(".image-wrapper").hide();
            });
            i.unbind("mouseleave");
            i.bind("mouseleave", function() {
                $(".frame").css({
                    background: "black"
                });
                return $(".image-wrapper").show();
            });
            return i.bind("mousemove", function(n) {
                return e(n);
            });
        };
        return {
            link: n
        };
    });
    n.directive("scene", [ "$window", function(n) {
        var e;
        e = function(e, i, t) {
            var r, o, u, a, d, c, s, l, f, p, h, m, w, g, v;
            u = {};
            m = {};
            o = {};
            h = {};
            p = {};
            d = 0;
            c = 0;
            g = n.innerWidth / 2;
            v = n.innerHeight / 2;
            w = function() {
                var n, e, i;
                n = document.createElement("canvas");
                i = false;
                try {
                    i = !!(n.getContext("webgl") || n.getContext("experimental-webgl"));
                } catch (t) {
                    e = t;
                    alert("no support");
                }
                return i;
            };
            w();
            a = function() {
                var e, i, t, r, a;
                u = document.getElementById("threed");
                o = new THREE.PerspectiveCamera(45, n.innerWidth / n.innerHeight, 1, 1e4);
                o.position.z = 200;
                o.position.x = -180;
                o.position.y = 100;
                h = new THREE.Scene();
                e = new THREE.AmbientLight(16777215);
                h.add(e);
                i = new THREE.DirectionalLight(16772829);
                i.position.set(100, -20, 1);
                h.add(i);
                r = new THREE.LoadingManager();
                r.onProgress = function(n, e, i) {
                    return console.log(n, e, i);
                };
                a = THREE.ImageUtils.loadTexture("img/grad.png");
                a.needsUpdate = true;
                t = new THREE.OBJLoader(r);
                t.load("obj/quotes.obj", function(n) {
                    n.traverse(function(n) {
                        if (n instanceof THREE.Mesh) {
                            return n.material.map = a;
                        }
                    });
                    n.position.y = 0;
                    n.position.x = -25;
                    return h.add(n);
                });
                p = new THREE.WebGLRenderer({
                    alpha: true,
                    antialiasing: true
                });
                p.setSize(n.innerWidth, n.innerHeight);
                u.appendChild(p.domElement);
                document.addEventListener("mousemove", s, false);
                return window.addEventListener("resize", l, false);
            };
            l = function() {
                g = window.innerWidth / 2;
                v = window.innerHeight / 2;
                o.aspect = n.innerWidth / window.innerHeight;
                o.updateProjectionMatrix();
                return p.setSize(n.innerWidth, window.innerHeight);
            };
            s = function(n) {
                d = (n.clientX - g) / 5;
                return c = (n.clientY - v) / 10;
            };
            r = function() {
                requestAnimationFrame(r);
                return f();
            };
            f = function() {
                o.position.x += (-d - o.position.x) * .1;
                o.position.y += (-c - o.position.y) * .1;
                o.lookAt(h.position);
                return p.render(h, o);
            };
            a();
            return r();
        };
        return {
            link: e
        };
    } ]);
}).call(this);