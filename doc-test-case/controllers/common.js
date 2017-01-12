/*jshint node: true */
var website = {};

website.components = {};

(function (publics) {

    website.components.componentAtlas = require('./modules/component-atlas');

	publics.setConfigurations = function (callback) {
        var NA = this,
            path = NA.modules.path,
        	url = NA.modules.url;

        NA.webconfig.statics = NA.webconfig.statics || {};
        NA.webconfig.statics["/assets/systemjs"] = url.format(path.join("/", NA.serverModulesRelativePath, "systemjs"));
        NA.webconfig.statics["/assets/traceur"] = url.format(path.join("/", NA.serverModulesRelativePath, "traceur"));
        NA.webconfig.statics["/assets/jquery"] = url.format(path.join("/", NA.serverModulesRelativePath, "jquery"));

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