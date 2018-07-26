var express = require('express');
var app = express();
//crear una ruta para el node
app.get('/', function(req, res){
    res.send('Hola mundo');
})
//send es ua respuesta

app.get('/clientes', function(req, res){
    res.send('Clientes');
})
app.get('/api/clientes', function(req, res){
    var clientes = [{
            nombre: 'XYZ',
            apellido: 'ABC',
            edad: 20
    },
    {
            nombre: 'ABC',
            apellido: 'XYZ',
            edad: 20
    },
    {
            nombre: 'POL',
            apellido: 'ONIA',
            edad: 23
    }
]
    res.send(JSON.stringify(clientes));
})

//SOLO FUNCIONA CON POSTMAN
app.post('/api/clientes', function(req, res){
    var clientes = {
        nombre: 'BRA',
            apellido: 'ZIL',
            edad: 23
    }
    res.send(JSON.stringify(clientes));
})
//PARA ACTUALIZAR DATOS, SOLO FUNCIONA CON POSTMAN
app.put('/api/clientes/1', function(req,res){
    var editado = {
        nombre: 'BRA',
            apellido: 'ZIL',
            edad: 23
    }
    res.send(JSON.stringify(editado));
})

//SE APLICA CUANDO SE QUIERE ELIMINAR UN DATO 
app.delete('/api/clientes/1', function(req, res){
    var eliminado = {
        nombre: 'POL',
        apellido: 'ONIA',
        edad: 23
    }
    res.send(JSON.stringify(eliminado));
})

//separa un puerto
app.listen(3000, function(){
    console.log("Escuchando en el puerto 3000");
})