var requirejs = require("requirejs");
requirejs.config({
    baseUrl: './src/',
    nodeRequire: require,
    paths: {
        "bootstrap":            "bower_modules/components-bootstrap/js/bootstrap.min",
        "crossroads":           "bower_modules/crossroads/dist/crossroads.min",
        "hasher":               "bower_modules/hasher/dist/js/hasher.min",
        "jquery":               "bower_modules/jquery/dist/jquery ",
        "knockout":             "bower_modules/knockout/dist/knockout",
        "knockout-projections": "bower_modules/knockout-projections/dist/knockout-projections",
        "signals":              "bower_modules/js-signals/dist/signals.min",
        "text":                 "bower_modules/requirejs-text/text"
    }
});
var expect = require('chai').expect;

describe('Trick', function() {
	var Trick, Card, Contract;
    before(function(done) {
        requirejs(['models/trick', 'models/card', 'models/contract'], function(trick, card, contract) {
            Trick = trick;
			Card = card;
			Contract = contract;
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
		var contract = new Contract();
		contract.denomination = 'NT';
		var trick = new Trick();
		expect(trick.winner()).to.be.undefined;
		trick.play.push({ seat: 'N', card: Card.S2 } );
		trick.play.push({ seat: 'E', card: Card.SK } );
		trick.play.push({ seat: 'S', card: Card.HA } );
		trick.play.push({ seat: 'W', card: Card.S3 } );
		expect(trick.winner(contract)).to.exist;
	});
	
	it('winner has the highest rank of the 1st suit played', function() {
		var contract = new Contract();
		contract.denomination = 'NT';
		var trick = new Trick();
		expect(trick.winner()).to.be.undefined;

		trick.play.push({ seat: 'N', card: Card.S3 } );
		trick.play.push({ seat: 'E', card: Card.SK } );
		trick.play.push({ seat: 'S', card: Card.HA } );
		trick.play.push({ seat: 'W', card: Card.S2 } );
		expect(trick.winner(contract)).to.equal('E');
	});

	it('winner has the highest trump', function() {
		var contract = new Contract();
		contract.denomination = 'H';
		var trick = new Trick();
		expect(trick.winner()).to.be.undefined;
		trick.play.push({ seat: 'N', card: Card.SA } );
		trick.play.push({ seat: 'E', card: Card.HQ } );
		trick.play.push({ seat: 'S', card: Card.HK } );
		trick.play.push({ seat: 'W', card: Card.S2 } );
		expect(trick.winner(contract)).to.equal('S');
	});

});

