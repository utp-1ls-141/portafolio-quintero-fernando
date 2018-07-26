function primo(valor) {
    var bool = true;
    for (var i = 1; i < valor; i++) {

        if (valor / i == Math.round(valor / i) && i != 1 && i != valor) {
            bool = false;
            break;
        };
    };
    return bool;
}

function MatrixDiagP() {
    num = document.getElementById("num").value;
    var colum = [];
    var val;
    if (num % 2 == 0) {
        var result = "<table border=1 class=table table-dark>";
        for (var i = 0; i < num; i++) {
            colum[i] = [];
            result += "<tr>";
            for (var j = 0; j < num; j++) {
                if (i === j) {
                    colum[i][j] = (Math.floor(Math.random() * (10 - 1)) + 1) * 23;
                } else if (i + j == num - 1) {
                    do {
                        val = Math.floor(Math.random() * 100 + 10);
                    } while (!primo(val));
                    colum[i][j] = val;
                } else {
                    colum[i][j] = Math.floor(Math.random() * 100 + 10);
                    //Math.floor(Math.random()* 100 + 10);
                }


                result += "<td>" + colum[i][j] + "</td>";


            }
            result += "</tr>";
        }


    } //termina if de par
    else {
        var result = "<table border=1 class=table table-dark>";
        for (var i = 0; i < num; i++) {
            colum[i] = [];
            result += "<tr>";
            for (var j = 0; j < num; j++) {
                if (i === j) {
                    colum[i][j] = (Math.floor(Math.random() * (10 - 1)) + 1) * 23;
                } else if (i + j == num - 1) {
                    do {
                        val = Math.floor(Math.random() * 100 + 10);
                    } while (!primo(val));
                    colum[i][j] = val;
                } else {
                    colum[i][j] = Math.floor(Math.random() * 100 + 10);
                    //Math.floor(Math.random()* 100 + 10);
                }
                if (i === ((num - 1) / 2) && j === ((num - 1) / 2)) {
                    colum[i][j] = 23;
                }
                result += "<td>" + colum[i][j] + "</td>";
            }
            result += "</tr>";
        }

    } //termina else de impar
    result += "</table>";
    $('#myModal').modal(focus);
    $("#matriz").html(result);
}