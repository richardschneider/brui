define(function () {
	function Trick() {
		this.play = [];
	}
	
	Trick.prototype.leader = function() {
		return this.play.length < 1 ? undefined : this.play[0].seat;
	};
	
	Trick.prototype.winner = function(contract) {
		if (this.play.length < 4) {
			return undefined;
		}

		var bestSeat, bestOrder = -10000, order;
		for (i = 0; i < 4; ++i)
		{
			var play = this.play[i];
			var order = play.card.order;
			if (play.card.suit === contract.denomination) {
				order *= 1000;
			}
			if (order > bestOrder) {
				bestOrder = order;
				bestSeat = play.seat;
			}
		}

		return bestSeat;
	};
	
	return Trick;
});
