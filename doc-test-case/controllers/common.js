/*jshint node: true */
var website = {};

website.components = {};

(function (publics) {

    website.components.componentAtlas = require('./modules/component-atlas');

	publics.setConfigurations = function (callback) {
        var NA = this,
        	path = NA.modules.path,
        	express = NA.modules.express,
        	staticOptions = { maxAge: 86400000 * 30 };

        NA.httpServer.use(NA.webconfig.urlRelativeSubPath + '/assets/', express.static(path.join(NA.serverPath, NA.serverModulesRelativePath), staticOptions));

        callback();
    };

    publics.changeVariations = function (params, next) {
        var NA = this,
            variations = params.variations;

        variations = website.components.componentAtlas.includeComponents.call(NA, variations, "components", "mainTag", "componentName");

        next(variations);
    };

}(website));

exports.changeVariations = website.changeVariations;
exports.setConfigurations = website.setConfigurations;