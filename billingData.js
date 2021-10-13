let i, b = 0;

let a = 1;

let arr = [];

for (let i = 0; i < document.querySelectorAll(".sc-price__label").length; i++){
 
	if (document.querySelectorAll(".sc-title-subtitle-action__label")[a].innerHTML === "Paquete de varios productos"){
	
		a = a + 2;

	}

	quant = document.querySelectorAll(".sc-quantity")[b].innerText;

	quant = quant.slice(0, quant.length - 3);

	console.log(quant);

	labels = document.querySelectorAll(".sc-title-subtitle-action__label")[a].innerHTML; // product names (odd starting in a = 1)

	prices = document.querySelectorAll(".sc-price__label")[b].innerHTML; // price (all starting in b = 0)

	arr[i] = `${labels} ${quant}x ${prices}`

	b++;

	a = a + 2;

}

console.log(arr);


console.log(`there are ${document.querySelectorAll(".sc-product").length} sales left`);