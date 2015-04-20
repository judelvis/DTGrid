<?php
include('../datos/coneccion.php');
$datos = json_decode($_POST['datos'],true);
$tablas = array();
$resultado = mysql_query('SELECT * from t_personas WHERE documento_id="'.$datos[0].'" ');
$cuerpoConsulta = array();
$html = 'Datos Personales:<br>';
while ($fila = mysql_fetch_assoc($resultado)) {
    $html .= "Cedula_:".$fila['documento_id'].'<br>Nombre:'.$fila['primer_nombre'].' '.$fila['primer_apellido'];
}
echo $html;


?>