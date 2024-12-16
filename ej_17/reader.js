import fs from 'node:fs';//Require package.json
//1.leer un fichero
//2.reemplazamos una palabra por otra
//monstrar el resultado
function leerFichero (nombreFichero)
{

const data = fs.readFileSync(nombreFichero,"utf8");
return data;

}

function censurar(texto, palabraProhibida, palabraSustitucion)

{
const regexp = new RegExp("\\b${palabraProhibida}\\b", "gi")
const textoCensurado =
}


try {
    const data = leerFichero('./post.txt', 'utf8');
   const data_censurado = data.replaceAll(/\bgilipollas\b/gi, "**********");
    console.log(data_censurado);
} catch (err) {
    console.error(err);
}
