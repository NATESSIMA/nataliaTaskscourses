//if
let condicion1, condicion2, condicion3 = true;
if(condicion1) {
    //codigosi condition1 es true

} else if( condicion2){// optional}
    //codico
}else {

//opcional 
//codico si no se cumple ninguna condicion
}
for (let i=0;i<10;i++){
//let i=0 -> antes de entrar al bucle
}

//do-while
let limite =100;
let actual=0
while (actual<limite){//mientas se cumple la condicion,se ejecuta el bloque de codigo
    actual+=10;
    console.log(actual);//10,20,30,40,50,60,70.80,90,100

}

//swich
let (option)= 0;
switch(opcion) {
case 0:
    console.log(0);
    break;
case 1:
    console.log(1);
case 2:
    console.log(2);
default:
    console.log("no se")
}

try {
    //codigo
}catch(error) {

}catch1(x) 

//BREAK 
let personas = [{nombre:"P1",edad:15},{nombre:"P2", edad:44},{nombre:"P3", edad:55}]
for (let persona of personas) {
    console.log("EVALUANDO", persona.nombre);
}
