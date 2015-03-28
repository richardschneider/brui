define(['knockout', 'text!./bidding-box.html'], function(ko, templateMarkup) {

    function BiddingBox(params) {
        var self = this;
        self.bids = params.bids;
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
        for (var i = 0; i < 7; ++i) {
            var level = i + 1;
            this.rows[i] = [
                { bid: level + 'C', css: 'black-suit', display: level + '\u2663' },
                { bid: level + 'D', css: 'red-suit', display: level + '\u2666' },
                { bid: level + 'H', css: 'red-suit', display: level + '\u2665' },
                { bid: level + 'S', css: 'black-suit', display: level + '\u2660' },
                { bid: level + 'NT', css: 'no-trump', display: level + 'NT' }
            ];
        }
    }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  BiddingBox.prototype.dispose = function() { };
  
  return { viewModel: BiddingBox, template: templateMarkup };

});
