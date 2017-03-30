(function() {
	function init(){
		var searchInputEl = document.getElementsByClassName('search-input')[0];
		var contactEl = document.getElementsByClassName('contact-item');
		var mainContactEl = document.getElementsByClassName('contact-main-info');


		addEventContacts();
		nearbyContacts();

		// source: https://stackoverflow.com/questions/2790001/fixing-javascript-array-functions-in-internet-explorer-indexof-foreach-etc
		if (!('indexOf' in Array.prototype)) {
		    Array.prototype.indexOf= function(find, i /*opt*/) {
		        if (i===undefined) i= 0;
		        if (i<0) i+= this.length;
		        if (i<0) i= 0;
		        for (var n= this.length; i<n; i++)
		            if (i in this && this[i]===find)
		                return i;
		        return -1;
		    };
		}

		function addEventContacts() {
			if (document.addEventListener) {
			    for (var i = 0; i < mainContactEl.length; i++) {
					mainContactEl[i].addEventListener('click', toggleAccordion);
				}
				searchInputEl.addEventListener('input', searchContacts);
			} else {
				for (var i = 0; i < mainContactEl.length; i++) {
					mainContactEl[i].attachEvent('onclick', toggleAccordion);
				}
				searchInputEl.attachEvent('onchange', searchContacts);
			}
		}

		function searchContacts() {
			var filterValue = searchInputEl.value.toUpperCase();

		    for (i = 0; i < contactEl.length; i++) {
		        var name = contactEl[i].getElementsByClassName('contact-name')[0];
		        if (name.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
		            contactEl[i].style.display = '';
		        } else {
		            contactEl[i].style.display = 'none';
		        }
		    }
		}

		function toggleAccordion() {
	        for (i = 0; i < contactEl.length; i++) {
	        	if(!(contactEl[i] == this.parentNode)) {
	        		contactEl[i].className = 'contact-item  acc-inactive';    
	        	}
	        }

	        if (this.parentNode.className == 'contact-item  acc-inactive') {
	            this.parentNode.className = 'contact-item  acc-active';
	        } else {
	        	this.parentNode.className = 'contact-item  acc-inactive';
	        }
		}

		function nearbyContacts() {
			var contactItemEl = document.querySelectorAll('.contact-item');
			var contactLocationArray = [];
			var contactLocations = getLocationContacts();

			//source: https://stackoverflow.com/questions/21279559/geolocation-closest-locationlat-long-from-my-position
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(userLocation);
			} else {
				nearestLocation(52.373801, 4.890935); // Default: Amsterdam
			}

			function userLocation(position) {
				nearestLocation(position.coords.latitude, position.coords.longitude);
			}

			// Convert Degress to Radians
			function deg2Rad(deg) {
			  return deg * Math.PI / 180;
			}

			function pythagorasEquirectangular(lat1, lon1, lat2, lon2) {
				lat1 = deg2Rad(lat1);
				lat2 = deg2Rad(lat2);
				lon1 = deg2Rad(lon1);
				lon2 = deg2Rad(lon2);
				var R = 6371; // km
				var x = (lon2 - lon1) * Math.cos((lat1 + lat2) / 2);
				var y = (lat2 - lat1);
				var d = Math.sqrt(x * x + y * y) * R;
				return d;
			}

			function getLocationContacts() {
				for (var i = 0; i < contactItemEl.length; i++) {
					var name = contactItemEl[i].getAttribute('data-name');
					var lat = contactItemEl[i].querySelector('.contact-location').getAttribute('data-lat');
					var lon = contactItemEl[i].querySelector('.contact-location').getAttribute('data-lon');
					contactLocationArray.push([name, lat, lon])
				}

				return contactLocationArray;
			}

			function nearestLocation(latitude, longitude) {
				var mindif = 10;
				var closest = [];

				for (i = 0; i < contactLocations.length && closest.length < 5; ++i) {
					var dif = pythagorasEquirectangular(latitude, longitude, contactLocations[i][1], contactLocations[i][2]);
					if (dif < mindif) {
						closest.push(contactLocations[i][0]);
					}
				}

				addNearbyContacts(closest);
			}

			function addNearbyContacts(closest) {
				var nearbyContainer = document.querySelector('.contact-nearby');
				nearbyContainer.style.display = 'block';

				for (var i = 0; i < contactItemEl.length; i++) {
					var name = contactItemEl[i].getAttribute('data-name');
					if(closest.indexOf(name) > -1) {
						nearbyContainer.insertAdjacentHTML('afterend', contactItemEl[i].outerHTML);
						addEventContacts();
					}
				}
			}
		}
	}

	init();

}());