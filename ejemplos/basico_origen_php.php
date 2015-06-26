<!DOCTYPE html>
<html>
<head>
    <!--<link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons.css">
    <link rel="stylesheet" href="../css/dataTable.css">!-->
    <link type="text/css" rel="stylesheet" href="../md/css/materialize.min.css"  media="screen,projection"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <script type="text/javascript" src="../js/include/jquery-2.1.3.min.js"></script>
    <script type="text/javascript" src="../md/js/materialize.min.js"></script>
    <script type="text/javascript" src="../js/dtgrid.js"></script>
    <script>
        $(function() {
            var para = 'cedula=17456121';
            var datos = {'tipoOrigen':'php','rutaObjeto':'origenphp.php','parametro':para};
            $("#div").dtgrid(datos);
        });
    </script>
</head>
<body>
<div class="container">
    <div class="card-panel teal lighten-2 z-depth-5"><h1><p class="blue-text text-darken-2">Prueba de grid Basico con origen php</p></h1></div>

    <div id='div' >Este div se encuentra vacio</div>
</div>

</body>
</html>