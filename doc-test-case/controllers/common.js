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

    publics.changeVariations = function (next, locals) {
        var NA = this;

        locals = website.components.componentAtlas.includeComponents.call(NA, locals, "components", "mainTag", "componentName");

        next();
    };

}(website));

exports.changeVariations = website.changeVariations;
exports.setConfigurations = website.setConfigurations;