/*jslint browser: true, esversion: 6 */
import $ from "jquery";
import "owlcarousel";

var ws = window.ws || {};
ws.ui = ws.ui || {};

/**
 * Manage `.hero` HTML components.
 * @class Hero
 * @version 1.0.0
 * @author Bruno Lesieur
 * @requires {@link external:jQuery}
 * @requires {@link external:OwlCarousel}
 * @memberOf module:munchkin~ws.ui.
 */
ws.ui.Hero = function () {
    var publics = this;

    /**
     * The original name of component.
     * @name className
     * @type {string}
     * @memberOf module:munchkin~ws.ui.Hero#
     * @default "hero"
     */
    publics.className = "hero";

    /**
     * Apply a carousel on Presentation image.
     * @function carousel
     * @param {string} [selector] - Select alternative HTML Components to apply the behavior.
     * @memberOf module:munchkin~ws.ui.Hero#
     */
    publics.carousel = function (selector) {
        selector = selector || "." + publics.className + ".as-carousel .multiple";
        $(selector).owlCarousel({
            singleItem: true,
            navigation: false,
            pagination: true
        });
    };
};

export default ws.ui.Hero;