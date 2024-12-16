const dias =['Lunes' , 'Martes' , 'Miercules', 'Jueves' , 'vIERNES' , 'Sabado', 'domingo'];
const numeros =[8,10,-3,2,200,4]

numerosOrdenados=numeros.sort();
console.log (numeros);//8,10,-3,2,200,4]

dias.sort()
console.log(dias)//'Lunes' , 'Martes' , 'Miercules', 'Jueves' , 'vIERNES' , 'Sabado', 'domingo

numeros.sort((a,b)=>{
    if (a<b) return -1;
    if(a>b) return 1;
    return 0;
})
console.log(numeros);
const coche1={
nombre:'mazda',
capalidad:'20',
velocidad:'300',
}
console.log(numeros);
const coche2={
nombre:'porche',
capalidad:'34',
velocidad:'120',
}
console.log(numeros);
const coche3={
nombre:'lexus',
capalidad:'150',
velocidad:'250',
};
let.coches(coche1, coche2, coche3);
coche.sort((c1,c2)=>{
if (c1.nombre<c2.nombre) return -1;
if(c1.nombre>c2.nombre) return +1;
return 0;

})
    coche.sort((c1,c2)=>c1.velocidad - c2.velocidad). reverse().array.forEach(coche => {
        console.log(coche);
    });
