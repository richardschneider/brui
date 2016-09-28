define(['knockout', 'bridge', 'cards', 'cards-ko', 'text!./dummy-hand.html'], function(ko, bridge, cards, cardsKO, templateMarkup) {

    function DummyHand(params) {
        var self = this;
        var dummy = params.contract().dummy();
        self.hand = params.board().hands[dummy];

        self.suits = ko.pureComputed(function() {
            var suits = ['S', 'H', 'D', 'C'];
            var strain = params.contract().denomination;
            if (strain != 'NT') {
                suits.splice(suits.indexOf(strain), 1);
                suits.unshift(strain);
            }
            return suits;
        });
    }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  DummyHand.prototype.dispose = function() { };

  return { viewModel: DummyHand, template: templateMarkup };

});
