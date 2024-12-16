const API_KEY = '15df7767';
const COMMON_URL ='http://img.omdbapi.com/?apikey=${API_KEY}&';

//'http://210.83.3.12/?apikey=15df7767i=13186

function processData (pelicula){
console.log(pelicula.Search[1].title);
console.log(pelicula.Search[2].director);

}
function doRequest(pelicula){

//ej1
//doRequest(COMMON_URL+ 'T=Batman)
}

