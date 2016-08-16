/*jslint browser: true, esversion: 6 */
var ws = window.ws || {};
ws.ui = ws.ui || {};

/**
 * Manage `.where-to-buy` HTML components.
 * @class WhereToBuy
 * @version 1.0.0
 * @author Bruno Lesieur
 * @requires {@link external:jQuery}
 * @memberOf module:munchkin~ws.ui.
 */
ws.ui.WhereToBuy = function () {
    var publics = this;

    /**
     * The original name of component.
     * @name className
     * @type {string}
     * @memberOf module:munchkin~ws.ui.WhereToBuy#
     * @default "where-to-buy"
     */
    publics.className = "where-to-buy";

    /**
     * Keep the map to the right on Desktop.
     * @function manageAffix
     * @param {string} [selector] - Select alternative Sender HTML Components to apply the behavior.
     * @memberOf module:munchkin~ws.ui.WhereToBuy#
     */
    publics.manageAffix = function (selector) {
        selector = selector || "." + publics.className;

        var $window = $(window),
            $map = $(selector + "--map"),
            $list = $(selector + "--list"),
            setAffix = function (value) {
                $map.css("padding-top", value);
            },
            unsetAffix = function () {
                setAffix("");
            },
            ifDesktop = window.matchMedia("(min-width: 768px)").matches,
            previousScroll = 0,
            offset = 20;

        $window.on("scroll resize", function () {
            var underUpperLimit = $window.scrollTop() > $map.offset().top - offset,
                aboveLowerLimit = $map[0].clientHeight < $list.height(),
                scrollUpward = previousScroll > $window.scrollTop(),
                affixOffset = $window.scrollTop() - $map.offset().top + offset;

            if (ifDesktop) {
                if ((underUpperLimit && aboveLowerLimit) || scrollUpward) {
                    setAffix(affixOffset);
                }
                previousScroll = $window.scrollTop();
            } else {
                unsetAffix();
            }
        });
    };

    /**
     * Allow you to jump to the map when you click on `.go-to-map` item.
     * @function goToMap
     * @param {string} [selector] - Select alternative Sender HTML Components to apply the behavior.
     * @memberOf module:munchkin~ws.ui.WhereToBuy#
     */
    publics.goToMap = function (selector) {
        var $canvas = $("#map-canvas");
        selector = selector || "." + publics.className + " .go-to-map";

        if($canvas) {
            $(selector).click(function () {
                $("html, body").animate( { scrollTop: $("#map-canvas").offset().top - 20 }, 500);
            });
        }
    };
};

export default ws.ui.WhereToBuy;