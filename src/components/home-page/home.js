define(["knockout", "bid", "trick", "card", "text!./home.html"], function(ko, bid, Trick, card, homeTemplate) {

  function HomeViewModel(route) {
    this.message = ko.observable('Welcome to brui!');
    this.dealer = ko.observable('S');
    this.auction = ko.observableArray([bid['1C'], bid['-']])
	this.trick = new Trick();
	this.play = ko.observableArray(this.trick.play);
	this.play.push({seat: 'S', card: card.S2});
	this.play.push({seat: 'W', card: card.SK});
	this.play.push({seat: 'N', card: card.SA});
	this.play.push({seat: 'E', card: card.C4});
  }

  HomeViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: HomeViewModel, template: homeTemplate };

});
