function es_isomorfica(){
    var cad1 = (document.getElementById("cadena1").value).toLowerCase();
    var cad2 = (document.getElementById("cadena2").value).toLowerCase();
    var arr1 = cad1.split("");
    var arr2 = cad2.split("");
    var length = cad1.length;
    var temp = {};
    var x, good= 0, bad = 0;
    var name, y;

    //Validacion de los campos
        document.getElementById("error").innerHTML = ""; //No manda mensaje de error
    if (cad1.length == cad2.length){
        for (x = 0; x < length; x++){
            name = arr1[x];
            console.log("name:" + name);
            y = Object.keys(temp);
            if (y.indexOf(name)> -1){ //array.indexof determina si el valor en name se encuentra dentro del arreglo de las llaves de temp
            console.log("Dos letras iguales");
            if (temp[name] == arr2[x]){
                    temp[name] = arr2[x];
                }else{
                    bad += 1;
                    break;
                }
            }else{
            y = Object.values(temp);
            if (y.indexOf(arr2[x])> -1){
                if (temp[name] == arr2[x]){
                    temp[name] = arr2[x];
                }else{
                    bad += 1;
                    break;
                }
            }
            temp[name] = arr2[x];
            console.log(temp);
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
}


