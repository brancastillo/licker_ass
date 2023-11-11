function mostrar() {
  let sumaDias = 0;
  let edad = 0;
  let edadEnDias = 0;
  let ndia = 0;
  let nmes = 0;
  let diferenciaAnoPasado = 0;
  let fdia = 0;
  let fmes = 0;
  let diferenciaAnoActual = 0;

  //bienvendia
  alert("Sacrificial Suicide 💀🤙 Castill0.666. Derechos Reservados. @2023.");

  //inputs
  do {
    ndia = prompt("Ingrese el dia de nacimiento 👼🏾");
  } while (ndia < 1 || ndia > 31 || isNaN(ndia));

  do {
    nmes = parseInt(prompt("Ingrese el mes de nacimiento 👼🏽"));
  } while (nmes < 1 || nmes > 12 || isNaN(nmes));

  do {
    edad = parseInt(prompt("Ingrese su edad 🤬"));
  } while (edad < 0 || edad > 100 || isNaN(edad));

  do {
    bandera = prompt("Los ha cumplido este año? 🥴(s/n)");
    bandera = bandera.toLowerCase();
  } while (bandera != "s" && bandera != "n");

  do {
    fmes = parseInt(prompt("Ingrese el mes actual ✡️(1-12)"));
  } while (fmes < 1 || fmes > 12 || isNaN(fmes));

  do {
    fdia = parseInt(prompt("Ingrese el dia actual 🐺(01-31)"));
  } while (fdia < 1 || fdia > 31 || isNaN(fdia));

  //procesamientos
  if (bandera == "s") {
    diferenciaAnoActual = 30 - ndia + (fmes - nmes - 1) * 30 + fdia;
  } else {
    diferenciaAnoPasado = 30 - ndia + (12 - nmes) * 30;
    diferenciaAnoActual = fdia + (fmes - 1) * 30;
  }

  //outputs
  if (isNaN(ndia) || isNaN(nmes) || isNaN(edad) || isNaN(fmes) || isNaN(fdia)) {
    alert("Ha ingresado datos erroneos 🖕🚫");
  } else {
    edadEnDias = edad * 365.256;
    edadEnDias = Math.ceil(edadEnDias);
    sumaDias = edadEnDias + diferenciaAnoActual + diferenciaAnoPasado;
    alert("Usted lleva " + sumaDias + " dias en la tierra, matese 🧨💀🤙");
  }
}
