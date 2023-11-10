const startTime = document.getElementById("timer");
const time = setInterval(() => {
	if (startTime.textContent == 0) {
		alert("«Вы победили в конкурсе!»");
		clearInterval(time);
	}
	startTime.textContent--
}, 500);