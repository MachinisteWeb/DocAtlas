/**
 * @overview Parse @partof tag as if it is a @extends tag.
 * @module plugins/pantofAliasExtends
 * @author Bruno Lesieur <bruno.lesieur@gmail.com>
 */
'use strict';

exports.handlers = {
    beforeParse: function (e) {
        e.source = e.source.replace(/@partof/g, "@extends");
    }
};