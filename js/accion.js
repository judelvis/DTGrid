function evaluaAccion(obj){
$(".accion").click(function (event) {
    /*$.each(obj,function(clave,valor){
        alert(clave+"**"+valor);
    })*/
    var fila = this.parentNode.id.split("__");
    var tam = fila.length-1;
    var pos = fila[tam] - 1
    alert(JSON.stringify(obj));
    eval("alert(JSON.stringify(obj.cuerpo["+pos+"]))");
    alert("llega "+this.getAttribute("identificador"));
});
}