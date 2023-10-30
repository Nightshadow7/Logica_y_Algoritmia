//3. Escriba un programa que muestres los m primeros números de Fibonacci, donde m es un número ingresado por el usuario:
console.log("Sucesion de Fibonaci");
const numero = parseInt(
  prompt(
    "Dijite la cantidad de numeros que desea de la sucesion de fibonacci: "
  )
);

if (numero < 2) {
  if (numero === 1) {
    const sucesion = 1;
    console.log(`1. ${sucesion}`);
  } else console.log("No es posible calcular cantidades negativas o cero");
} else if (numero > 1) {
  const sucesion = 1;
  console.log(`1. ${sucesion}`);
  let f1 = 0;
  let f2 = 1;
  for (let i = 2; i <= numero; i++) {
    let f3 = f1 + f2;
    console.log(`${i}. ${f3}`);
    f1 = f2;
    f2 = f3;
  }
} else console.log("Ingresa un numero Valido");
