/*Nombre*/
function insertarHTML(){
        console.log(document.getElementsByTagName("input"));
        let elementoMensaje = document.getElementById("nombreMensaje");
        let nombre = document.getElementById("firstName").value;
        if(nombre.length == 0){
            elementoMensaje.innerHTML = "*Debes colocar tu nombre completo";
        }else{
            elementoMensaje.innerHTML = "";

            let soloLetras = letrasPattern.test(nombre);
            if(soloLetras == false){
                elementoMensaje.innerHTML = "Solo se pueden letras";
            }else{
                elementoMensaje.innerHTML = "";
            }
        }
    }
    /*Correo electrónico*/
function insertarHTMLC(){
        console.log(document.getElementsByTagName("input"));
        let elementoMensaje = document.getElementById("nombreMensajec");
        let correo = document.getElementById("email").value;
        if(correo.length == 0){
            elementoMensaje.innerHTML = "*Colocar tu dirección de correo electrónico";
        }else{
            elementoMensaje.innerHTML = "";
        }
    }
function insertarHTMLI(){
        console.log(document.getElementsByTagName("input"));
        let elementoMensaje = document.getElementById("nombreMensajei");
        let ciudad = document.getElementById("Ciudad").value;
        if(ciudad.length == 0){
            elementoMensaje.innerHTML = "*Coloca el nombre de tu ciudad o estado";
        }else{
            elementoMensaje.innerHTML = "";
        }
    }
function insertarHTMLA(){
        console.log(document.getElementsByTagName("input"));
        let elementoMensaje = document.getElementById("nombreMensajea");
        let alca = document.getElementById("Alcaldia").value;
        if(alca.length == 0){
            elementoMensaje.innerHTML = "*Coloca el nombre tu alcaldia";
        }else{
            elementoMensaje.innerHTML = "";
        }
    }
function insertarHTMLT(){
        console.log(document.getElementsByTagName("textarea"));
        let elementoMensaje = document.getElementById("nombreMensajet");
        let coment = document.getElementById("Coment").value;
        if(coment.length == 0){
            elementoMensaje.innerHTML = "*Escribe tu mensaje";
        }else{
            elementoMensaje.innerHTML = "";
        }
    }
