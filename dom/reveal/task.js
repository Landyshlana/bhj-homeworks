const reveal = Array.from(document.querySelectorAll('.reveal'));
window.addEventListener('scroll', function() {
	for (let i = 0; i < reveal.length; i++) {
		let poz = reveal[i].getBoundingClientRect();
		if (poz.top > 0 && poz.bottom < window.innerHeight) {
			reveal[i].classList.add('reveal_active');
		}
	}
});