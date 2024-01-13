const loader = document.getElementById('loader')
let item = document.querySelector(".item");
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();
xhr.addEventListener('readystatechange', function() {
	if (xhr.readyState === xhr.DONE) {
		loader.classList.remove('loader_active');
		let exchangeRate = JSON.parse(xhr.responseText);
		Object.keys(exchangeRate.response.Valute).forEach(function(key) {
			item.innerHTML += `<div class="item__code">
       ${exchangeRate.response.Valute[key].CharCode}
                </div>
                <div class="item__value">
    ${exchangeRate.response.Valute[key].Value}
                </div>
                <div class="item__currency">
                    руб.
                </div>`;
		});
	};
});