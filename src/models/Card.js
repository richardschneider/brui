define(function () {
	var rankOffset = {
		'2': 2,
		'3': 3,
		'4': 4,
		'5': 5,
		'6': 6,
		'7': 7,
		'8': 8,
		'9': 9,
		'10': 10,
		'J': 11,
		'Q': 12,
		'K': 13,
		'A': 14
	};
	var suitMultiplier = {
		'C': 1 * 13,
		'D': 2 * 13,
		'H': 3 * 13,
		'S': 4 * 13
	};
	function Card(s) {
		if (s.indexOf('T') === 0) {
			s = '10' + s.charAt(1);
		}
		this.rank = s.substr(0, s.length - 1);
		this.suit = s.substr(s.length - 1);
		this.order = rankOffset[this.rank] * suitMultiplier[this.suit];
	}

	return Card;
});
