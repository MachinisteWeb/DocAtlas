/*jslint browser: true, esversion: 6 */
var ws = window.ws || {};
ws.ui = ws.ui || {};

/**
 * Manage `.slot` HTML components.
 * @class Slot
 * @version 1.0.0
 * @author Bruno Lesieur
 * @memberOf module:munchkin~ws.ui.
 */
ws.ui.Slot = function () {
    var publics = this,

        /**
         * All privates function could be attached here.
         * @name privates
         * @private
         * @type {string}
         * @memberOf module:munchkin~ws.ui.Slot~
         */
        privates = {};

    /**
     * The original name of component.
     * @name className
     * @type {string}
     * @memberOf module:munchkin~ws.ui.Slot#
     * @default "slot"
     */
    publics.className = "slot";

    /**
     * Hash a value like `Usage component-based with $ !` to `usage-component-based-with--`
     * @function hashed
     * @param {string} value - The value that will be hashed.
     * @memberOf module:munchkin~ws.ui.Slot~privates
     */
    privates.hashed = function (value) {
        return value.toLowerCase().replace(/[^-a-zA-Z0-9_ ]/g, "").replace(/[-_ ]/g, "-");
    };

    /**
     * Show the i-th (base-0) `.slot.as-toggles` content and Hide others when you click on the i-th `.slot-tabs .btn`
     * with an `.is-active` toggle class on the senders and.
     * with an `.is-displayed` toggle class on the targets.
     * @function toggleContent
     * @param {string} [sendersSelector] - Select alternative Sender HTML Components to apply the behavior.
     * @param {string} [targetsSelector] - Select alternative Target HTML Components to apply the behavior.
     * @param {string} [eventListener]   - Select alternative Event to perform the behavior.
     * @memberOf module:munchkin~ws.ui.Slot#
     */
    publics.toggleContent = function (sendersSelector, targetsSelector, eventListener) {
        var senders,
            targets;

        sendersSelector = sendersSelector || "." + publics.className + " ." + publics.className + "-tabs .btn";
        targetsSelector = targetsSelector || "." + publics.className + ".as-toggles > ." + publics.className + "--inner > ." + publics.className + "--items > ." + publics.className + "--item";
        eventListener = eventListener || "click";
        senders = document.querySelectorAll(sendersSelector);
        targets = document.querySelectorAll(targetsSelector);

        [].forEach.call(senders, function (sender, i) {
            sender.addEventListener(eventListener, function (e) {
                e.preventDefault();
                [].forEach.call(senders, function (sender) {
                    sender.classList.remove("is-active");
                });
                [].forEach.call(targets, function (target) {
                    target.classList.remove("is-displayed");
                });
                [].forEach.call(targets, function (target, j) {
                    if (i === j) {
                        sender.classList.add("is-active");
                        target.classList.add("is-displayed");
                        location.hash = privates.hashed(sender.textContent);
                    }
                });
            });
        });
    };

    /**
     * Show the tabs with the matched hashValue from hash part of curret url.
     * @function hashBindWithTab
     * @param {string} [selector] - Select alternative Sender HTML Components to apply the behavior.
     * @param {string} [eventTrigger] - Select alternative Target HTML Components to apply the behavior.
     * @memberOf module:munchkin~ws.ui.Slot#
     */
    publics.hashBindWithTab = function (selector, eventTrigger) {
        selector = selector || "." + publics.className + "-tabs .btn";
        eventTrigger = eventTrigger || "click";

        function setHash() {
            var hash = (location.hash || "#").slice(1),
                tabs = document.querySelectorAll(selector),
                event = new Event(eventTrigger);

            [].forEach.call(tabs, function (tab) {
                var hashedValue = privates.hashed(tab.textContent);
                if (hashedValue === hash) {
                    tab.dispatchEvent(event);
                }
            });
        }
        setHash();
        window.addEventListener("hashchange", function () {
            setHash();
        });
    };
};

export default ws.ui.Slot;