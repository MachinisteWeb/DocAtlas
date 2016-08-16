/*jslint browser: true, esversion: 6 */

import Header from "scripts/component.header";
import CallToAction from "scripts/component.call-to-action";
import Simple from "scripts/component.simple";
import Slot from "scripts/component.slot";
import Product from "scripts/component.product";
import Hero from "scripts/component.hero";

/**
 * @fileOverview Entry point to run all front Javascript of this website.
 * @author Bruno Lesieur
 * @version 1.0.0
 * @module munchkin
 */

/**
 * Write less, Do more.
 * @external jQuery
 * @global
 * @see {@link https://jquery.com/|jQuery}
 */

/**
 * throttle / debounce: Sometimes, less is more!.
 * @external Cowboy
 * @global
 * @see {@link http://benalman.com/projects/jquery-throttle-debounce-plugin/|Cowboy}
 */

/**
 * Touch enabled jQuery plugin that lets you create beautiful responsive carousel slider.
 * @external OwlCarousel
 * @requires {@link external:jQuery}
 * @global
 * @see {@link http://www.owlgraphic.com/owlcarousel2/|OwlCarousel}
 */

/**
 * Container for all static global function.
 * @namespace ws
 * @memberOf module:munchkin~
 */
var ws = window.ws || {};

/**
 * Namespace for all HTML Components.
 * @namespace ui
 * @memberOf module:munchkin~ws.
 */
ws.ui = ws.ui || {};

(function () {

    /**
     * Add `target="_blank"` on external link without `target` explicitly setted.
     * @function smartTargetInjection
     * @memberOf module:munchkin~ws.
     * @example <!-- Apply for this Cases -->
     * <a href="http://www.externalsite.com/"></a>
     * <a href="./media/images/image.jpg"></a>
     * <a href="./media/upload/doucument.pdf"></a>
     * <!-- Not apply for this Cases -->
     * <a href="page-on-this-site.html"></a>
     * <a href="http://www.currentsite.com/"></a>
     * <a href="http://www.externalsite.com/" target="_self"></a>
     * <a href="page-on-this-site.html" target="_blank"></a>
     */
    ws.smartTargetInjection = function () {
        var links = document.links;

        links = [].filter.call(links, function (link) {
            return !link.target;
        });

        links = [].filter.call(links, function (link) {
            return link.hostname !== window.location.hostname ||
                /\.(?!html?|php3?|aspx?)([a-z]{0,3}|[a-zt]{0,4})$/.test(link.pathname);
        });

        [].forEach.call(links, function (link) {
            link.setAttribute("target", "_blank");
        });
    };

    /**
     * Allow you to run Bootstrap DropDownList without Bootstrap.js Library. No Dependencies.
     * @function dropDownToggle
     * @memberOf module:munchkin~ws.
     * @see {@link http://www.w3schools.com/bootstrap/bootstrap_dropdowns.asp|Bootstrap DropDown Example}
     */
    ws.dropDownToggle = function () {
        var senders;

        senders = document.querySelectorAll(".dropdown");

        [].forEach.call(senders, function (sender) {
            sender.addEventListener("click", function (e) {
                e.preventDefault();
                sender.classList.toggle("open");
            });
        });
    };

    /**
     * Add an object to an array to a specific index.
     * @function add
     * @memberOf module:munchkin~ws.
     * @param {Array}    arr   - Array of items
     * @param {number} index - Index (0-baded) to add a new object.
     */
    ws.add = function (arr, index) {
        arr.splice(index, 0, {});
    };

    /**
     * Move Down an item in an array.
     * @function add
     * @memberOf module:munchkin~ws.
     * @param {Array}    arr   - Array of items
     * @param {number} index - Index (0-baded) to add a new object.
     */
    ws.moveDown = function (arr, index) {
        if (index !== arr.length) {
            arr.splice(index + 1, 0, arr.splice(index, 1)[0]);
        }
    };

    /**
     * Move Up an item in an array.
     * @function add
     * @memberOf module:munchkin~ws.
     * @param {Array}    arr   - Array of items
     * @param {number} index - Index (0-baded) to add a new object.
     */
    ws.moveUp = function (arr, index) {
        if (index !== 0) {
            arr.splice(index - 1, 0, arr.splice(index, 1)[0]);
        }
    };

    /**
     * Remove an item from an array from a specific index.
     * @function add
     * @memberOf module:munchkin~ws.
     * @param {Array}    arr   - Array of items
     * @param {number} index - Index (0-baded) to add a new object.
     */
    ws.remove = function (arr, index) {
        arr.splice(index, 1);
    };

    /**
     * Init behaviors on each pages.
     * @function init
     * @memberOf module:munchkin~ws.
     */
    ws.init = function () {
        var header = new Header(),
            slot = new Slot();

        ws.smartTargetInjection();
        ws.dropDownToggle();

        header.openMenu();
        header.showSubitem();
        (new CallToAction()).sameHeightByPadding();
        (new Simple()).toggleContent();
        slot.toggleContent();
        slot.hashBindWithTab();
        (new Product()).carousel();
        (new Hero()).carousel();
    };
}());

/* Non Regression Test */
if (window.testCase) {
    ws.init();
}

export default ws;