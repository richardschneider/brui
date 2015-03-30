define(function () {
	function Contract() {
		this.risk = '';  // '', 'X' or 'XX'
		this.level = 0;  // 1 - 7, 0 is 'passed in'
		this.denomination = undefined; // 'S', 'H', 'D', 'C' or 'NT'
		this.declaror = undefined;  // a seat
	}

	Contract.prototype.toString = function() {
         if (this.level == 0)
            return "-";

         return this.level 
			+ this.denomination
			+ this.risk
			+ ' by ' + this.declaror;
	};
	
	return Contract;
});
