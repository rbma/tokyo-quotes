(function() {
    "use strict";
    var e;
    e = angular.module("quoteControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$window", "$http", "$sce", "contentfulClient", function(e, n, t, r, o) {
        var a, i, u, l;
        a = new Showdown.converter();
        e.body = {};
        e.videoStopped = false;
        e.begin = true;
        e.player = {};
        e.background = {};
        u = 0;
        e.playing = false;
        e.showInfo = false;
        l = function() {
            return $(".video-wrapper").removeClass("hidden");
        };
        i = function() {
            return $(".video-wrapper").addClass("hidden");
        };
        e.playerVars = {
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1,
            enablejsapi: 1,
            origin: "*"
        };
        e.$on("youtube.player.ready", function(n, t) {
            return e.player = t;
        });
        e.$on("youtube.player.ended", function(n, t) {
            e.playing = false;
            e.showInfo = true;
            return i();
        });
        e.$watch("playing", function(e) {
            return console.log(e);
        });
        e.$watch("player", function(e) {});
        return o.entries({
            content_type: "3NIaEMnF5CcQOCUeUaGESy",
            include: 1
        }).then(function(n) {
            var t, o, i, u, d;
            e.data = n[0];
            e.body = e.data.fields;
            e.background = e.body.bodyImage.fields.file.url;
            e.$watch("background", function(e) {});
            d = e.body.individualQuote;
            for (i = 0, u = d.length; i < u; i++) {
                t = d[i];
                t.fields.artistText = a.makeHtml(t.fields.artistText);
            }
            o = e.body.individualQuote;
            e.current = o[0];
            e.launchVid = function(n) {
                var t;
                e.playing = true;
                l();
                t = n.fields.youtubeId;
                e.player.loadVideoById(t);
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
                return r.trustAsHtml(e);
            };
        });
    } ]);
}).call(this);