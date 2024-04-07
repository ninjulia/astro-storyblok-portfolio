const form = document.querySelector('form');
const dialog = document.querySelector('dialog');

// set up error message for recaptcha
// const recaptcha = document.querySelector('.g-recaptcha').parentElement;
// let recaptchaError = document.createElement('span');
// recaptchaError.className = 'error mt-s mb-0 d-flex flex-row align-items-center';
// recaptchaError.setAttribute('aria-hidden', true);
// recaptcha.appendChild(recaptchaError);

// function handleRecaptcha() {
// 	let errorDisplay = recaptcha.querySelector('.error');
// 	if (grecaptcha.getResponse() === '') {
// 		errorDisplay.setAttribute('aria-hidden', false);
// 		errorDisplay.textContent = 'Please complete the reCAPTCHA.';
// 	} else if (grecaptcha.getResponse() !== '') {
// 		errorDisplay.setAttribute('aria-hidden', true);
// 		errorDisplay.textContent = '';
// 	}
// }

function handleValidation(input) {
	let errorDisplay;
	//if input is radio or checkbox, get the element with class 'error' from fieldset parent
	if (input.type === 'radio' || input.type === 'checkbox') {
		errorDisplay = input.parentElement.parentElement.querySelector('.error');
	} else {
		errorDisplay = input.parentElement.querySelector('.error');
	}

	if (input.checkValidity()) {
		//ok to submit
		errorDisplay.textContent = '';
		errorDisplay.setAttribute('aria-hidden', true);
		errorDisplay.removeAttribute('aria-live');
		input.setAttribute('aria-invalid', false);
	} else {
		errorDisplay.setAttribute('aria-hidden', false);
		errorDisplay.textContent = input.validationMessage;
		errorDisplay.setAttribute('aria-live', 'polite');
		input.setAttribute('aria-invalid', true);
	}
}

//Handle Netlify form submission
//https://docs.netlify.com/forms/setup/#submit-html-forms-with-ajax
function handleFormSubmit(event) {
	event.preventDefault();

	const myForm = event.target;
	const formData = new FormData(myForm);

	fetch('/', {
		method: 'POST',
		headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
		body: new URLSearchParams(formData).toString(),
	})
		.then(() => (form.action.search(/#/) > 0 ? dialog.showModal() : (window.location.href = form.action)))
		.then(() => {
			form.reset();
			form.querySelectorAll('[aria-invalid]').forEach((input) => input.removeAttribute('aria-invalid'));
		})
		.catch((error) => alert(error));
}

//* Only run if Form is on the page
if (form) {
	//Event listener for Input Validation
	const inputFields = [...form.querySelectorAll('[required]')];
	inputFields.forEach((input) =>
		input.addEventListener('input', (e) => {
			handleValidation(input);
		})
	);

	//Event Listener on Form
	form.addEventListener('submit', (e) => {
		e.preventDefault();
		let errorList = inputFields.filter((input) => !input.validity.valid);
		// if (errorList.length > 0 || grecaptcha.getResponse() === '') {
		if (errorList.length > 0) {
			errorList.forEach((input) => handleValidation(input));
			//handleRecaptcha();
		} else {
			handleFormSubmit(e);
		}
	});

	// "Close" button closes the dialog
	document.querySelector('dialog button').addEventListener('click', () => {
		dialog.close();
	});

	// Escape key closes the dialog
	document.addEventListener('keydown', (e) => {
		if (e.key === 'Escape') {
			dialog.close();
		}
	});
}
