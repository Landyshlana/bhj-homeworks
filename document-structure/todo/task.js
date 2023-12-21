const taskslist = document.querySelector(".tasks__list");
const form = document.querySelector("form");
const button = document.querySelector("button");

button.addEventListener('click', event => {
	event.preventDefault()
	const input = document.querySelector(".tasks__input");
	let taskname = input.value;

	const divtask = document.createElement("div");
	divtask.setAttribute("class", "task");

	const divtasktitle = document.createElement("div");
	divtasktitle.setAttribute("class", "task__title");
	divtasktitle.textContent = taskname;
	divtask.appendChild(divtasktitle);
	const adivtask = document.createElement("a");
	adivtask.setAttribute("href", "#");
	adivtask.setAttribute("class", "task__remove");
	adivtask.innerHTML = '&times';
	divtask.appendChild(adivtask);
	taskslist.appendChild(divtask);
	form.reset();

	const removes = document.querySelectorAll(".task__remove");
	removes.forEach(remove =>
		remove.addEventListener('click', event => {
			event.preventDefault();
			console.log(event.target.closest(".task"));
			event.target.closest(".task").remove();
		}))
});