/**
 * @overview Parse @component tag as if it is a @interface tag.
 * @module plugins/layoutAliasNamespace
 * @author Bruno Lesieur <bruno.lesieur@gmail.com>
 */
'use strict';

exports.handlers = {
    beforeParse: function (e) {
        e.source = e.source.replace(/@component/g, "@interface");
    }
};