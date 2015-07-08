function construirPaginador(div,identificador,total,tam){
    var pagNuevo = document.createElement("ul");
    pagNuevo.id= "pag__"+identificador;
    pagNuevo.className= "pagination";
    div.appendChild(pagNuevo);
    var paginas = Math.floor(total) / tam;
    var atras = document.createElement("li");
    atras.className="disabled waves-effect";
    var i = document.createElement("i");
    i.className = "mdi-hardware-keyboard-arrow-left";
    atras.appendChild(i);
    pagNuevo.appendChild(atras);
    for(var i = 1 ;i<=paginas;i++){
        var li = document.createElement("li");
        li.id = "pag__"+identificador+i;
         $("[pagina="+identificador+i).toggleClass("hide");
        if(i==1){
            li.className ="active";
            $("[pagina="+identificador+i).toggleClass("hide");
        }
        li.className +=" waves-effect";
        li.setAttribute("pag",i);
        pagNuevo.appendChild(li);
        var a = document.createElement("a");
        a.href ="#!";
        a.innerHTML = i;
        li.appendChild(a);
    }
    var adelante = document.createElement("li");
    var ia = document.createElement("i");
    ia.className = "mdi-hardware-keyboard-arrow-right";
    adelante.appendChild(ia);
    pagNuevo.appendChild(adelante);

    cambiarPaginas(identificador);
}

function cambiarPaginas(iden){
    $("#pag__"+iden+" li").click(function (event) {
        var pag = this.getAttribute("pag");
        var paginaActual = $("#pag__"+iden).find(".active").index();
        $("#pag__"+iden+paginaActual).toggleClass("active");
        $("[pagina="+iden+paginaActual).toggleClass("hide");
        $("#pag__"+iden+pag).toggleClass("active");
        $("[pagina="+iden+pag).toggleClass("hide");

    });
}