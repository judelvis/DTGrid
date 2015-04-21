function fdetpre(detalles,identificador){
    $("[detalle="+identificador+"-pre]").click(function (event) {
        var identificadores = this.id.split('-');
        var cuerpo = document.getElementById('cuerpo-' + identificadores[1]);
        var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]);
        verificarDetalle(fila,detalles,0);
    });
}

function fdetpost(detalle,identificador){
    $("[detalle="+identificador+"-post]").click(function (event) {
        var identificadores = this.id.split('-');
        var cuerpo = document.getElementById('cuerpo-' + identificadores[1]);
        var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]);
        //alert(JSON.stringify(detalle));
        verificarDetalle(fila,detalle,1);
    });
}

function fdetdtgrid(detalle,identificador){
    $("[detalle="+identificador+"-dtgrid]").click(function (event) {
        var identificadores = this.id.split('-');
        var cuerpo = document.getElementById('cuerpo-' + identificadores[1]);
        var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]);
        //alert(JSON.stringify(detalle));
        verificarDetalle(fila,detalle,2);
    });
}

var crearDetalle = function(id,detalle){
    var tds=$("#"+id+":first td").length;
    var tr = document.createElement("tr");
    tr.id='detalle-'+id;
    var td = tr.insertCell(0);
    td.id = 'celda-'+tr.id;
    td.colSpan = tds+1;
    $("#"+id).after(tr);
    tr.appendChild(td);
}



var verificarDetalle = function(fila,detalles,tipo){
    var fDetalle = document.getElementById('detalle-'+fila.id);
    if(fDetalle == null) {
        crearDetalle(fila.id,detalles);
        switch (tipo){
            case 0:asignarDetalle(fila.id,detalles);break;
            case 1:asignarDetallePost(fila.id,detalles);break;
            case 2:asignarDetalleGrid(fila.id,detalles);break;
        }

    }
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

var asignarDetalle = function(id,contenido){
    var iden = id.split('-');
    $("#celda-detalle-"+id).html(contenido[iden[2]-1]);
}

var asignarDetallePost = function(id,objDetalle){
    var iden = id.split('-');
    var para = [];
    $.each(objDetalle.parametro, function(pos,valor){
        para.push($("#"+id).find("[columna="+iden[1]+'-'+valor+"]").html());
    });
    $.ajax({url : objDetalle.ruta,type : "POST",data : "datos="+JSON.stringify(para),//dataType : "json",
        success : function(resp) {
            $("#celda-detalle-"+id).html(resp);
        }
    });
}

var asignarDetalleGrid = function(id,objDetalle){
    var iden = id.split('-');
    var para = [];
    //alert(objDetalle.origen.parametro);
    $.each(objDetalle.origen.parametro, function(pos,valor){
        para.push($("#"+id).find("[columna="+iden[1]+'-'+valor+"]").html());
    });
    objDetalle.origen.parametro = "datos="+JSON.stringify(para);
    alert(objDetalle.origen.parametro);
    $("#celda-detalle-"+id).dtgrid(objDetalle.origen);

}