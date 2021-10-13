let i = 0;


let div = document.querySelectorAll(".sc-title-subtitle-action__sublabel")[i];



while (document.querySelectorAll(".sc-title-subtitle-action__sublabel")[i].innerHTML.indexOf("Envío rápido a domicilio") === -1){


	i = i + 1;


	div = document.querySelectorAll(".sc-title-subtitle-action__sublabel")[i];


}

const string = div.innerHTML;

// Search for name

const nameStart = string.indexOf("Recibe: ");

let nameFinal = string.indexOf(" - Tel.");

if (nameFinal === -1) {

	nameFinal = string.length;

}

const fullName = string.slice(nameStart + 8, nameFinal);

// Search for direction

const directionStart = string.indexOf("<br>")

const directionFinal = string.indexOf("<br>", directionStart + 1)

const fullDirection = string.slice(directionStart + 4, directionFinal)

// Search for zip code

const zcStart = string.indexOf("CP ");


const zcFinal = string.indexOf("<br>", directionFinal + 2);

const zc = string.slice(zcStart + 2, zcFinal);

// Search for money && bonification

let priceLabel = document.querySelectorAll(".sc-account-rows__row__label")[1].innerHTML;

if (priceLabel === "Bonificación por envío") {

   	price = parseInt(document.querySelectorAll(".sc-account-rows__row__price")[1].innerText.slice(2, 5));

	finalPrice = price * 2;

} else if (priceLabel === "Envío") {

   	price = document.querySelectorAll(".sc-account-rows__row__price")[1].innerText;

	finalPrice = parseInt(price.slice(2, price.indexOf(",99"))) + 1;

} else {

	finalPrice = 0;

}

// Search for delivery price

if (finalPrice === 380) {

	moto = 350;

} else if (finalPrice === 600 || finalPrice === 480){

	moto = 480;

} else if (string.indexOf("Capital") == -1) {

	moto = 500;

} else {

	moto = 300;

}

// String for excel

if (priceLabel === "Bonificación por envío") {

	`${fullName};${fullDirection};${zc};${finalPrice};${moto};${finalPrice/2}`;

} else { 

	`${fullName};${fullDirection};${zc};${finalPrice};${moto};${finalPrice}`;

}