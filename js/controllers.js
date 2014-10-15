(function() {
    "use strict";
    var e;
    e = angular.module("quoteControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$window", "$http", "$sce", "contentfulClient", "webgl", function(e, n, t, o, r, a) {
        var l, u, i;
        l = new Showdown.converter();
        e.body = {};
        e.videoStopped = false;
        e.begin = true;
        e.player = {};
        e.background = {};
        e.webglenabled = a.checkWebGL();
        e.reload = function() {
            return window.location.reload();
        };
        e.playing = false;
        e.showInfo = false;
        i = function() {
            return $(".video-wrapper").removeClass("dontshow");
        };
        u = function() {
            return $(".video-wrapper").addClass("dontshow");
        };
        e.playerVars = {
            wmode: "opaque",
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1,
            enablejsapi: 1
        };
        e.$on("youtube.player.ready", function(n, t) {
            return e.player = t;
        });
        e.$on("youtube.player.ended", function(n, t) {
            e.playing = false;
            e.showInfo = true;
            return u();
        });
        e.$watch("playing", function(e) {
            return console.log(e);
        });
        e.$watch("player", function(e) {});
        return r.entries({
            content_type: "3NIaEMnF5CcQOCUeUaGESy",
            include: 1
        }).then(function(n) {
            var t, r, a, u, d;
            e.data = n[0];
            e.body = e.data.fields;
            e.background = e.body.bodyImage.fields.file.url;
            e.$watch("background", function(e) {});
            d = e.body.individualQuote;
            for (a = 0, u = d.length; a < u; a++) {
                t = d[a];
                t.fields.artistText = l.makeHtml(t.fields.artistText);
            }
            r = e.body.individualQuote;
            e.current = r[0];
            e.launchVid = function(n) {
                var t;
                e.playing = true;
                i();
                t = n.fields.youtubeId;
                e.player.loadVideoById(t);
                e.player.playVideo();
                e.titleName = n.fields.titleName;
                return e.artistText = n.fields.artistText;
            };
            e.closeInfo = function() {
                return e.showInfo = false;
            };
            e.updateInfo = function(n) {
                return e.current = n;
            };
            return e.trust = function(e) {
                return o.trustAsHtml(e);
            };
        });
    } ]);
}).call(this);