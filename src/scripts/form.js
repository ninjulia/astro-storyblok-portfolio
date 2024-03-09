const form = document.querySelector('form');

// set up error message for recaptcha
const recaptcha = document.querySelector('#rptch');
let recaptchaError = document.createElement('span');
recaptchaError.className = 'error mt-s mb-0 d-flex flex-row align-items-center';
recaptchaError.setAttribute('aria-hidden', true);
recaptcha.appendChild(recaptchaError);
recaptcha.addEventListener('input', handleRecaptcha);

function handleRecaptcha() {
	let errorDisplay = recaptcha.querySelector('.error');
	if (recaptcha.getAttribute('aria-checked') === false) {
		errorDisplay.setAttribute('aria-hidden', false);
		errorDisplay.textContent = 'Please complete the reCAPTCHA.';
	} else {
		errorDisplay.setAttribute('aria-hidden', true);
		errorDisplay.textContent = '';
	}
}

// set up input validation
const inputFields = [...form.querySelectorAll('[required]')];
inputFields.forEach((input) =>
	input.addEventListener('input', (e) => {
		handleValidation(input);
	})
);

// function addListener(input) {
// 	return (e) => handleValidation(input);
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
		input.setAttribute('aria-invalid', false);
	} else {
		errorDisplay.setAttribute('aria-hidden', false);
		input.setAttribute('aria-invalid', true);
		errorDisplay.textContent = input.validationMessage;
	}
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	let recaptchaStatus = document.getElementById('recaptcha-anchor').getAttribute('aria-checked');
	console.log(recaptchaStatus);

	let errorList = inputFields.filter((input) => !input.validity.valid);
	if (errorList.length > 0 || recaptchaStatus !== true) {
		errorList.forEach((input) => handleValidation(input));
		handleRecaptcha();
	} else {
		handleFormSubmit(e);
	}
});

//handle netlify form submission
//https://docs.netlify.com/forms/setup/#submit-html-forms-with-ajax
const dialog = document.getElementById('form-confirmation');
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

// "Close" button closes the dialog
const closeButton = document.querySelector('dialog button');
closeButton.addEventListener('click', () => {
	dialog.close();
});
