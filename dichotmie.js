T = [
  (pierre: 12),
  (jacques: 13),
  (paul: 16),
  (etc: 17),
  (x: 18),
  (y: 19),
  (z: 20),
];

function dichotomie(tableau, nom) {
  /*  if (tableau.length == 1) return tableau[0];
  let milieu = parseInt(tableau.length / 2);

  if (tableau[milieu] == nombre) return tableau[milieu];
  else if (tableau[milieu] > nombre)
    return dichotomie(
      nombre,
      tableau.slice(milieu, tableau[tableau.length - 1])
    );
  return (
    milieu +
    dichotomie(nombre, tableau.slice(milieu, tableau[tableau.length - 1]))
  ); */
  a = 0;
  b = tableau.length - 1;
  while (a <= b) {
    m = (a + b) / 2;
    if (tableau[m].nom == nom) return nom.age;
    else if (tableau[m] < nom.age) a = m + 1;
    else b = m - 1;
  }
}
console.log(dichotomie(T, "pierre"));
