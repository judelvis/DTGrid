<?php
include('../datos/coneccion.php');
$tablas = array();
$resultado = mysql_query('SELECT * from t_clientes_creditos limit 40');
$cuerpoConsulta = array();
$cabeceraConsulta = array('Cedula','Contrato','Factura','Fecha Incio Cobro','Bancos');
while ($fila = mysql_fetch_assoc($resultado)) {
    $cuerpoConsulta[]= array($fila['documento_id'],$fila['contrato_id'],$fila['numero_factura'].'||'.$fila['monto_cuota'],$fila['fecha_inicio_cobro'],$fila['cobrado_en']);
}
$tablas[] = array('cabecera'=>$cabeceraConsulta,'cuerpo'=>$cuerpoConsulta);
echo json_encode($tablas);
?>