const form = document.querySelector('form');

// const inputFields = [...form.querySelectorAll('[required]')];
const inputFields = form.elements;
inputFields.forEach((input) => input.addEventListener('input', addListener(input)));

const dialog = document.getElementById('form-confirmation');

function addListener(input) {
	return (e) => handleValidation(input);
}

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
	let errorList = inputFields.filter((input) => !input.validity.valid);
	let checkThese = form.elements.filter((input) => input.id !== null).filter((input) => input.value === null);
	if (errorList.length > 0) {
		errorList.forEach((input) => handleValidation(input));
	} else if (checkThese.length > 0) {
		checkThese.forEach((input) => handleValidation(input));
	} else {
		handleFormSubmit(e);
	}
});

//handle netlify form submission
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

// "Close" button closes the dialog
const closeButton = document.querySelector('dialog button');
closeButton.addEventListener('click', () => {
	dialog.close();
});
