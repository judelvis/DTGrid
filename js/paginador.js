function construirPaginador(div,identificador,total,tam){
    var pagNuevo = document.createElement("ul");
    pagNuevo.id= "pag__"+identificador;
    pagNuevo.className= "pagination";
    div.appendChild(pagNuevo);
    var paginas = Math.floor(total) / tam;
    alert(paginas);
    for(var i = 1 ;i<=paginas;i++){
        var li = document.createElement("li");
        li.className="waves-effect";
        pagNuevo.appendChild(li);
        var a = document.createElement("a");
        a.href ="!#";
        a.innerHTML = i;
        li.appendChild(a);
    }
    alert("llega");
}