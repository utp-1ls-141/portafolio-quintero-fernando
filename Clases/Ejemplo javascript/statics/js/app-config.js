//Contiene la estructura configuracion modular de las aplicaciones 
// function buscaJugador(){ //Se pueden asociar los eventoos que queramos, cambiando el click por el vento que queramos
//     //Esto es un callback
//     alert("Has presionado el boton");
// };
app = {
    init: function(){
        app.bindEvents();
    },
    elements: { //Llave donde se seleccionan todos los elementos que se utilizaran en el proyecto
        buscaJugadorbtn:$('.buscar-jugador-btn-js'),
        jugadortxt: $('.jugador-text-js'),
    },
    bindEvents: function(){
        //app.elements.buscaJugadorbtn.on("click", buscaJugador)
        app.elements.buscaJugadorbtn.on("click", function(){
            alert("El jugador es: " + app.elements.jugadortxt.val());
        });
    }
};