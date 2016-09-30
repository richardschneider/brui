define(['knockout', 'text!./card-play.html'], function(ko, templateMarkup) {

    function CardPlay(params) {
        var self = this;
        var game = params.game;
        self.contract = ko.observable(game().contract);
        self.tricks = ko.observableArray(game().tricks);

        self.seats = ko.computed(function () {
            var seat = self.contract().declaror.next,
                seats = [];
            for (var i = 0; i < 4; ++i) {
                seats.push(seat);
                seat = seat.next;
            }
            return seats;
        });

   }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  CardPlay.prototype.dispose = function() { };

  return { viewModel: CardPlay, template: templateMarkup };

});
