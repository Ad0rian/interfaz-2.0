$('#contentprincipal').html('');
$('#contentprincipal').append(
'<div id="lateralmenu" class="sizeleft animationini" >'+           
'</div>'
);
$.getJSON("./bd/data.json", function(json) {//obtenemos el JSON con jQuery
    var buttonsmenu = json;
    var buttonsmenulength = Object.keys(buttonsmenu).length; //obtenemos el número de objetos en el fichero contando los objetos con la funcion Object.keys
    for (var i = 0; i < buttonsmenulength; i++){ //iteramos sobre el número de objetos
     var idbutton='Button'+i;//identificador del botón
     $('#lateralmenu').append(
        '<div class="buttonmenu">'+
        '<div class="buttonmenusecond" onclick="internalMenu('+buttonsmenu[idbutton].url+');">'+                               
            '<h1 id="'+buttonsmenu[idbutton].id+'" class="textbutton">'+buttonsmenu[idbutton].text+'</h1>'+
        '</div>'+
    '</div>'
        );
    }	
});



function internalMenu(choice)
{
    $('#contentprincipal').html('');
    $('#contentprincipal').append(
    '<div id="lateralmenu" class="sizeleft animationini" >'+           
    '</div>'
    );
    $.getJSON("./bd/"+choice+".json", function(json) {//obtenemos el JSON con jQuery
        var buttonsmenu = json;
        var buttonsmenulength = Object.keys(buttonsmenu).length; //obtenemos el número de objetos en el fichero contando los objetos con la funcion Object.keys
        for (var i = 0; i < buttonsmenulength; i++){ //iteramos sobre el número de objetos
         var idbutton='Button'+i;//identificador del botón
         $('#lateralmenu').append(
            '<div class="buttonmenu">'+
            '<div class="buttonmenusecond" onclick="internalMenu('+buttonsmenu[idbutton].url+');">'+                               
                '<h1 id="'+buttonsmenu[idbutton].id+'" class="textbutton">'+buttonsmenu[idbutton].text+'</h1>'+
            '</div>'+
        '</div>'
            );
        }	
    });
}

