define(['knockout', 'text!./bid.html'], function(ko, templateMarkup) {

  function Bid(params) {
    this.bid = ko.observable(params.bid);
    this.level = ko.observable();
    this.levelCss = ko.observable();
    this.denomination = ko.observable();
    this.denominationCss = ko.observable();
    
    if (params.bid == 'P' || params.bid == '/' || params.bid == '-' || params.bid == 'Pass') {
        this.level('-');
        this.levelCss('pass');
    } else if (params.bid == 'X') {
        this.level(params.bid);
        this.levelCss('double');
    } else if (params.bid == 'XX') {
        this.level(params.bid);
        this.levelCss('redouble');
    } else if (params.bid.indexOf('NT') > 0) {
        this.level(params.bid.charAt(0));
        this.denomination('NT');
        this.denominationCss('no-trump');
    } else {
        var symbol = { S: '\u2660', H: '\u2665', D: '\u2666', C: '\u2663' },
            d = params.bid.charAt(1);
        this.level(params.bid.charAt(0));
        this.denomination(symbol[d] || d);
        this.denominationCss(d == 'S' || d == 'C' ? 'black-suit' : 'red-suit');
    }
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Bid.prototype.dispose = function() { };
  
  return { viewModel: Bid, template: templateMarkup };

});
