// El método de multiplicación rusa consiste en multiplicar sucesivamente por 2 el multiplicando y
// dividir por 2 el multiplicador hasta que el multiplicador tome el valor 1.
// Luego, se suman todos los multiplicandos correspondientes a los multiplicadores impares.
// Dicha suma es el producto de los dos números. La siguiente tabla muestra el cálculo realizado para
// multiplicar 37 por 12, cuyo resultado final es 12 + 48 + 384 = 444.

let multiplicador = parseInt(prompt("Ingrese el numero a multiplicar: "));
let multiplicando = parseInt(prompt("Ingrese el multiplicando: "));
console.log(
  `El multiplicando: ${multiplicando} \nEl multiplicador: ${multiplicando}`
);
band = false;
let resultado = 0;
while (band === false) {
  if (multiplicador % 2 !== 0) {
    resultado = resultado + multiplicando;
  }
  multiplicador = Math.trunc(multiplicador / 2);
  multiplicando = multiplicando * 2;
  if (multiplicador === 1) {
    band = true;
    resultado = resultado + multiplicando;
    console.log(`El resultado es: ${resultado}`);
  }
}
