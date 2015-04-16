<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons.css">
    <link rel="stylesheet" href="../css/dataTable.css">
    <script type="text/javascript" src="../js/include/jquery-2.1.3.min.js"></script>
    <script type="text/javascript" src="../js/dtgrid.js"></script>
    <script>
        $(function() {
            var datos = {'tipoOrigen':'script','rutaObjeto':'../js/estatico/datos.js','parametro':'objetoNuevo'};
            $("#div").dtgrid(datos);
        });
    </script>
</head>
<body>
<h1><p>Prueba de grid Basico con origen script</p></h1>
<div id='div'>aqui esta el div</div>
</body>
</html>