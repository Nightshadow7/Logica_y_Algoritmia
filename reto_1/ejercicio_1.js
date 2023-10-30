//1. Escriba un programa que reciba como entrada un número entero n, y entregue como salida el n-ésimo número de Fibonacci:
console.log("Sucesion de Fibonaci");
const numero = parseInt(prompt(
  "Dijite la cantidad de numeros que desea de la sucesion de fibonacci: "
));

if(numero <= 2 ){
    if(numero === 1){
        const sucesion = 0;
        console.log(`F${numero}: ${sucesion}`);
    } else  if(numero === 2){
        const sucesion = 1;
        console.log(`F${numero}: ${sucesion}`);
    } else console.log("No es posible calcular cantidades negativas o cero");
} else if(numero >2){
    let f1 = 0
    let f2 = 1;
    let f3;
    for(let i=2 ; i<=numero; i++){
        f3 = f1 + f2
        f1 = f2;
        f2 = f3
    };
    console.log(`F${numero}: ${f3}`)
}else console.log("Ingresa un numero Valido")

