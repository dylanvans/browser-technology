(function () {
	var searchInputEl = document.getElementsByClassName('search-input')[0];
	var contactEl = document.getElementsByClassName('contact-item');
	var mainContactEl = document.getElementsByClassName('contact-main-info');


	if (document.addEventListener) {
	    for (var i = 0; i < mainContactEl.length; i++) {
			mainContactEl[i].addEventListener('click', toggleAccordion);
		}

		searchInputEl.addEventListener('input', searchContacts);
	}
	else {
		for (var i = 0; i < mainContactEl.length; i++) {
			mainContactEl[i].attachEvent('onclick', toggleAccordion);
		}

		searchInputEl.attachEvent('onchange', searchContacts);
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
            contactEl[i].className = 'contact-item  acc-inactive';
        }

        if (this.parentNode.className == 'contact-item  acc-inactive') {
            this.parentNode.className = 'contact-item  acc-active';
        }

	}
})();