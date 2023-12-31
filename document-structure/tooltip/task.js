let hastooltips = document.querySelectorAll(".has-tooltip");
hastooltips.forEach(hastooltip => {
	let title = hastooltip.getAttribute("title");
	let tooltip = document.createElement("div");
	tooltip.setAttribute("class", "tooltip");
	tooltip.textContent = title;
	hastooltip.addEventListener("click", event => {
		tooltip.classList.toggle("tooltip_active");
		let positiontop = event.target.getBoundingClientRect().top; 
		let positionleft = event.target.getBoundingClientRect().left;
		let height = event.target.getBoundingClientRect().height;

		tooltip.style.top = `${positiontop + height}px`;
		tooltip.style.left = `${positionleft}px`;
		hastooltip.appendChild(tooltip);
		event.preventDefault();
	});
});