let products = document.querySelectorAll(".product");
products.forEach(product => {
	let productAdds = product.querySelectorAll(".product__add");
	let productImage = product.querySelector(".product__image");
	let productQuantityValue = product.querySelector(".product__quantity-value");
	let productQuantityDec = product.querySelector(".product__quantity-control_dec");
	let productQuantityInc = product.querySelector(".product__quantity-control_inc");
	let value = Number(productQuantityValue.textContent);

	productQuantityDec.addEventListener("click", () => {
		if (value > 1) {
			value -= 1;
			productQuantityValue.textContent = value;
			console.log(value);
		};
	});
	productQuantityInc.addEventListener("click", () => {
		value += 1;
		productQuantityValue.textContent = value;
		console.log(value);
	});

	productAdds.forEach(btn => {
		btn.addEventListener("click", () => {
			let cartProducts = document.querySelector(".cart__products");
			let children = cartProducts.children;
			let cartproduct = [...children].find(element => element.dataset.id === product.dataset.id);
			if (cartproduct) {
				let cartProductCount = cartproduct.querySelector(".cart__product-count");
				cartProductCount.textContent = Number(cartProductCount.textContent) + value;
				console.log(cartProductCount.textContent);
			} else {
				cartproduct = document.createElement("div");
				cartproduct.setAttribute("class", "cart__product");
				cartproduct.dataset.id = product.dataset.id;
				cartproduct.innerHTML = `<img class="cart__product-image" src=${productImage.src}>
<div class="cart__product-count">${value}</div>`;
				let image = cartproduct.querySelector(".cart__product-image");
				cartProducts.appendChild(cartproduct);
				console.log(value)
			};
		});
	});
});