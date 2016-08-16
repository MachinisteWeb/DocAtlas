/**
 * @overview Parse @pattern tag as if it is a @class tag.
 * @module plugins/layoutAliasNamespace
 * @author Bruno Lesieur <bruno.lesieur@gmail.com>
 */
'use strict';

exports.handlers = {
    beforeParse: function (e) {
        e.source = e.source.replace(/@pattern/g, "@class");
    }
};