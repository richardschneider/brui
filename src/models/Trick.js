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
		// TODO
	};
	
	return Trick;
});
