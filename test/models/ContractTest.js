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
var should = require('chai').should();

describe('Contract', function() {
	var Contract;
    before(function(done) {
        requirejs(['models/contract'], function(module) {
            Contract = module;
            done();
        });
    });
		
	it('should default to passed in', function() {
		var contract = new Contract();
		contract.toString().should.equal('-');
		contract.level.should.equal(0);
	});
	
	it('should have the level, denomination, risk and declaror', function() {
		var contract = new Contract();
		contract.level = 3;
		contract.denomination = 'NT';
		contract.declaror = 'S';
		contract.risk = 'X';
		contract.toString().should.equal('3NTX by S');
	});

});

