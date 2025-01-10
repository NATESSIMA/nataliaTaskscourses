//functionsumar(s1,s2){
 //   if (!(s1,s2instanceof Number) {
         new Error('s1 no es un numero');
    //}
    return s1+s2;
//}
try {
let resultado = sumar("a",2);
console.log(resultado);
} catch(fallo) {
console.error('Tratando un error');
console.log('catch', fallo);

}finally{
    console.log("siempre se ejecuta")
}