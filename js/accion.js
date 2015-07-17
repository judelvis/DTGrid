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
        var ocultar = this.getAttribute("ocultar");
        if(ocultar == "si"){
            var filaOcultar = this.parentNode.getAttribute("fila");
            $("#"+filaOcultar).toggleClass("hide");
            var det = filaOcultar.substring(6);
            $("#"+det).toggleClass("hide");
            $("#"+det+"__detalle").toggleClass("hide");

        }
    });
}

function ejecutaAccion(tipo,funcion,datos,identificador){
    //alert(identificador);
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

/*
Funcion para botones generales
 */
function construirBoton(botones,identificador,datos,clase){
    var pie = document.getElementById("pie__"+identificador);
    filaPie= pie.insertRow(pie.rows.length);
    celdaPie = filaPie.insertCell(filaPie.cells.length);
    filaCuerpo = document.getElementById('fila__'+identificador+'__1')
    celdaPie.colSpan =  filaCuerpo.cells.length;
    celdaPie.style.cssText="text-align:right;";
    $.each(botones,function(){
        var boton = document.createElement("a");
        boton.id= "boton__"+identificador;
        boton.innerHTML = this.titulo
        boton.className= "waves-effect waves-light btn";
        if(this.clase != undefined){
            var i = document.createElement("i")

        }
        if(clase != undefined) boton.className += " "+clase;
        celdaPie.appendChild(boton);
    })


}

function evaluaAccionGeneral(obj,identificador){

}