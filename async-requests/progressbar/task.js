const progress = document.getElementById('progress');
const fileInput = document.getElementById('file');
let name = document.querySelector('.input__wrapper.input__wrapper-desc');
const form = document.getElementById('form');

fileInput.addEventListener('change', function() {
	const file = this.files[0];
	name.textContent = file.name;
});

form.addEventListener('submit', function(event) {
	event.preventDefault();
	const formSent = new FormData(form);
	const xhr = new XMLHttpRequest();

	xhr.upload.addEventListener('progress', function(event) {
		const percentLoaded = event.loaded / event.total;
		progress.value = percentLoaded;
  });

	xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');
	xhr.send(formSent);
});