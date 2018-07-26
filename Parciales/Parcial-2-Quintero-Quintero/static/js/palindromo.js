function palin_dromo() {
    var num = document.getElementById("palindromo").value;
    var arr1 = num.split("");
    var bin = (+num).toString(2);
    var arr2 = bin.split("");
    var res1 = es_palin(arr1);
    var res2 = es_palin(arr2);
    document.getElementById("esmorf").innerHTML = "";
    document.getElementById("nomorf").innerHTML = "";
    if (res1 && res2) {
        document.getElementById("esmorf").innerHTML = "El numero " + num + " es doblemente palindromo";
    } else {
        document.getElementById("nomorf").innerHTML = "El numero " + num + " NO es doblemente palindromo";
    }

    $('#myModal').modal(focus);
}

function es_palin(arr1) {
    var largo = arr1.length;
    var arr_o = new Array(largo);
    for (var i = 0; i < largo; i++){
        arr_o[i] = arr1[i];
    }
    var alReves = arr1.reverse();
    var bien = true;
    for (i = 0; i < largo; i++) {
        if (arr_o[i] == alReves[i]) {
            bien = true;
        } else {
            return false;
        }
    }
    return bien;

}