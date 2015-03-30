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

describe('Bid', function() {
	var Bid;
    before(function(done) {
        requirejs(['models/bid'], function(module) {
            Bid = module;
            done();
        });
    });
		
	it('has level and denonimation', function() {
		var bid = Bid['1NT'];
		expect(bid.level).to.equal(1);
		expect(bid.denomination).to.equal('NT');

		bid = Bid['7S'];
		expect(bid.level).to.equal(7);
		expect(bid.denomination).to.equal('S');
	});

	it('can be pass', function() {
		var bid = Bid['-'];
		expect(bid.isPass).to.be.true;
	});
	
	it('can be double', function() {
		var bid = Bid['X'];
		expect(bid.isDouble).to.be.true;
	});

	it('can be redouble', function() {
		var bid = Bid['XX'];
		expect(bid.isRedouble).to.be.true;
	});

	it('has suit color', function() {
		expect(Bid['1C'].isRed).to.be.false;
		expect(Bid['1D'].isRed).to.be.true;
		expect(Bid['1H'].isRed).to.be.true;
		expect(Bid['1S'].isRed).to.be.false;
	});
	
	it('is ordered by denomination within level', function() {
		var club = Bid['1C'];
		var diamond = Bid['1D'];
		var heart = Bid['1H'];
		var spade = Bid['1S'];
		var notrump = Bid['1NT'];
		expect(club.order).below(diamond.order);
		expect(diamond.order).below(heart.order);
		expect(heart.order).below(spade.order);
		expect(spade.order).below(notrump.order);
	});

	it('is ordered by level', function() {
		expect(Bid['1C'].order).below(Bid['2C'].order);
		expect(Bid['2C'].order).below(Bid['3C'].order);
		expect(Bid['3C'].order).below(Bid['4C'].order);
		expect(Bid['4C'].order).below(Bid['5C'].order);
		expect(Bid['5C'].order).below(Bid['6C'].order);
		expect(Bid['6C'].order).below(Bid['7C'].order);
	});

	it('1C is lowest', function() {
		expect(Bid['1C'].order).to.equal(1);
	});

	it('7NT is highest', function() {
		expect(Bid['7NT'].order).to.equal(35);
	});

});

