<?php
include('../datos/coneccion.php');
$datos = json_decode($_POST['datos'],true);
$tablas = array();
mysql_query("SET NAMES 'utf8'");
$resultado = mysql_query('SELECT * from t_clientes_creditos WHERE numero_factura="'.$datos[0].'" ');
$cuerpoConsulta = array();
$cabeceraConsulta = array('Contrato','Monto','M.Cuota','N.Cuota');
while ($fila = mysql_fetch_assoc($resultado)) {
    $cuerpoConsulta[]= array($fila['contrato_id'],$fila['cantidad'],$fila['monto_cuota'],$fila['numero_cuotas']);
}
$tablas[] = array('cabecera'=>$cabeceraConsulta,'cuerpo'=>$cuerpoConsulta);
echo json_encode($tablas);
?>