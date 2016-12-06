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

    publics.changeVariation = function (params, mainCallback) {
        var NA = this,
            variation = params.variation;

        variation = website.components.componentAtlas.includeComponents.call(NA, variation, "components", "mainTag", "componentName");

        mainCallback(variation);
    };

}(website));

exports.changeVariation = website.changeVariation;
exports.setConfigurations = website.setConfigurations;