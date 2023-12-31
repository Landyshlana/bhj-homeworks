const taskslist = document.querySelector(".tasks__list");
const form = document.querySelector("form");
const button = document.querySelector("button");

button.addEventListener('click', event => {
	event.preventDefault()
	const input = document.querySelector(".tasks__input");
	let taskname = input.value;

	if (taskname.trim()) {
		taskslist.insertAdjacentHTML('afterbegin', `
<div class="task">
  <div class="task__title">
    ${taskname}
  </div>
  <a href="#" class="task__remove">&times;</a>
</div>`);
		form.reset();
	}
	const remove = taskslist.querySelector(".task__remove");
	remove.addEventListener('click', event => {
		event.preventDefault();
		event.target.closest(".task").remove();
	});
});