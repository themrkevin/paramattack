!function () {
	/**
	 *	get a specific paramter from URL
	 **/
	var getParam = function(param) {
		// set regex to look for ?query=value or &query=value, case insensitive
		// tests the current URL against the regex
		var regx = new RegExp('[?&]' + param + '=([^?|^&]*)', 'i'),
			querify = regx.exec(window.location.href);		
		// returns only the value of called parameter
		console.log(querify[1]);
		return querify[1];
	};
}();