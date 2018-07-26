function primos() {
    var num = document.getElementById("bono").value;
    var arr1 = num.split("");
    var x = 0;
    var largo = arr1.length;
    var temp;
    var si_no = false;
    var str, resp = "<h5>Resultado: </h5> <br>";
    for (x = 0; x < largo; x++) {
        temp = arr1[largo - 1];
        arr1.pop();
        arr1.unshift(temp);
        str = arr1.join("");

        if (calc_primo(str)) {
            resp = resp + "<span class='text-success'>" + x + " vuelta: " + str + " es un numero primo </span> <br>"
        } else {
            resp = resp + "<span class='text-danger'>" + x + " vuelta: " + str + " no es un numero primo </span> <br>"
        }
    }
    document.getElementById("info").innerHTML = resp;
    $('#myModal').modal(focus);

}

function calc_primo(str) {
    var primo = +str != 1;
    for (var i = 2; i < +str; i++) {
        if (+str % i == 0) {
            primo = false;
            break;
        }
    }
    return primo;

}