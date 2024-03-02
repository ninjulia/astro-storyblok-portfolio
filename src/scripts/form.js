const form = document.getElementById('contactForm');

const inputFields = [...form.querySelectorAll('[required]')];
inputFields.forEach((input) => input.addEventListener('input', addListener(input)));

function addListener(input) {
	return (e) => handleValidation(input);
}

function handleValidation(input) {
	if (input.validity.valid) {
		//ok to submit
		input.nextElementSibling.textContent = '';
		input.nextElementSibling.setAttribute('aria-hidden', true);
		input.setAttribute('aria-invalid', false);
	} else {
		//something's wrong
		input.nextElementSibling.setAttribute('aria-hidden', false);
		input.setAttribute('aria-invalid', true);
		showError(input);
	}
}

function showError(field) {
	if (field.validity.valueMissing) {
		field.nextElementSibling.textContent = `Please enter your ${field.name}`;
	} else if (field.validity.typeMismatch) {
		field.nextElementSibling.textContent = `Entered value should be ${field.name}`;
	} else if (field.validity.tooShort) {
		field.nextElementSibling.textContent = `${field.name} should be at least ${field.minLength} characters.`;
	}
}

//TODO: fix this
form.addEventListener('submit', (e) => {
	let errorList = inputFields.filter((input) => !input.validity.valid);
	if (errorList.length > 0) {
		errorList.forEach((input) => handleValidation(input));
		e.preventDefault();
	} else {
		//submit form.action
		dialog.showModal();
		form.reset();
	}
});

// "Close" button closes the dialog
const closeButton = document.querySelector('dialog button');
closeButton.addEventListener('click', () => {
	dialog.close();
});
