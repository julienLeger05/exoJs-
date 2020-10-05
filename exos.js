/* exercice 10 */
function refresh() {
  var t = 1000; // rafraîchissement en millisecondes
  setTimeout("showDate()", t);
}

function showDate() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }
  var time = h + ":" + m + ":" + s;
  document.getElementById("horloge").innerHTML = time;
  refresh();
}
/* exercice 11 */
const p = "Toto_TOTO_toto_tOtO_totO";

const regex = /_/gi;
console.log(p.replace(regex, "/"));
/* exercice 12  */
let name = prompt("nom");

/* exercice 13 */
const txt = "^sdfqpdfqdf^gq^fdqk^dfqpsdf";
let regexp1 = new RegExp(
  /^[12][0-9]{2}[0-1][0-9](2[AB]|[0-9]{2})[0-9]{3}[0-9]{3}[0-9]{2}/
);
txt.match(regexp1);

/* exercice 14 */
let T = [45, 48, 89, 78];
let V = [110, 128, 129, 178];

let nombre = parseInt(prompt("nombre"));
let nombre2 = parseInt(prompt("deuxieme nombre"));

T.push(nombre);
T.unshift(nombre2);

T.forEach((element) => {
  document.write(element + "-");
});
let Z = T.concat(V);
Z = Z.slice(2, 8);
console.log(Z);
