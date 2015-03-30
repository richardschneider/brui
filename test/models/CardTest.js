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

describe('Card', function() {
	var Card;
    before(function(done) {
        requirejs(['models/card'], function(module) {
            Card = module;
            done();
        });
    });
		
	it('has rank and suit', function() {
		var card = new Card('2S');
		expect(card.rank).to.equal('2');
		expect(card.suit).to.equal('S');
	});

	it('rank can be 10 or T', function() {
		var card = new Card('10S');
		expect(card.rank).to.equal('10');
		expect(card.suit).to.equal('S');

		card = new Card('TS');
		expect(card.rank).to.equal('10');
		expect(card.suit).to.equal('S');
	});
	
	it('is ordered by suit', function() {
		var club = new Card('AC');
		var diamond = new Card('AD');
		var heart = new Card('AH');
		var spade = new Card('AS');
		expect(club.order).below(diamond.order);
		expect(diamond.order).below(heart.order);
		expect(heart.order).below(spade.order);
	});
	
	it('is ordered by rank within suit', function() {
		var S2 = new Card('2S');
		var S3 = new Card('3S');
		var S4 = new Card('4S');
		var S5 = new Card('5S');
		var S6 = new Card('6S');
		var S7 = new Card('7S');
		var S8 = new Card('8S');
		var S9 = new Card('9S');
		var ST = new Card('TS');
		var SJ = new Card('JS');
		var SQ = new Card('QS');
		var SK = new Card('KS');
		var SA = new Card('AS');
		expect(S2.order).below(S3.order);
		expect(S3.order).below(S4.order);
		expect(S4.order).below(S5.order);
		expect(S5.order).below(S6.order);
		expect(S6.order).below(S7.order);
		expect(S7.order).below(S8.order);
		expect(S8.order).below(S9.order);
		expect(S9.order).below(ST.order);
		expect(ST.order).below(SJ.order);
		expect(SJ.order).below(SQ.order);
		expect(SQ.order).below(SK.order);
		expect(SK.order).below(SA.order);
	});
	
	it('2C is lowest', function() {
		var C2 = new Card('2C');
		expect(C2.order).to.equal(1);
	});

	it('AS is highest', function() {
		var AS = new Card('AS');
		expect(AS.order).to.equal(52);
	});

	});

