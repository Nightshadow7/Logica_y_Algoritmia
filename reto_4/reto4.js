// Reto 4: Votaciones de la CONFECH
// La CONFECH, en su afán de agilizar el proceso de recuento de las votaciones, le ha encargado el
// desarrollo de un programa de registro de votación por universidades.
// Primero, el programa debe solicitar al usuario ingresar la cantidad de universidades que participan
// en el proceso.
// Luego, para cada una de las universidades, el usuario debe ingresar el nombre de la universidad y
// los votos de sus alumnos, que pueden ser: aceptar (A), rechazar (R), nulo (N) o blanco (B). El término
// de la votación se indica ingresando una X, tras lo cual se debe mostrar los totales de votos de la
// universidad, con el formato que se muestra en el ejemplo.
// Finalmente, el programa debe mostrar el resultado de la votación, indicando la cantidad de
// universidades que aceptan, que rechazan y en las que hubo empate entre estas dos opciones.

const Universidades = parseInt(prompt("Ingrese la cantidad de universidades que participaran en el concurso: "))

if(Universidades < 1){
  console.warning("no es posible asignar "+Universidades+" como cantidad disponible.")
} if(Universidades > 1 ){
  let Uni= []
  for(let i=0; i<Universidades; i++){
    const nombre = prompt("Ingrese el nombre de la universidad: ")
    let voto 
    while(xd){
      voto = parseInt(prompt("Ingrese la cantidad de personas que votaron: "))
      if (voto > 1) xd=false
    }
    const votos = []
    let aceptar = 0
    let rechazar = 0
    let nulo = 0
    let blanco = 0
    for(let j = 1 ; j = voto; j++){
      let opcion
      while(xd){
        opcion = prompt("Las opciones disponibles son:\n- ( A ó a ) Aceptar\n- ( R ó r) Rechazar\n- ( N ó n ) Nulo\n- ( B ó b ) Blanco")
        if (
          opcion === "A" ||
          opcion === "a" 
        ){
          xd = false;
          aceptar = aceptar + 1;
          votos.push(opcion);
        } else if (
          opcion === "R" ||
          opcion === "r"
        ) {
          xd = false;
          rechazar = rechazar + 1
          votos.push(opcion);
        }if (
          opcion === "N" ||
          opcion === "n" 
        ) {
          xd = false;
          nulo = nulo + 1
          votos.push(opcion);
        }if (
          opcion === "B" ||
          opcion === "b"
        ) {
          xd = false;
          blanco = blanco + 1
          votos.push(opcion);
        }
      }
    }
    if(aceptar > rechazar){}
  }
}