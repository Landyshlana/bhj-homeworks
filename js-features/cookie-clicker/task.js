
let countclicker = document.getElementById("clicker__counter");

function countClicker() {
	countclicker.textContent++;
};

const image = document.getElementById("cookie");

function changeSize() {
	if (image.width == 200) {
		image.width = 200 / 2;
	} else {
		image.width = 200;
	}
}
cookie.addEventListener("click", changeSize);
cookie.addEventListener("click", countClicker);