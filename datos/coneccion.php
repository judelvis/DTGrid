<?php
$enlace =  mysql_connect('localhost', 'root', '123');
if (!$enlace) {
    die('No pudo conectarse: ' . mysql_error());
}
mysql_select_db('19-01-2015', $enlace);
?>