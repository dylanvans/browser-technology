(function () {
	var searchInputEl = document.getElementbyClassName('.search-input');
	var contactEl = document.getElementsbyClassName('.contact-item');
	var mainContactEl = document.getElementsbyClassName('.contact-main-info');

	for (var i = 0; i < mainContactEl.length; i++) {
		mainContactEl[i].addEventListener('click', toggleAccordion);
	}

	searchInputEl.addEventListener('input', searchContacts);

	function searchContacts() {
		var filterValue = searchInputEl.value.toUpperCase();

	    for (i = 0; i < contactEl.length; i++) {
	        var name = contactEl[i].getElementbyClassName('.contact-name');
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