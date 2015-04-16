$(function() {
    $("[detalle=pre]").click(function (event) {
        var identificadores = this.id.split('-');
        var cuerpo = document.getElementById('cuerpo-' + identificadores[1]);
        var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]);
        verificarDetalle(fila);
    });
});

function crearDetalle(fila){
    var tds=$("#"+fila.id+":first td").length;
    var tr = document.createElement("tr");
    tr.id='detalle-'+fila.id;
    var td = tr.insertCell(0);
    td.innerHTML='epale';
    td.colSpan = tds+1;
    $("#"+fila.id).after(tr);
    tr.appendChild(td);
}

function verificarDetalle(fila){
    var fDetalle = document.getElementById('detalle-'+fila.id);
    if(fDetalle == null) crearDetalle(fila);
    else verificarVisibilidad(fDetalle.id);
}

function verificarVisibilidad(id){
    var filaDetalle = document.getElementById(id);
    var visible = filaDetalle.style.display;
    if(visible == '' || visible == 'table-row'){
        ocultarDetalle(id);
    }else if(visible == 'none'){
        mostrarDetalle(id);
    }

}

function ocultarDetalle(id){
    $("#"+id).hide();
}

function mostrarDetalle(id){
    $("#"+id).show();
}