function es_isomorfica(){
    var cad1 = (document.getElementById("cadena1").value).toLowerCase();
    var cad2 = (document.getElementById("cadena2").value).toLowerCase();
    var arr1 = cad1.split("");
    var arr2 = cad2.split("");
    var temp = [];
    var x, y, good= 0, bad = 0;
    var valid = new RegExp("^([a-zA-Z])+$");

    //Validacion de los campos
    if (valid.test(cad1) && valid.test(cad2)){
        document.getElementById("error").innerHTML = ""; //No manda mensaje de error
        //Guardando en el arreglo los valores, los pares son la primera cadena y los impares la segunda cadena
    if (cad1.length == cad2.length){
        for (x = 0; x < arr1.length; x++){
            if (x < 1){
                temp[x] = cad1[x];
                temp[x+1] = cad2[x];
            }else{   
                temp[x+x] = cad1[x];
                temp[x+x+1] = cad2[x];
            }
        }
        //Va revisando el arreglo letra por letra, si una se repite revisa si el caracter se repite, si se repite sigue sin problema, sino es isomorphica
        for(x = 0; x < temp.length; x+=2){
            for(y = 0; y < temp.length; y+=2){
                if ((x != y) && temp[x] == temp[y]){
                    if (temp[y+1] == temp[x+1]){
                        good += 1
                        console.log("bueno");
                }else{
                        bad += 1;
                        console.log("malo");
                }
                }
            }
        } 
        //En vez de revisar pares, este revisa los impares
        for(x = 1; x < temp.length; x+=2){
            for(y = 1; y < temp.length; y+=2){
                if ((x != y) && temp[x] == temp[y]){
                    if (temp[y-1] == temp[x-1]){
                        good += 1;
                        console.log("bueno");
                }else{
                        bad +=1;
                        console.log("malo");
                }
                }
            }
        }
        //Mete las cadenas introducidas al modal
    document.getElementById("info").innerHTML = "Las cadenas introducidas fueron: " + document.getElementById("cadena1").value + ", " + document.getElementById("cadena2").value;
    //Mete el resultado al modal
    if (bad > good){
        document.getElementById("nomorf").innerHTML = "Las cadenas no son isomorficas :(" 
        document.getElementById("esmorf").innerHTML = "" 
    }else{
        document.getElementById("esmorf").innerHTML = "Las cadenas son isomorficas :)";
        document.getElementById("nomorf").innerHTML = "";
    }
    //Despliega el modal
    $('#myModal').modal(focus) 
    }else{
        //Captura el error en caso de que no sean cadena del mismo tamaño
        document.getElementById("error").innerHTML = "No puede ser una cadena isomorfica porque no son del mismo tamaño";
    }
    
   // temp.forEach( function(valor, indice, array) {    console.log("En el índice " + indice + " hay este valor: " + valor);});
} else {
    document.getElementById("error").innerHTML = "Las cadenas solo pueden ser letras, no se aceptan numeros ni caracteres especiales";
}
}


