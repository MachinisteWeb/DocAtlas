/*jslint browser: true, esversion: 6 */
var ws = window.ws || {};
ws.ui = ws.ui || {};

/**
 * Manage `.simple` HTML components.
 * @class Simple
 * @version 1.0.0
 * @author Bruno Lesieur
 * @memberOf module:catchow~ws.ui.
 */
ws.ui.Simple = function () {
    var publics = this;

    /**
     * The original name of component.
     * @name className
     * @type {string}
     * @memberOf module:catchow~ws.ui.Simple#
     * @default "simple"
     */
    publics.className = "simple";

    /**
     * Show the i-th (base-0) `.simple.as-toggles` content and Hide others when you click on the i-th `.simple-tabs .btn`
     * with an `.is-active` toggle class on the senders and.
     * with an `.is-displayed` toggle class on the targets.
     * @function toggleContent
     * @param {string} [sendersSelector] - Select alternative Sender HTML Components to apply the behavior.
     * @param {string} [targetsSelector] - Select alternative Target HTML Components to apply the behavior.
     * @param {string} [eventListener]   - Select alternative Event to perform the behavior.
     * @memberOf module:catchow~ws.ui.Simple#
     */
    publics.toggleContent = function (sendersSelector, targetsSelector, eventListener) {
        var senders,
            targets;

        sendersSelector = sendersSelector || "." + publics.className + "-tabs .btn";
        targetsSelector = targetsSelector || "." + publics.className + ".as-toggles ." + publics.className + "--content";
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
                    }
                });
            });
        });
    };
};

export default ws.ui.Simple;