const fontsizes = Array.from(document.querySelectorAll(".font-size"));
const book = document.querySelector(".book__content");
fontsizes.forEach(fontsize => {
	fontsize.addEventListener("click", function(event) {
		let size;
		fontsizes.forEach(fontsize => {
			fontsize.classList.remove("font-size_active");
		});
		event.target.classList.add("font-size_active");
		size = event.target.getAttribute("data-size");
		if (size === "big") {
			book.classList.add("book_fs-big")
		} else if (size === "small") {
			book.classList.add("book_fs-small")
		} else {
			book.classList.remove("book_fs-big") || book.classList.remove("book_fs-small")
		}
		event.preventDefault();
	})
});