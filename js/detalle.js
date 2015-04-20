function fdetpre(detalles,identificador){
    $("[detalle="+identificador+"-pre]").click(function (event) {
        var identificadores = this.id.split('-');
        var cuerpo = document.getElementById('cuerpo-' + identificadores[1]);
        var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]);
        verificarDetalle(fila,detalles);
    });
}

function fdetpost(detalles,identificador){
    $("[detalle="+identificador+"-pre]").click(function (event) {
        var identificadores = this.id.split('-');
        var cuerpo = document.getElementById('cuerpo-' + identificadores[1]);
        var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]);
        verificarDetalle(fila,detalles);
    });
}

var crearDetalle = function(fila,detalle){
    var iden = fila.id.split('-');
    var tds=$("#"+fila.id+":first td").length;
    var tr = document.createElement("tr");
    tr.id='detalle-'+fila.id;
    var td = tr.insertCell(0);
    td.innerHTML=detalle[iden[2]-1];
    td.colSpan = tds+1;
    $("#"+fila.id).after(tr);
    tr.appendChild(td);
}

var verificarDetalle = function(fila,detalles){
    var fDetalle = document.getElementById('detalle-'+fila.id);
    if(fDetalle == null) crearDetalle(fila,detalles);
    else verificarVisibilidad(fDetalle.id);
}

var verificarVisibilidad = function(id){
    var filaDetalle = document.getElementById(id);
    var visible = filaDetalle.style.display;
    //alert("visibilidad" + visible);
    if(visible == '' || visible == 'table-row'){
        ocultarDetalle(id);
    }else if(visible == 'none'){
        mostrarDetalle(id);
    }

}

var ocultarDetalle = function(id){
    $("#"+id).hide();
}

var mostrarDetalle = function(id){
    $("#"+id).show();
}