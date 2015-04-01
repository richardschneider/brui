define(['knockout', 'text!./trick-box.html'], function(ko, templateMarkup) {

  function TrickBox(params) {
     var self = this;
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
		};
		return undefined;
	}
	
	 self.north = ko.computed(function() {
		return findCardFor(params.play(), 'N');
	 });
	 self.south = ko.computed(function() {
		return findCardFor(params.play(), 'S');
	 });
	 self.east = ko.computed(function() {
		return findCardFor(params.play(), 'E');
	 });
	 self.west = ko.computed(function() {
		return findCardFor(params.play(), 'W');
	 });

	function findOrder(play, seat) {
		for (var i = 0; i < play.length; ++i) {
			if (play[i].seat === seat) {
				return i;
			}
		};
		return -1;
	}

	self.northOrder = ko.computed(function() {
		return findOrder(params.play(), 'N');
	 });
	 self.southOrder = ko.computed(function() {
		return findOrder(params.play(), 'S');
	 });
	 self.eastOrder = ko.computed(function() {
		return findOrder(params.play(), 'E');
	 });
	 self.westOrder = ko.computed(function() {
		return findOrder(params.play(), 'W');
	 });
	 }

  // This runs when the component is torn down. Put here any logic necessary to clean up,
  // for example cancelling setTimeouts or disposing Knockout subscriptions/computeds.
  TrickBox.prototype.dispose = function() { };
  
  return { viewModel: TrickBox, template: templateMarkup };

});
