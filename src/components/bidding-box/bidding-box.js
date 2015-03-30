define(['knockout', 'text!./bidding-box.html'], function(ko, templateMarkup) {

    function BiddingBox(params) {
        var self = this;
        self.bids = params.bids;
        self.enabled = params.enabled || ko.observable(true);
        self.select = function(data, event) {
            self.bids.push(data.bid);
        };
        self.pass = function() {
            self.bids.push('-');
        }
        self.double = function() {
            self.bids.push('X');
        }
        self.redouble = function() {
            self.bids.push('XX');
        }
        
        self.rows = [];
        self.allBids = [];
        for (var i = 0; i < 7; ++i) {
            var level = i + 1;
            this.rows[i] = [
                { bid: level + 'C', css: 'black-suit', display: level + '\u2663' },
                { bid: level + 'D', css: 'red-suit', display: level + '\u2666' },
                { bid: level + 'H', css: 'red-suit', display: level + '\u2665' },
                { bid: level + 'S', css: 'black-suit', display: level + '\u2660' },
                { bid: level + 'NT', css: 'no-trump', display: level + 'NT' }
            ];
            self.allBids.push(this.rows[i][0].bid);            
            self.allBids.push(this.rows[i][1].bid);            
            self.allBids.push(this.rows[i][2].bid);            
            self.allBids.push(this.rows[i][3].bid);            
            self.allBids.push(this.rows[i][4].bid);            
        }
        
        self.bidable = function(bid) {
            return ko.computed(function() {
                var lastBid = '';
                for (var i = self.bids().length - 1; 0 <= i; --i) {
                    lastBid = self.bids()[i];
                    if (lastBid == '-' || lastBid == 'P' || lastBid == '/' || lastBid == 'Pass' || lastBid == 'X' || lastBid == 'XX')
                        continue;
                    break;
                }
                return self.allBids.indexOf(lastBid) < self.allBids.indexOf(bid);
        })};
        
        
    }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  BiddingBox.prototype.dispose = function() { };
  
  return { viewModel: BiddingBox, template: templateMarkup };

});
