function testDoor01(){
console.log("checuando la puerta 01...");
return true;
}
function testDoor02(){
    console.log("checuando la puerta 02...");
    return true;
}
if (testDoor1()==true && testDoor02()==true){
console. log("TODO OK");
}
else{
console.error("ALGUNA PUERTA ESTA EN ERROR")
}
if (testDoor01()== true ^ testDoor02()== true) {
console. log ("HOY UNA PUERTA ESTA ABIERTA Y OTRA CERRADA")}
else{
    console. error ("LAS DOS PUERTAS ESTAN ABIERTAS O CERRADAS")}

   