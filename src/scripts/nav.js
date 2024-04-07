//* Toggle Nav on Small Screens
const mainNav = document.getElementById('main-site-nav-links');
const navToggle = document.getElementById('main-menu-toggle');

navToggle.addEventListener('click', () => {
	const visibility = mainNav.getAttribute('data-visible');
	if (visibility === 'false') {
		//	e.preventDefault();
		mainNav.setAttribute('data-visible', 'true');
		mainNav.focus();
		navToggle.setAttribute('aria-expanded', 'true');
	} else {
		mainNav.setAttribute('data-visible', 'false');
		//mainNav.focus();
		navToggle.setAttribute('aria-expanded', 'false');
	}
});

//* Toggle Nav Dropdown on all Screens
function handleDropdown(e) {
	const expanded = e.target.getAttribute('aria-expanded');
	if (expanded === 'false') {
		e.target.setAttribute('aria-expanded', 'true');
		e.target.nextElementSibling.setAttribute('aria-hidden', 'false');
	} else {
		e.target.setAttribute('aria-expanded', 'false');
		e.target.nextElementSibling.setAttribute('aria-hidden', 'true');
	}
}

const dropToggle = Array.from(document.querySelectorAll('[data-toggle="dropdown"]'));
dropToggle.map((toggle) => {
	toggle.addEventListener('click', handleDropdown);
});

//* Add .active class to Current Dropdown Link
let currentUrl = document.URL;
let dropdownLinks = [...document.getElementsByClassName('dropdown-item')];
let active = dropdownLinks.filter((link) => link.href === currentUrl);
if (active[0]) {
	active[0].parentElement.classList.add('active');
}

//allow space for scroll-margin
const headerHeight = document.getElementById('site-header').offsetHeight;
const root = document.querySelector(':root');
root.style.setProperty('--header-height', `${headerHeight}px`);
