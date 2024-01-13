let pollTitle = document.querySelector(".poll__title");
let pollAnswer = document.getElementById("poll__answers");
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');
xhr.send();
xhr.addEventListener('readystatechange', function() {
	if (xhr.readyState === xhr.DONE) {
		let poll = JSON.parse(xhr.responseText);
		let title = poll.data.title;
		let answers = poll.data.answers;

		pollTitle.innerHTML = `${title}`;
		answers.forEach((answer) => {
			pollAnswer.innerHTML += `<button class="poll__answer">
              ${answer}
            </button>`;
		});
		let button = document.querySelector(".poll__answer").closest("div");
		button.addEventListener("click", () => {
			alert("Спасибо, ваш голос засчитан!");
		});
	};
});