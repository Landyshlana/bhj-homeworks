const rotators = Array.from(document.querySelectorAll('.rotator__case'));
let counter = 0;
let elem = document.querySelector('.rotator__case');
setInterval(
	function change() {
		if (rotators[counter].classList.contains('rotator__case_active')) {
			rotators[counter].classList.remove('rotator__case_active');
		}
		counter++;
		if (counter >= rotators.length) {
			counter = 0;
		}
		rotators[counter].classList.add('rotator__case_active');
	}, 600);