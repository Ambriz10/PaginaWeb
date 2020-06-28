//obtenemos los elementos con ese tag y vamos a cambiar el css
console.log($("h2").css("color"));
//ahora voy a cambiar el color del h2

//$("h2").css("color","red");

//document.getElementById("titulo").style.color = "#FF5733";

// cambiar varias propiedades del elemento con jQuery
/*$("h2").css("color","red");
$("h2").css("font-size",'100px');*/
//puedeo llamar elementos por su id
$("#titulo").addClass("titulo-js");

//$("h2").removeClass("titulo-js");
// también lo pueden llamar por su clase
$(".titulo-js").text("Registro Imperial");

$("#jQueryElementos").html("<h3>Hola desde jQuery</h3>");
/*let divJQuery = document.getElementById("jQueryElementos");
divJQuery.innerHTML = "<h3>Hola desde jQuery</h3>";*/
//con jQuery pueden obtener los atributos de los elementos
console.log($("a").attr("href"));
$("a").text("Youtube");
$("a").attr("href","https://youtube.com");

/*EVENT LISTENERS*/
/*$("button").click(function (e) { 
    alert("Registro completado");
});*/

$("button").on("click", function () {
    alert("Registro completado");  
});

$("#username").on("keypress",function(event){
    console.log(event);
    $("#" + event.target.id).addClass("color-nuevo");
  $("#textoEscrito").text(event.key);
})

/*SE PUEDEN AGREGAR ELEMENTOS CON JQUERY HTML ANTES O DESPUÉS DE UN
ELEMENTO DEL DOM*/
$("#jQueryElementos").before("<h2>Que onda</h2>");

$("#jQueryElementos").after("<h2>Adios</h2>");

$("#jQueryElementos").prepend("<h2>PREPEND</h2>");

$("#jQueryElementos").append("<h2>APPEND</h2>");

//$("input").remove();