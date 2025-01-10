functiongeneradorAleatorios(magnitud); {
       //{
      //return parseInt(Math.random()*magnitud);
      //}
     //let aleatorio= generador
while(true) {
    yieldparseint(Math.random()*magnitud);
}
}

let generador = generadorAleatorieos(100);
let valor;
while (valor =generador.next()){
    console.log(valor.value);
}