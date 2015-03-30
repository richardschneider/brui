define(['knockout', 'bid', 'text!./bidding-box.html'], function(ko, bid, templateMarkup) {

    function BiddingBox(params) {
        var self = this;
        self.bids = params.bids;
        self.enabled = params.enabled || ko.observable(true);
        self.select = function(data, event) {
            self.bids.push(data.bid);
        };
        self.pass = function() {
            self.bids.push(bid['-']);
        }
        self.double = function() {
            self.bids.push(bid['X']);
        }
        self.redouble = function() {
            self.bids.push(bid['XX']);
        }
        
        self.rows = [];
        for (var i = 0; i < 7; ++i) {
            var level = i + 1;
            this.rows[i] = [
                { bid: bid[level + 'C'], css: 'black-suit', display: level + '\u2663' },
                { bid: bid[level + 'D'], css: 'red-suit', display: level + '\u2666' },
                { bid: bid[level + 'H'], css: 'red-suit', display: level + '\u2665' },
                { bid: bid[level + 'S'], css: 'black-suit', display: level + '\u2660' },
                { bid: bid[level + 'NT'], css: 'no-trump', display: level + 'NT' }
            ];
        }
        
        self.bidable = function(bid) {
            return ko.computed(function() {
                var lastBid;
                for (var i = self.bids().length - 1; 0 <= i; --i) {
                    lastBid = self.bids()[i];
                    if (lastBid.isPass || lastBid.isDouble || lastBid.isRedouble)
                        continue;
					return lastBid.order < bid.order;
                }
				return true;
        })};
        
        
    }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  BiddingBox.prototype.dispose = function() { };
  
  return { viewModel: BiddingBox, template: templateMarkup };

});
