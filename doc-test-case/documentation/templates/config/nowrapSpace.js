/**
 * @overview Parse Allow you to use nowrap space.
 * @module plugins/nowrapSpace
 * @author Bruno Lesieur <bruno.lesieur@gmail.com>
 */
'use strict';

exports.handlers = {
    beforeParse: function (e) {
        e.source = e.source.replace(/ /g, "___");
    }
};