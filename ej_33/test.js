let ingrediente1={
    nombre:"Patata",
    cantidad:200
}
let ingrediente2={
    nombre:"Cebolla",
    cantidad:100
}
let ingrediente3={
    nombre:"Platano",
    cantidad:50
}
let ingredientes =( ingrediente1, ingrediente2, ingrediente3);
let total=ingredientes.reduse((cantidades, ingredienteActual)=>
     cantidades + ingredienteActual.cantidad, 0);
console.log(total);
let totalString = ingredientes.reduce((texto, ingredienteActual)=>
console. log(totalString));
let totalString2= ingredientes.reduce(texto, ingredienteActual=>
    texto+ "COMIDA"+ ingredienteActual.nombre,"COMER");
    console.log(totalString2);
{
 //let arrayIngredienter= ingredientes.reduce(losIngredientes, ingredienteActual) =>{
   losingredientes.push(ingredienteActual.nombre); }
   return losingredientes;
 

