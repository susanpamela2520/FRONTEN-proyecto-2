$(document).ready(function(){   //#cuando ya este listo el documento que ejecute todas las acciones

    const URL='https://backend-proyecto2.herokuapp.com/'; //#variable constante que contiene la URL 

$('#subir').click(function(){

    var file = $('#archivo')[0].files
    console.log(file)

    var reader = new FileReader(); 
    reader.readAsText(file);

    reader.onload = function (e) {
        // Cuando éste evento se dispara, los datos están ya disponibles.
        // Se trata de copiarlos a una área <div> en la página.
        console.log(e.target.result)
       // output.textContent = e.target.result;
        };


        document.getElementById('file')
        .addEventListener('change', leerArchivo, false);

        })





    function recuperar (method, url, data, funcion){  //#metodo (get o post) url es la del servidor data son los objetos jason funcion lo que hace cuando retorne la data
        $.ajax({
            type:method,
            url:url,
            data:data,
            success:function(data){
                funcion(data);
            }
        });
    }


});