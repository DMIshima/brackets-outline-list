/* global module */

module.exports = function (config) {
    "use strict";

    config.set({
        basePath: "",
        singleRun: false,
        frameworks: ["jasmine", "requirejs"],
        browsers: ["Chrome", "PhantomJS"],
        reporters: ["progress", "coverage"],
        preprocessors: {
            "src/**/*.js": ["coverage"]
        },
        coverageReporter: {
            type: "lcovonly",
            dir: "coverage",
            subdir: "lcov",
            file: "lcov.info"
        },
        files: [
            {
                pattern: "thirdparty/*.js",
                included: false
            }, {
                pattern: "node_modules/requirejs-text/text.js",
                included: false
            }, {
                pattern: "src/**/*.js",
                included: false
            }, {
                pattern: "test/*Spec.js",
                included: false
            }, {
                pattern: "test/example/**/*",
                included: false
            },
            "test/test-main.js"
        ]
    });
};
