let nombre = 'Fran#39#Cordoba#true';

let alumno =['Fran', 39, 'Cordoba', true];
console. log ()

let jesus ={
    nombre: 'jesus',
    edad:42,
    ciudad: 'Madrid',
    programador: true
}
console. log(jesus (nombre));//


console. log(typeof (nombre));//string
console. log(typeof (alumno));// objetos (aunque es un array)
console.log(typeof(jesus));// object
//titulo. numero temporada. sinopsis. año estreno. platforma                                          
let from ={
titulo: 'From',
numeroTemporadas : 5,
sinopsis : 'un pueblo con engendros nocturnos',
platforma : 'MAX',
reparto: [
    {
        nombre : 'Alex Siedov',
        personaje: 'Harry POTTER',

    },{
    nombre : 'YARIK',
    personaje: 'Amigo harry'
    },{
nombre : 'YARIK2',
    personaje: 'Amigo harry2'


    }

]


}

console. log ( from. titulo);
console. log(fron. reparto(0). nombre);
from. reparto.forEach((Individuo)=>
console.log(`nombre :${individuo.nombre}`,
    `personaje:${Individuo, personaje}`
    

))
