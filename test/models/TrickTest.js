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

describe('Trick', function() {
	var Trick;
    before(function(done) {
        requirejs(['models/trick'], function(module) {
            Trick = module;
            done();
        });
    });
		
	it('leader is 1st to play a card', function() {
		var trick = new Trick();
		expect(trick.leader()).to.be.undefined;
		trick.play.push({ seat: 'W'} );
		trick.leader().should.equal('W');
		trick.play.push({ seat: 'E'} );
		expect(trick.leader()).to.equal('W');
	});

	it('winner is declared after 4 cards are played', function() {
		var trick = new Trick();
		expect(trick.winner()).to.be.undefined;
		trick.play.push({ seat: 'N'} );
		trick.play.push({ seat: 'E'} );
		trick.play.push({ seat: 'S'} );
		trick.play.push({ seat: 'W'} );
		expect(trick.winner()).to.be.not.undefined;
	});
	
	it('winner has the highest rank of the 1st suit played', function() {
		var trick = new Trick();
		expect(trick.winner()).to.be.undefined;
		trick.play.push({ seat: 'N', card: '2S' } );
		trick.play.push({ seat: 'E', card: 'KS' } );
		trick.play.push({ seat: 'S', card: 'AH' } );
		trick.play.push({ seat: 'W', card: '3S' } );
		expect(trick.winner()).to.equal('E');
	});

});

