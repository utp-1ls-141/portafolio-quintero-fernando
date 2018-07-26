//Los script pueden ir dentro del body, y pueden ir en el head para cargar un javascript antes de que cargue la pagina (no recomendable).
(function(){
    alert("Hola mundo"); //Detienen el proceso de cargado de la pagina
    document.getElementById("reemplazame").innerHTML = 5+5;

    //prueba de variables
    var nombre = "Erick", apellido = "Agrazal";
    console.log("El profesor es: " + nombre + " " + apellido); 

    /* CALLBACKS
    function sumar (a , b, callback){
        return callback(a + b);
    }
    //Averiguar el callback, manipular el resultado de una funcion sin cambiarla
    console.log(sumar(2,3, function(a){
        return a/2;
    }));


 */
    //////////////////// Otra manera de llamar los callback
  /*   function sumar2 (a, b, callback){
        return callback(a+b);
    }
    function __callback(a){
        return a / 2;
    }
    sumar2 (4, 5, __callback); */

function sortNumber(a,b){
    return a-b;
}
function __sort(a){
    return a.sort(sortNumber);
}
function __add(a){
    var acum = 0;
    console.log(typeof(a));
    for (var i = 0; i < a.length; i++){
        console.log(a);
        acum += a[i];
    }
    return acum;
}
function randomGenerator(callback){
    var cantidad = 5,randoms = [];
    for (var i = 0; i < cantidad; i++){
        randoms.push(Math.floor((Math.random() * 10) + 1)); 
    }
    console.log(randoms);
    return typeof(callback) !== "undefined"? callback(randoms): randoms;
}

console.log(randomGenerator());
console.log(randomGenerator(__sort));
console.log(randomGenerator(__add));
})();//Funcion anonima,  se ejecuta sin ser llamada  -