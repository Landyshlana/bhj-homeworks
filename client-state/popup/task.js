const modal = document.getElementById('subscribe-modal')
const modalClose = document.querySelector('.modal__close');

window.addEventListener('load', () => {
	
	modalClose.addEventListener('click', () => {
		modal.classList.remove('modal_active');
		document.cookie = 'modal = close';
		const cookieTrue = document.cookie.split("; ").some(row => row.startsWith("modal="));
		console.log(cookieTrue);
	})
	if (!cookieTrue) {
		modal.classList.add('modal_active');
	}
});