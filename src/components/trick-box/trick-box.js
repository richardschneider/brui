define(['knockout', 'bridge', 'cards', 'cards-ko', 'text!./trick-box.html'], function(ko, bridge, cards, cardsKO, templateMarkup) {

  function TrickBox(params) {
     var self = this,
        seat = bridge.seat;
     self.cardWidth = (params.width || 45) + 'px';
     self.one = Math.floor((params.width || 45) / 3) + 'px';
     self.two = Math.floor((params.width || 45) * 2 / 3) + 'px';
     self.three = self.cardWidth;
     self.four = Math.floor((params.width || 45) * 4 / 3) + 'px';

     function findCardFor(play, seat) {
        for (var i = 0; i < play.length; ++i) {
            if (play[i].seat === seat) {
                return play[i].card;
            }
        }
        return undefined;
    }

     self.north = ko.computed(function() {
        return findCardFor(params.play(), seat.north);
     });
     self.south = ko.computed(function() {
        return findCardFor(params.play(), seat.south);
     });
     self.east = ko.computed(function() {
        return findCardFor(params.play(), seat.east);
     });
     self.west = ko.computed(function() {
        return findCardFor(params.play(), seat.west);
     });

    function findOrder(play, seat) {
        for (var i = 0; i < play.length; ++i) {
            if (play[i].seat === seat) {
                return i;
            }
        }
        return -1;
    }

    self.northOrder = ko.computed(function() {
        return findOrder(params.play(), seat.north);
     });
     self.southOrder = ko.computed(function() {
        return findOrder(params.play(), seat.south);
     });
     self.eastOrder = ko.computed(function() {
        return findOrder(params.play(), seat.east);
     });
     self.westOrder = ko.computed(function() {
        return findOrder(params.play(), seat.west);
     });
     }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  TrickBox.prototype.dispose = function() { };

  return { viewModel: TrickBox, template: templateMarkup };

});
