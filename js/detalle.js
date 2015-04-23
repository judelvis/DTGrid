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

        if(identificadores.length == 3) var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]);
        else var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]+'-'+identificadores[3]+'-'+identificadores[4]);
        //alert('**/'+fila.id);
        //alert('fila-'+identificadores[1]+'-'+identificadores[2]);
        //alert(identificadores);
        //alert(JSON.stringify(detalle));
        verificarDetalle(fila,detalle,2);
    });
}

var crearDetalle = function(id,detalle){
    var tds=$("#"+id+":first td").length;
    var idPicado = id.split('-');
    var tr = document.createElement("tr");
    if(idPicado.length==3)tr.id=idPicado[1]+'-'+idPicado[2]+'-detalle';
    else tr.id=idPicado[1]+'-'+idPicado[2]+'-'+idPicado[3]+'-'+idPicado[4];
    var td = tr.insertCell(0);
    td.id = tr.id+'_celda';
    td.colSpan = tds+1;
    $("#"+id).after(tr);
    tr.appendChild(td);
}



var verificarDetalle = function(fila,detalles,tipo){
    var idPicado = fila.id.split('-');
    if(idPicado.length == 3) var fDetalle = document.getElementById(idPicado[1]+'-'+idPicado[2]+'-detalle');
    else var fDetalle = document.getElementById(idPicado[1]+'-'+idPicado[2]+'-'+idPicado[3]+'-'+idPicado[4]);
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
    $("#"+iden[1]+"-"+iden[2]+"-detalle_celda").html(contenido[iden[2]-1]);
}

var asignarDetallePost = function(id,objDetalle){
    var iden = id.split('-');
    var para = [];
    $.each(objDetalle.parametro, function(pos,valor){
        para.push($("#"+id).find("[columna="+iden[1]+'-'+valor+"]").html());
    });
    $.ajax({url : objDetalle.ruta,type : "POST",data : "datos="+JSON.stringify(para),//dataType : "json",
        success : function(resp) {
            $("#"+iden[1]+'-'+iden[2]+"-detalle_celda").html(resp);
        }
    });
}

var asignarDetalleGrid = function(id,objDetalle){
    var iden = id.split('-');
    var para = [];
    if(iden.length == 3){
        $.each(objDetalle.parametro, function(pos,valor){
            para.push($("#"+id).find("[columna="+iden[1]+'-'+valor+"]").html());
        });
        objDetalle.origen.parametro = "datos="+JSON.stringify(para);
        $("#"+iden[1]+'-'+iden[2]+"-detalle_celda").dtgrid(objDetalle.origen,objDetalle.config);
    }else{
        $.each(objDetalle.parametro, function(pos,valor){
            alert(iden + '/**/'+"[columna="+iden[1]+'-'+iden[2]+'-'+iden[3]+"-"+valor+"]");
            para.push($("#"+id).find("[columna="+iden[1]+'-'+iden[2]+'-'+iden[3]+"-"+valor+"]").html());
        });
        objDetalle.origen.parametro = "datos="+JSON.stringify(para);
        $("#"+iden[1]+'-'+iden[2]+"-"+iden[3]+"-"+iden[4]+'_celda').dtgrid(objDetalle.origen,objDetalle.config);
    }
    //alert(objDetalle.parametro);

    alert(para);


}