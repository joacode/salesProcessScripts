let arr = [];

for (let i = 0; i < document.querySelectorAll(".sc-row").length; i++){

	if (document.querySelectorAll(".sc-title")[i].innerText.indexOf('Paquete de') !== -1){

		i = i + 1;

	}

	string = document.querySelectorAll(".sc-row")[i].innerText;

	// labels & prices & quant

	if (string.indexOf('Ver mensajes') !== -1) {

		labels = string.slice(string.indexOf('ensajes\n') + 8, string.indexOf('\n', string.indexOf('ensajes\n') + 8));

		prices = string.slice(string.indexOf('\n$') + 1, string.indexOf('\n', string.indexOf('\n$') + 1))

		pricesIndex = string.indexOf(prices);

		quant = string.slice(string.indexOf('\n', pricesIndex) + 1, string.indexOf('u.') + 2);

	} else /*if (string.indexOf('Iniciar conversación'))*/ {

    labels = string.slice(string.indexOf('onversación\n') + 12, string.indexOf('\n', string.indexOf('onversación\n') + 12));

    prices = string.slice(string.indexOf('\n$') + 1, string.indexOf('\n', string.indexOf('\n$') + 1))

    pricesIndex = string.indexOf(prices);

    quant = string.slice(string.indexOf('\n', pricesIndex) + 1, string.indexOf('u.') + 2);

  }

	arr[i] = `${labels} ${quant} ${prices}`

}

console.log(arr);


console.log(`there are ${document.querySelectorAll(".sc-product").length} sales left`);
