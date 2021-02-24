var Http = require( 'http' );
var server = Http.createServer(function(request,response){
    console.log('Alguien entró ...');
    console.log(request.url);
    console.log(request);


    if(request,Http.METHODS == 'GET'){
    response.writeHead(404,"content-Type:text/html")
    response.write("<style> h1{color:blue }</style>");
    response.write("<h1>hola ico la mejor coarrrera</h1>");

    }else{
        response.write("no es get")
    }
   
    response.end();

});

server.listen( 3000, function( ) {
console.log( 'Escuchando conexión en el puerto 3000' );
});
