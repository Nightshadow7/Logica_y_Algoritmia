//2. Escriba un programa que reciba como entrada un número entero e indique si es o no un número de Fibonacci:
console.log("Sucesion de Fibonaci");
const numero = parseInt(
  prompt(
    "Dijite un numero para validar si pertenece a la sucesion de fibonacci: "
  )
);
let band = false;
if (numero < 2) {
  if (numero === 0) {
    console.log(`El numero si pertenece a la sucesion de fibonacci en F0: 0`);
  } else if (numero === 1) {
    console.log(
      `El numero si pertenece a la sucesion de fibonacci en F1: 1 ó F2: 1`
    );
  } else console.log("No es posible calcular cantidades negativas o cero");
} else if (numero > 1) {
  while (band === false) {
    let f1 = 1;
    let f2 = 1;
    let f3 = 2;
    for (let index = 3; f3 <= numero; index++) {
      if(f3 === numero){
        band = true
        console.log(
          `El numero si pertenece a la sucesion de fibonacci en F${index}: ${numero}`
        );
      };
      f1 = f2;
      f2 = f3;
      f3 = f1 + f2;
      if(f3 < numero){
        band = true
        console.log("El numero no pertenece a la sucesion de fibonacci");
      }
    }
  }
} else console.log("Ingresa un numero Valido");
