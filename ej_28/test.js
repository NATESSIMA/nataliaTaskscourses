const playa_1 = {
    nombre: 'Famara',
    pais: 'España',
    dificutal: 'Principiante'
}
const playa_2 = {
    nombre: 'Nazare',
    pais: 'Portugal',
    dificutal: 'Experto'
}
const playa_3 = {
    nombre: 'Somo',
    pais: 'España',
    dificutal: 'Intermedio'
}
let playas = new Array();
playas.push(playa_1)
playas.push(playa_2)
playas.push(playa_3)

 
console.log("*******");
//<div class ='playa'><div>playa:name playa</div>pais:españa</div>
const playasEspana = playas.filter(playa => playa.pais === 'España');
console.log(playasEspana);
const playasExpertos = playas.filter(playa => playa.dificutal === 'Experto');
console.log(playasExpertos);
{playas.filter (playa=>
    playa.dificultad===' experto');

}forEach(playa=>{
    console.log('playa experto:'+playa.nombre);
});
playas
.filter(playa=>playa.pais==='España')
.forEach(playa=console.log('playaEspaña:'+playa.nombre));
playas
.map(playa=>`<div class='playa'><div>Playa:${playa.nombre}</div><Pais:${playa.pais}</div></div)`)
console.log("**********")
playas.filter(playa=>playa.dificultad==='Experto')
.map(playa=> `<div class='playa'><div>Playa:${playa.nombre}</div><Pais:${playa.pais}</div></div)`)
.forEach(lineaHTML=>console.log(lineaHTML));
