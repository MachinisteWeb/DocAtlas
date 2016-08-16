/**
 * @overview Parse @layout tag as if it is a @namespace tag.
 * @module plugins/layoutAliasNamespace
 * @author Bruno Lesieur <bruno.lesieur@gmail.com>
 */
'use strict';

exports.handlers = {
    beforeParse: function (e) {
        e.source = e.source.replace(/@layout/g, "@namespace");
    }
};