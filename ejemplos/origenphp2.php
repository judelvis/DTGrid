
<?php
header("Content-Type: text/html;charset=utf-8");
include('../datos/coneccion.php');
$tablas = array();
mysql_query("SET NAMES 'utf8'");

$resultado = mysql_query('SELECT * from t_personas limit 20');
$cuerpoConsulta = array();
$cabeceraConsulta = array('Cedula','Nombre','Banco','Fecha_Nacimiento','Cuenta');

while ($fila = mysql_fetch_assoc($resultado)) {
    $nombre = $fila['primer_nombre']." ".$fila['primer_apellido'];
    $cuerpoConsulta[]= array($fila['documento_id'],$nombre,$fila['banco_1'].'.',$fila['fecha_nacimiento'].'.',$fila['cuenta_1'].'.');
}

$tablas[] = array('cabecera'=>$cabeceraConsulta,'cuerpo'=>$cuerpoConsulta);
echo json_encode($tablas);
?>