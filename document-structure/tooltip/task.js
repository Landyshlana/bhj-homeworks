const hastooltip = document.querySelector(".has-tooltip");
let title = hastooltip.getAttribute("title");
let tooltip = document.createElement("div");
tooltip.setAttribute("class", "tooltip");
tooltip.textContent = title;

hastooltip.insertAdjacentElement("afterend", tooltip);

hastooltip.addEventListener("click", (event) => {
	tooltip.classList.toggle("tooltip_active");
	event.preventDefault()
});