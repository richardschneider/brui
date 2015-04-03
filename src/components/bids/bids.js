define(['knockout', 'text!./bids.html'], function(ko, templateMarkup) {

    function Bids(params) {
        var self = this;
        self.dealer = params.dealer;
        self.bids = params.bids || ko.observableArray();

        self.seats = ko.computed(function () {
            var seat = self.dealer(),
                seats = [];
            for (var i = 0; i < 4; ++i) {
                seats.push(seat);
                seat = seat.next;
            }
            return seats;
        });

        self.rows = ko.computed(function() {
            var rows = [];
            for (var i = 0; i < self.bids().length; ++i) {
                var n = Math.floor(i / 4);
                rows[n] = rows[n] || [];
                rows[n].push(self.bids()[i]);
            }
            return rows;
        });
  }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  Bids.prototype.dispose = function() { };

  return { viewModel: Bids, template: templateMarkup };

});
