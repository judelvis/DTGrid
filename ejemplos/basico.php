<!DOCTYPE html>
<html>
	<head>
		<!--<link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons.css">!-->
		<link rel="stylesheet" href="../css/dataTable.css">
		<script type="text/javascript" src="../js/include/jquery-2.1.3.min.js"></script>
		<script type="text/javascript" src="../js/dtgrid.js"></script>
        <script type="text/javascript" src="../js/editar.js"></script>

		<script>
			$(function() {
                /*var datos = {'tipoOrigen':'script','rutaObjeto':'../js/estatico/datos.js','parametro':'objetoNuevo'};
                $("#prueba").dtgrid(datos,[{'titulo':'titulo1','enumera':false,'editable':{'c4':'texto','c4':'calendario'}}]);*/
				var json = jQuery.parseJSON($("#objeto_local").html());
				var datos2 = {'tipoOrigen':'var','rutaObjeto':json,'parametro':''};
				$("#otro").dtgrid(datos2,[{'titulo':'Tabla1',"detalle":{"tipo":"pre"},'editable': {'c1':'texto','c3':'texto','c4':'calendario'}},{'titulo':'tabla2','enumera':true,'editable':{'c1':'texto'}}]);
                var para = 'cedula=17456121';
                var datos2 = {'tipoOrigen':'php','rutaObjeto':'origenphp.php','parametro':para};
                var datosCombo = {'0':'Venezuela','1':'Provincial'};
                $("#prueba").dtgrid(datos2,[{'titulo':'titulo1','editable':{'c4':'calendario','c5':datosCombo},'enumera':true}]);

			});
		</script>
	</head>
<body>
<p>Prueba de grid Basico</p>

<?php

$tablas = array();
for($h=0;$h <2;$h++){
	$cuerpo = array();
    $detalle = array();
	$cabecera = array('cabecera1','cabecera2','cabecera3','cabecera4');	
	for($i=1;$i<=5;$i++){
		$cuerpo[] = array("campo1".$i,"campo2".$i,"campo3".$i,"campo4".$i);
        $detalle[] = "<h1>Detalle ".$i."</h1>";
	}
	$tablas[]=array("cabecera"=>$cabecera,"cuerpo"=>$cuerpo,"detalle"=>$detalle);
}
print("<pre>Estructura de arreglo de datos<br>");
//print_R($tablas);
?>
<h1>Tablas Generadas</h1>
<div id='prueba'>aqui esta el div1</div>
<p id='objeto_local'><?php echo json_encode($tablas,true);?></p>
<div id='otro'>aqui esta el div2</div>
</body>
    <script type="text/javascript" src="../js/detalle.js"></script>
</html>