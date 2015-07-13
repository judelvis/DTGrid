<!DOCTYPE html>
<html>
<head>
    <!--<link rel="stylesheet" href="https://ssl.gstatic.com/docs/script/css/add-ons.css">!-->
    <link rel="stylesheet" href="../css/dataTable.css">
    <link type="text/css" rel="stylesheet" href="../md/css/materialize.min.css" media="screen,projection"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <script type="text/javascript" src="../js/include/jquery-2.1.3.min.js"></script>

    <script type="text/javascript" src="../js/dtgrid.js"></script>
    <script type="text/javascript" src="../js/detalle.js"></script>
    <script type="text/javascript" src="../js/editar.js"></script>
    <script type="text/javascript" src="../js/paginador.js"></script>
    <script type="text/javascript" src="../js/filtro.js"></script>
    <script type="text/javascript" src="../js/enlace.js"></script>

    <script>
        $(function () {
            var datosCombo = {'0': 'Venezuela', '1': 'Provincial'};
            /*var datos = {'tipoOrigen':'script','rutaObjeto':'../js/estatico/datos.js','parametro':'objetoNuevo'};
             $("#prueba").dtgrid(datos,[{'titulo':'titulo1','enumera':false,'editable':{'c4':'texto','c4':'calendario'}}]);*/
            var json = jQuery.parseJSON($("#objeto_local").html());
            var datos2 = {'tipoOrigen': 'var', 'rutaObjeto': json, 'parametro': ''};
            $("#otro").dtgrid(datos2, [{
                'titulo': 'Tabla1',
                "filtro":[1],
                'clase' : "brown darken-4  light-green-text lighten-4-text",
                "detalle": {"tipo": "pre"},
                'editable': {'c1': 'texto', 'c3': 'texto', 'c4': datosCombo},
                "accion": [{
                    "ejecuta": "primera_funcion",
                    "tipo": "script",
                    "clase": "mdi-action-store",
                    "parametro": [2, 4],
                    "ocultar":true
                }, {
                    "ejecuta": "accion.php",
                    "parametro": [],
                    "tipo": "php",
                    "clase": "mdi-action-done"
                }, {
                    "ejecuta": "primera_funcion",
                    "parametro": [1, 3],
                    "tipo": "script",
                    "clase": "mdi-action-book"
                }, {
                    "ejecuta": "segunda_funcion",
                    "parametro": [2],
                    "tipo": "script",
                    "clase": "mdi-action-delete",
                    "texto": "Borrar"
                }]
            }, {'titulo': 'tabla2', "detalle": {"tipo": "pre"}, 'enumera': true, 'editable': {'c1': 'texto'}},
                {"titulo":"Titulo de la tabla sencilla","enlace":[{"columna":"1","url":"basico_origen_php.php","target":"_blank","codeigniter":true},{"columna":"3","url":"basico_origen_script.php"}]}]);
            var para = 'cedula=17456121';
            var datos3 = {'tipoOrigen': 'php', 'rutaObjeto': 'origenphp.php', 'parametro': para};

            $("#prueba").dtgrid(datos3, [{
                'titulo': 'titulo1',
                'clase':"indigo",
                'filtro': [1,3],
                'oculto': [2],
                "detalle": {"tipo": "post", "ruta": 'detalle.php', "parametro": [1]},
                'editable': {'c4': 'calendario', 'c5': datosCombo},
                'enumera': true,
                'paginador': 10
            }]);
            var datos4 = {'tipoOrigen': 'php', 'rutaObjeto': 'origenphp2.php'};
            var datos5 = {'tipoOrigen': 'php', 'rutaObjeto': 'detalle2.php'};
            var datos6 = {'tipoOrigen': 'php', 'rutaObjeto': 'detalle3.php'};
            //Grid Con detalle tipo grid, de tipo dtgrid
            //var configDetalle = {'titulo':'Facturas','detalle':{'tipo':'dtgrid','origen':datos6,'config':{},'parametro':[1]}};
            //$("#det").dtgrid(datos4,{'titulo':"Detalle Grid",'editable':{'c4':'calendario'},'detalle':{'tipo':'dtgrid',"origen":datos5,'config':configDetalle,'parametro':[1,2]}});
            //Grid Con detalle tipo grid, de tipo pre
            //var configDetalle = {'titulo':'Facturas','detalle':{'tipo':'pre'}};
            //$("#det").dtgrid(datos4,{'titulo':"Detalle Grid",'editable':{'c4':'calendario'},'detalle':{'tipo':'dtgrid',"origen":datos5,'config':configDetalle,'parametro':[1,2]}});
            var configDetalle = {
                'titulo': 'Facturass',
                'editable': {'c1': 'texto'},
                "accion": [{
                    "ejecuta": "primera_funcion",
                    "parametro": [1, 3],
                    "tipo": "script",
                    "clase": "mdi-action-store",
                    "texto": "prueba",
                    "ocultar":true
                }, {
                    "ejecuta": "segunda_funcion",
                    "parametro": [],
                    "tipo": "script",
                    "clase": "mdi-action-done"
                }, {
                    "ejecuta": "primera_funcion",
                    "parametro": [1, 3],
                    "tipo": "script",
                    "clase": "mdi-action-book"
                }, {
                    "ejecuta": "segunda_funcion",
                    "parametro": [],
                    "tipo": "script",
                    "clase": "mdi-action-delete",
                    "texto": "Borrar",
                                  }],
                'detalle': {'tipo': 'post', 'ruta': 'detalle.php', 'parametro': [6, 1]}
            };
            $("#det_1").dtgrid(datos4, {
                'titulo': "Detalle Grid",
                'editable': {'c4': 'calendario'},
                'detalle': {'tipo': 'dtgrid', "origen": datos5, 'config': configDetalle, 'parametro': [1, 2]}
            });


        });

        function primera_funcion(datos) {
            alert("primer dato:" + datos[0] + "**segundo dato:" + datos[1]);
        }
    </script>
    <script type="text/javascript" src="../js/accion.js"></script>
    <script type="text/javascript" src="../md/js/materialize.min.js"></script>
</head>
<body>
<div class="container">
    <div class="card-panel blue lighten-4 z-depth-5"><p>Prueba de grid Basico</p>
        <?php

        $tablas = array();
        for ($h = 0; $h < 3; $h++) {
            $cuerpo = array();
            $detalle = array();
            $cabecera = array('cabecera1', 'cabecera2', 'cabecera3', 'cabecera4');
            for ($i = 1; $i <= 10; $i++) {
                $cuerpo[] = array("campo1" . $i, "campo2" . $i, "campo3" . $i, "campo4" . $i);
                $detalle[] = "<h1>Detalle " . $h . $i . "</h1>";
            }
            $tablas[] = array("cabecera" => $cabecera, "cuerpo" => $cuerpo, "detalle" => $detalle);
        }
        print("<pre>Estructura de arreglo de datos<br>");
        //print_R($tablas);
        ?>
        <p id='objeto_local' class="truncate"><?php echo json_encode($tablas, true); ?></p>
    </div>
    <div id='otro'>Prueba de Grid Multiples en un Div con origen objeto local (otro)</div><br>
    <div id='prueba' >Grid Con Detalle Post (prueba)</div><br>


    <div id='det_1' >Prueba Grid Detalle Grid (det)</div>
</body>

</html>