define(['knockout', 'text!./bid.html'], function(ko, templateMarkup) {

  function Bid(params) {
    this.bid = ko.observable(params.bid);
    this.level = ko.observable(params.bid.level);
    this.levelCss = ko.observable();
    this.denomination = ko.observable(params.bid.denomination);
    this.denominationCss = ko.observable();
    
    if (params.bid.isPass) {
        this.level('-');
        this.levelCss('pass');
    } else if (params.bid.isDouble) {
        this.level('X');
        this.levelCss('double');
    } else if (params.bid.isRedouble) {
        this.level('XX');
        this.levelCss('redouble');
    } else if (params.bid.denomination === 'NT') {
        this.denominationCss('no-trump');
    } else {
        var symbol = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' };
        this.denomination(symbol[params.bid.denomination]);
        this.denominationCss(params.bid.isRed ? 'red-suit' : 'black-suit');
    }
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Bid.prototype.dispose = function() { };
  
  return { viewModel: Bid, template: templateMarkup };

});
