function generar_m (){
    var num = document.getElementById('numero').value;
    var cuad = Math.pow(num, 2);
    var x, random, y = 1;   
    var matrix = [];
    var valid = new RegExp("^([0-9])+$");
    var resp = "La Matriz Resultante de " + cuad + "x" + cuad + " fue: <br>";
    if (!valid.test(num)){
        document.getElementById('error2').innerHTML = "SOLO NUMEROS";
    }else{
        document.getElementById('error2').innerHTML ="";
    for(x=0; x<cuad; x++) {
     matrix[x] = []; 
        for(var j=0; j<cuad; j++) {
           random  = Math.floor((Math.random() * 90) + 10);
            if (x == j){
                while (y==1){ 
                 random  = Math.floor((Math.random() * 90) + 10);
                    if ((random % 3) == 0){
                        matrix[x][j] = random;
                        y = 0;
                    }
                }
                y = 1;
            }else{
            matrix[x][j] = random;
            }
            }
    }
    
    for(x=0; x<cuad; x++) {
           for(var j=0; j<cuad; j++) {
               if (j == (cuad-1)){
                if(j==x){
                    resp = resp + "<mark class='font-weight-bold text-success'>" + matrix[x][j] + "</mark> &nbsp &nbsp";
                }else{
                     resp = resp + matrix[x][j] + "<br>";
                }
               }else if (j == x){
               resp = resp + "<mark class='font-weight-bold text-success'>" + matrix[x][j] + "</mark> &nbsp &nbsp";
               }else{
               resp = resp + "&nbsp"+ matrix[x][j] + "&nbsp &nbsp"; 
           }
        }
    }   
    document.getElementById('info').innerHTML = resp;
     $('#myModal').modal(focus);
}
}

