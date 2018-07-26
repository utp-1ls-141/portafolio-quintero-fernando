function concatenacion(){
  var cad1= document.getElementById('cadena1').value;
  var cad2= document.getElementById('cadena2').value;
  var concat=cad1 + ' '+ cad2;
  document.getElementById('info').innerHTML = "Cadena 1: " + cad1 + "<br> Cadena 2: " + cad2 + "<br><br> Resultado: " + concat;
  $('#myModal').modal(focus);
}