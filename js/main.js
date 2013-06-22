!function() {
	/* ========================================
		Namespace: Global Variables
	======================================== */
	var G = {};
	!function(gv) {
		// place global variables here
	}(G);

	/**
	 *	Append query on click
	 **/
	!function() {
		var playground = document.getElementById('playground'),
			locThere = document.querySelector('a.there'),
			query = '?location=there';

		if(locThere) {
			// stop default function and fire new href with query params
			locThere.addEventListener('click', function(e) {
				e.preventDefault();
				var qHref = this.attributes[0].value + query;
				document.location.href = qHref;
			}, false);
			console.log(locThere);
		}
	}();
	/**
	 *	Get a specific paramter from URL
	 **/
	var getParam = function(name) {
		// set regex to look for ?x=y or &x=y, case insensitive
		// tests the current URL against the regex
		var regx = new RegExp('[?&]' + name + '=([^?|^&]*)', 'i'),
			result = regx.exec(window.location.href);		
		// returns only the param
		if(result) {
			console.log(result[1]);
			return result[1];
		}
	}
	/**
	 *	Lets try some fun stuff base on some params
	 **/
	if(getParam('location')) {
		var locText = document.querySelector('b[data="location"]');
		locText.innerText = 'there';
		console.log(locText);
	}
}();