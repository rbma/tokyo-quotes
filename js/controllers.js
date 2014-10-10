(function() {
    "use strict";
    var e;
    e = angular.module("quoteControllers", []);
    e.controller("IndexCtrl", [ "$scope", "$http", "$sce", "contentfulClient", function(e, t, n, o) {
        var r, l;
        r = new Showdown.converter();
        e.body = {};
        e.videoStopped = false;
        e.begin = true;
        e.player = {};
        e.background = {};
        l = 0;
        e.playing = false;
        e.showInfo = false;
        e.playerVars = {
            controls: 0,
            autoplay: 0,
            modestbranding: 1,
            showinfo: 0,
            hd: 1
        };
        e.$on("youtube.player.ready", function(t, n) {
            e.player = n;
            return console.log(e.player);
        });
        e.$on("youtube.player.ended", function(t, n) {
            e.playing = false;
            return e.showInfo = true;
        });
        e.$watch("playing", function(e) {
            return console.log(e);
        });
        return o.entries({
            content_type: "3NIaEMnF5CcQOCUeUaGESy",
            include: 1
        }).then(function(t) {
            var o, l, a, u, i;
            e.data = t[0];
            e.body = e.data.fields;
            console.log(e.body);
            e.background = e.body.bodyImage.fields.file.url;
            e.$watch("background", function(e) {
                return console.log(e);
            });
            i = e.body.individualQuote;
            for (a = 0, u = i.length; a < u; a++) {
                o = i[a];
                o.fields.artistText = r.makeHtml(o.fields.artistText);
            }
            l = e.body.individualQuote;
            e.current = l[0];
            e.launchVid = function(t) {
                var n;
                e.playing = true;
                n = t.fields.youtubeId;
                e.player.loadVideoById(n);
                e.player.playVideo();
                e.titleName = t.fields.titleName;
                e.artistText = t.fields.artistText;
                return e.player.seekTo(28);
            };
            e.closeInfo = function() {
                return e.showInfo = false;
            };
            e.updateInfo = function(t) {
                return e.current = t;
            };
            return e.trust = function(e) {
                return n.trustAsHtml(e);
            };
        });
    } ]);
}).call(this);