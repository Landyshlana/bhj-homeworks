window.addEventListener('load', () => {
	const signin = document.getElementById('signin');
	const form = document.getElementById('signin__form');
	const welcome = document.querySelector('.welcome');
	const id = document.getElementById('user_id');
	//signin.classList.add('signin_active');


	form.addEventListener('submit', function(event) {
		event.preventDefault();
		const formSent = new FormData(form);
		const xhr = new XMLHttpRequest();
		xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/auth');
		xhr.responseType = 'json';
		xhr.send(formSent);

		xhr.onload = function() {
			let response = xhr.response;
			if (!response.success) {
				alert("Неверный логин/пароль");
				//welcome.classList.remove('welcome_active');  
			} else {
				localStorage.setItem('id', response.user_id);
				signin.classList.remove('signin_active');
				welcome.classList.add('welcome_active');
				id.textContent = localStorage.getItem('id');
			}
		};
	})
	const getItemId = localStorage.getItem('id');
	if (getItemId) {
		signin.classList.remove('signin_active');
		welcome.classList.add('welcome_active');
		id.textContent = localStorage.getItem('id');
	}
});