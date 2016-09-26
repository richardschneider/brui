define(["knockout", "bridge", "cards", "text!./home.html"], function(ko, bridge, cards, homeTemplate) {

  function HomeViewModel(route) {
    var seat = bridge.seat;
    var card = bridge.card;
    this.message = ko.observable('Welcome to brui!');
    this.dealer = ko.observable(seat.south);
    this.auction = ko.observableArray([bridge.bid['1C'], bridge.bid['-']]);
    this.trick = new bridge.Trick();
    this.play = ko.observableArray(this.trick.play);
    this.play.push({seat: seat.south, card: card.S2});
    this.play.push({seat: seat.west, card: card.SK});
    this.play.push({seat: seat.north, card: card.SA});
    this.play.push({seat: seat.east, card: card.C4});
  }

  HomeViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: HomeViewModel, template: homeTemplate };

});
