define(["knockout", "bid", "text!./home.html"], function(ko, bid, homeTemplate) {

  function HomeViewModel(route) {
    this.message = ko.observable('Welcome to brui!');
    this.dealer = ko.observable('S');
    this.auction = ko.observableArray([bid['1C'], bid['-']])
  }

  HomeViewModel.prototype.doSomething = function() {
    this.message('You invoked doSomething() on the viewmodel.');
  };

  return { viewModel: HomeViewModel, template: homeTemplate };

});
