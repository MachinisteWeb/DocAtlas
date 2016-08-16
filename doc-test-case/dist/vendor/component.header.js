/*jslint browser: true, esversion: 6 */
var ws = window.ws || {};
ws.ui = ws.ui || {};

/**
 * Manage `.header` HTML components.
 * @class Header
 * @version 1.0.0
 * @author Bruno Lesieur
 * @memberOf module:catchow~ws.ui.
 */
ws.ui.Header = function () {
    var publics = this;

    /**
     * The original name of component.
     * @name className
     * @type {string}
     * @memberOf module:catchow~ws.ui.Header#
     * @default "header"
     */
    publics.className = "header";

    /**
     * Open/Close the Navigation Menu when you `click` on `.header--navigation`
     * with a `.is-opened` toggle class (e. i. for mobile).
     * @function openMenu
     * @param {string} [selector]      - Select alternative HTML Components to apply the behavior.
     * @param {string} [eventListener] - Select alternative Event to perform the behavior.
     * @memberOf module:catchow~ws.ui.Header#
     */
    publics.openMenu = function (selector, eventListener) {
        var elements;

        selector = selector || "." +  publics.className + "--navigation";
        eventListener = eventListener || "click";
        elements = document.querySelectorAll(selector);

        [].forEach.call(elements, function (element) {
            element.addEventListener(eventListener, function (e) {
                if (!e.target.classList.contains("share-caret-down")) {
                    element.classList.toggle("is-opened");
                }
            });
        });
    };

    /**
     * Display/Hide the Sup Navigation Menu when you `click` on `.share-caret-down`
     * with a `.is-displayed` toggle class (e. i. for mobile).
     * @function showSubitem
     * @param {string} [selector]      - Select alternative HTML Components to apply the behavior.
     * @param {string} [eventListener] - Select alternative Event to perform the behavior.
     * @memberOf module:catchow~ws.ui.Header#
     */
    publics.showSubitem = function (selector, eventListener) {
        var elements;

        selector = selector || "." +  publics.className + "--navigation--item";
        eventListener = eventListener || "click";
        elements = document.querySelectorAll(selector);

        [].forEach.call(elements, function (element) {
            var current = element.querySelector(".share-caret-down");
            if (current) {
                element.querySelector(".share-caret-down").addEventListener(eventListener, function () {
                    element.classList.toggle("is-displayed");
                });
            }
        });
    };
};

export default ws.ui.Header;