/*jslint browser: true, esversion: 6 */
import $ from "jquery";
import "owlcarousel";

var ws = window.ws || {};
ws.ui = ws.ui || {};

/**
 * Manage `.product` HTML components.
 * @class Product
 * @version 1.0.0
 * @author Bruno Lesieur
 * @requires {@link external:jQuery}
 * @requires {@link external:OwlCarousel}
 * @memberOf module:munchkin~ws.ui.
 */
ws.ui.Product = function () {
    var publics = this;

    /**
     * The original name of component.
     * @name className
     * @type {string}
     * @memberOf module:munchkin~ws.ui.Product#
     * @default "product"
     */
    publics.className = "product";

    /**
     * Apply a carousel on Presentation image.
     * @function carousel
     * @param {string} [selector] - Select alternative HTML Components to apply the behavior.
     * @memberOf module:munchkin~ws.ui.Product#
     */
    publics.carousel = function (selector) {
        selector = selector || "." + publics.className + "--image.as-carousel";
        $(selector).owlCarousel({
            singleItem: true,
            navigation: false,
            pagination: true
        });
    };
};

export default ws.ui.Product;