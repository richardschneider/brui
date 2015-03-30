define(function () {
	var rankOffset = {
		'2': 1,
		'3': 2,
		'4': 3,
		'5': 4,
		'6': 5,
		'7': 6,
		'8': 7,
		'9': 8,
		'10': 9,
		'J': 10,
		'Q': 11,
		'K': 12,
		'A': 13
	};
	var suitOffset = {
		'C': 0 * 13,
		'D': 1 * 13,
		'H': 2 * 13,
		'S': 3 * 13
	};
	function Card(s) {
		if (s.indexOf('T') === 0) {
			s = '10' + s.charAt(1);
		}
		this.rank = s.substr(0, s.length - 1);
		this.suit = s.substr(s.length - 1);
		this.order = rankOffset[this.rank] + suitOffset[this.suit];
	}

	return Card;
});
