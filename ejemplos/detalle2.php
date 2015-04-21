<?php
include('../datos/coneccion.php');
$datos = json_decode($_POST['datos'],true);
$tablas = array();
mysql_query("SET NAMES 'utf8'");
$resultado = mysql_query('SELECT *,sum(cantidad)as total from t_clientes_creditos WHERE documento_id="'.$datos[0].'" GROUP BY numero_factura');
$cuerpoConsulta = array();
$cabeceraConsulta = array('Factura','Linaje','Monto','Fecha Incio Cobro','Nomina');
while ($fila = mysql_fetch_assoc($resultado)) {
    $cuerpoConsulta[]= array($fila['numero_factura'],$fila['cobrado_en'],$fila['total'],$fila['fecha_inicio_cobro'],$fila['nomina_procedencia']);
}
$tablas[] = array('cabecera'=>$cabeceraConsulta,'cuerpo'=>$cuerpoConsulta);
echo json_encode($tablas);


?>