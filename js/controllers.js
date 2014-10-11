(function() {
    "use strict";
    var e;
    e = angular.module("quoteControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$window", "$http", "$sce", "contentfulClient", function(e, n, t, o, r) {
        var a, l, u;
        a = new Showdown.converter();
        e.body = {};
        e.videoStopped = false;
        e.begin = true;
        e.player = {};
        e.background = {};
        e.reload = function() {
            return window.location.reload();
        };
        e.playing = false;
        e.showInfo = false;
        u = function() {
            return $(".video-wrapper").removeClass("dontshow");
        };
        l = function() {
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
            return l();
        });
        e.$watch("playing", function(e) {
            return console.log(e);
        });
        e.$watch("player", function(e) {});
        return r.entries({
            content_type: "3NIaEMnF5CcQOCUeUaGESy",
            include: 1
        }).then(function(n) {
            var t, r, l, i, d;
            e.data = n[0];
            e.body = e.data.fields;
            e.background = e.body.bodyImage.fields.file.url;
            e.$watch("background", function(e) {});
            d = e.body.individualQuote;
            for (l = 0, i = d.length; l < i; l++) {
                t = d[l];
                t.fields.artistText = a.makeHtml(t.fields.artistText);
            }
            r = e.body.individualQuote;
            e.current = r[0];
            e.launchVid = function(n) {
                var t;
                e.playing = true;
                u();
                t = n.fields.youtubeId;
                console.log("called");
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