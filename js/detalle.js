function fdetpre(detalles,identificador){
    $("[detalle="+identificador+"-pre]").click(function (event) {
        var identificadores = this.id.split('-');
        var cuerpo = document.getElementById('cuerpo-' + identificadores[1]);
        //var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]);
        if(identificadores.length == 3) var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]);
        else var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]+'-'+identificadores[3]+'-'+identificadores[4]);
        verificarDetalle(fila,detalles,0);
    });
}

function fdetpost(detalle,identificador){
    $("[detalle="+identificador+"-post]").click(function (event) {
        var identificadores = this.id.split('-');
        var cuerpo = document.getElementById('cuerpo-' + identificadores[1]);
        if(identificadores.length == 3) var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]);
        else var fila = document.getElementById('fila-'+identificadores[1]+'-'+identificadores[2]+'-'+identificadores[3]+'-'+identificadores[4]);
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
        verificarDetalle(fila,detalle,2);
    });
}

var crearDetalle = function(id){
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



var verificarDetalle = function(fila,detalles,tipo){//alert(detalles);
    var idPicado = fila.id.split('-');
    if(idPicado.length == 3) var fDetalle = document.getElementById(idPicado[1]+'-'+idPicado[2]+'-detalle');
    else var fDetalle = document.getElementById(idPicado[1]+'-'+idPicado[2]+'-'+idPicado[3]+'-'+idPicado[4]);
    if(fDetalle == null) {
        crearDetalle(fila.id);
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
    var html = contenido;
    if(iden.length == 3){
        if(contenido.length > 1) html = contenido[iden[2]-1];
        $("#"+iden[1]+"-"+iden[2]+"-detalle_celda").html(html);
    }else{
        if(contenido.length > 1) html = contenido[iden[4]-1];
        $("#"+iden[1]+"-"+iden[2]+"-"+iden[3]+"-"+iden[4]+'_celda').html(html);
    }
}

var asignarDetallePost = function(id,objDetalle){
    var iden = id.split('-');
    var para = [];
    if(iden.length == 3){
        $.each(objDetalle.parametro, function(pos,valor){
            para.push($("#"+id).find("[columna="+iden[1]+'-'+valor+"]").html());
        });
        $.ajax({url : objDetalle.ruta,type : "POST",data : "datos="+JSON.stringify(para),//dataType : "json",
            success : function(resp) {
                $("#"+iden[1]+'-'+iden[2]+"-detalle_celda").html(resp);
            }
        });
    }else{
        $.each(objDetalle.parametro, function(pos,valor){
            para.push($("#"+id).find("[columna="+iden[1]+"-"+iden[2]+"-"+iden[3]+"-"+valor+"]").html());
        });
        $.ajax({url : objDetalle.ruta,type : "POST",data : "datos="+JSON.stringify(para),//dataType : "json",
            success : function(resp) {
                $("#"+iden[1]+"-"+iden[2]+"-"+iden[3]+"-"+iden[4]+'_celda').html(resp);
            }
        });

    }
}

var asignarDetalleGrid = function(id,objDetalle){
    var iden = id.split('-');var para = [];
    if(iden.length == 3){
        $.each(objDetalle.parametro, function(pos,valor){para.push($("#"+id).find("[columna="+iden[1]+'-'+valor+"]").html());});
        objDetalle.origen.parametro = "datos="+JSON.stringify(para);
        $("#"+iden[1]+'-'+iden[2]+"-detalle_celda").dtgrid(objDetalle.origen,objDetalle.config);
    }else{
        $.each(objDetalle.parametro, function(pos,valor){para.push($("#"+id).find("[columna="+iden[1]+'-'+iden[2]+'-'+iden[3]+"-"+valor+"]").html());});
        objDetalle.origen.parametro = "datos="+JSON.stringify(para);
        $("#"+iden[1]+'-'+iden[2]+"-"+iden[3]+"-"+iden[4]+'_celda').dtgrid(objDetalle.origen,objDetalle.config);
    }
}