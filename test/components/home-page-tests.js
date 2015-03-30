var requirejs = require("requirejs");
requirejs.config({
    baseUrl: './src/',
    nodeRequire: require,
    paths: {
        "bootstrap":            "bower_modules/components-bootstrap/js/bootstrap.min",
        "crossroads":           "bower_modules/crossroads/dist/crossroads.min",
        "hasher":               "bower_modules/hasher/dist/js/hasher.min",
        "jquery":               "bower_modules/jquery/dist/jquery",
        "knockout":             "bower_modules/knockout/dist/knockout",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals":              "bower_modules/js-signals/dist/signals.min",
        "text":                 "bower_modules/requirejs-text/text"
    }
});
var expect = require('chai').expect;
var should = require('chai').should();
var assert = require('assert');

describe('Home page tests', function() {
    // module loading
    // Load modules with requirejs before tests
    var homePage;
	var homePageViewModel;
    before(function(done) {
        requirejs(['components/home-page/home', 'chai'], function(module) {
            homePage = module;
			homePageViewModel = homePage.viewModel;
            done();
        });
    });
	
	describe('view model', function() {
		it('should supply a friendly message which changes when acted upon', function() {
			var instance = new homePageViewModel();
			var msg = instance.message(); 
			msg.should.contain('Welcome to ');

			// See the message change
			instance.doSomething();
			instance.message().should.contain('You invoked doSomething()');
		});
	});

});

