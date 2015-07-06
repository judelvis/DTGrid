function evaluaAccion(obj,identificador){
    $("."+identificador).click(function (event) {
        var fila = this.parentNode.id.split("__");
        var tam = fila.length-1;
        var pos = fila[tam] - 1
        var parametro = this.getAttribute("parametro");
        var datos = new Array();
        if(parametro == "undefined" || parametro == "") eval("datos=obj.cuerpo["+pos+"]");
        else{
            var param = parametro.split(",");
            $.each(param,function(ind){
                eval("var dat = obj.cuerpo["+pos+"]["+(this-1)+"]");
                datos.push(dat);
            })
        }
        ejecutaAccion(this.getAttribute("tipo"),this.getAttribute("ejecuta"),JSON.stringify(datos),identificador);
    });
}

function ejecutaAccion(tipo,funcion,datos,identificador){
    //alert(tipo+"**"+funcion+"**"+datos);
    switch (tipo){
        case "script":
            eval(funcion+"("+datos+");");
            break;
        case "php":
            accionPhp(funcion,datos,identificador);
            break;
    }
}

function accionPhp(funcion,datos,identificador){
    $.ajax({url : funcion,type : "POST",data : "datos="+datos,
        success : function(resp) {
            $("#respuestas__"+identificador).html(resp);
            $("#respuestas__"+identificador).openModal();
        }
    });
}
