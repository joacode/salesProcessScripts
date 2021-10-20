
let i = 0;

let div = document.querySelectorAll(".sc-row");

let texts = div[i].outerText.indexOf('nc hecha');

let users = document.querySelectorAll('.sc-title-subtitle-action__sublabel');

for (item of div) {
	txt1 = div[i].outerText.indexOf('nc hecha');
  txt2 = div[i].outerText.indexOf('no facturada');

    if (txt1 === -1 && txt2 === -1) {
        userName = users[i].innerText;
        string = div[i].outerText;

          if (string.indexOf('Paquete de varios productos') === -1) {
            st1 = string.slice(string.indexOf('$') + 2);
            price = st1.slice(0, st1.indexOf('\n'));
            qty = st1.slice(st1.indexOf('\n') + 1, st1.indexOf('u.') -1);
            console.log(`${userName} ${qty}x $${price}`);

          } else {
            console.log(`- check manually ${userName}`);
          }

    }

  i++;

}