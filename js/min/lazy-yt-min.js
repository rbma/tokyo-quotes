(function($) {
    "use strict";
    function t(t) {
        var e = t.data("width"), a = t.data("height"), i = t.data("ratio"), o = t.data("youtube-id"), l = [ "16", "9" ], d = 0, s = t.data("parameters") || "";
        if (typeof e === "undefined" || typeof a === "undefined") {
            a = 0;
            e = "90%";
            l = i.split(":")[1] / i.split(":")[0] * 100;
            d = l + "%";
        }
        t.css({
            position: "relative",
            height: a,
            width: e,
            "padding-top": d,
            background: "url(//img.youtube.com/vi/" + o + "/hqdefault.jpg) center center no-repeat",
            cursor: "pointer",
            "background-size": "cover"
        }).html('<p id="lazyYT-title-' + o + '" class="lazyYT-title"></p><div class="lazyYT-button"></div>').addClass("lazyYT-image-loaded");
        $.getJSON("https://gdata.youtube.com/feeds/api/videos/" + o + "?v=2&alt=json", function(t) {
            $("#lazyYT-title-" + o).text(t.entry.title.$t);
        });
        t.on("click", function(i) {
            i.preventDefault();
            if (!t.hasClass("lazyYT-video-loaded") && t.hasClass("lazyYT-image-loaded")) {
                t.html('<iframe width="' + e + '" height="' + a + '" src="//www.youtube.com/embed/' + o + "?autoplay=1&" + s + '" style="position:absolute; top:0; left:0; width:100%; height:100%;" frameborder="0" allowfullscreen></iframe>').removeClass("lazyYT-image-loaded").addClass("lazyYT-video-loaded");
            }
        });
    }
    $.fn.lazyYT = function() {
        return this.each(function() {
            var e = $(this).css("cursor", "pointer");
            t(e);
        });
    };
})(jQuery);