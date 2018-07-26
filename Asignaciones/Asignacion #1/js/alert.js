
function mostrar (){
	var usuario = document.getElementById("usuario");
	var contra = document.getElementById("contra");
	var email = new RegExp("[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");
	if (usuario.value == "" || contra.value == ""){
		alert ("Llene todos los campos solicitados");
	}else if( email.test(usuario.value)){
		alert ("Entro correctamente! \n Usuario: " + usuario.value + " \n Contraseña: " + contra.value);
	}else{
		alert ("El formato introducido no es correcto");
	}
}