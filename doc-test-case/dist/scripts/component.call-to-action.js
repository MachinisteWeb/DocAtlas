/*jslint browser: true, esversion: 6 */
import $ from "jquery";
import "throttle-debounce";

var ws = window.ws || {};
ws.ui = ws.ui || {};

/**
 * Manage `.call-to-action` HTML components.
 * @class CallToAction
 * @version 1.0.0
 * @author Bruno Lesieur
 * @requires {@link external:jQuery}
 * @requires {@link external:Cowboy}
 * @memberOf module:munchkin~ws.ui.
 */
ws.ui.CallToAction = function () {
    var publics = this;

    /**
     * The original name of component.
     * @name className
     * @type {string}
     * @memberOf module:munchkin~ws.ui.CallToAction#
     * @default "call-to-action"
     */
    publics.className = "call-to-action";

    /**
     * Apply a padding with between button p like and item above.
     * @function sameHeightByPadding
     * @param {string} [selector]      - Select alternative HTML Components to apply the behavior.
     * @param {string} [subcompoment]  - Select alternative Subcomponents to perform calcul.
     * @memberOf module:munchkin~ws.ui.CallToAction#
     */
    publics.sameHeightByPadding = function (selector, subcompomentSelector) {
        var elements,
            maxHeight = 0;

        selector = selector || "." +  publics.className;
        subcompomentSelector = subcompomentSelector || "." +  publics.className + "--content";
        elements = document.querySelectorAll(selector);

        function applyPadding() {
            [].forEach.call(elements, function (element) {
                var items = element.querySelectorAll(subcompomentSelector);

                // Find the higher height and remove padding.
                [].forEach.call(items, function (item) {
                    // Hide image and custom fonts.
                    var plast = [].slice.call(item.querySelectorAll("p"), -1)[0];

                    plast.style.paddingTop = '';

                    if (item.clientHeight > maxHeight) {
                        maxHeight = item.clientHeight;
                    }
                });

                // Apply the correct padding only for tablet and desktop.
                if (window.window.matchMedia("(min-width: 768px)").matches) {
                    [].forEach.call(items, function (item) {
                        var padding = maxHeight - item.clientHeight,
                            plast = [].slice.call(item.querySelectorAll("p"), -1)[0];

                        plast.style.paddingTop = padding + "px";
                    });
                }
            });
        }

        applyPadding();
        window.addEventListener("resize", $.debounce(250, applyPadding));
        window.addEventListener("scroll", $.debounce(250, applyPadding));
    };
};

export default ws.ui.CallToAction;