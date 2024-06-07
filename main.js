window.onload = ()=>{
    document.getElementById("boton").addEventListener("click", ()=>{
        
        var fecha = document.getElementById("fecha").value;

        var nombre = document.getElementById("nombre").value;

        var apellido = document.getElementById("apellido").value;

        var opcion = document.getElementById("opcion").value;

        var texto = document.getElementById("texto").value;

        var texto = `Hola me llamo ${nombre} ${apellido}, 
        y queria reservar un turno de ${opcion} para el ${fecha}, ${texto}`;
    
        var tel = +5491125105949;
    
        var url = `https://api.whatsapp.com/send?phone=${tel}&text=${texto}`;
    
        window.open(url);
        return;

    })
}