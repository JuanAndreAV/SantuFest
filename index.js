let restaurante;
let hamburguesa;
let experiencia;
let usuario;
let identificacion;
let factura;


let rating=0
const restaurantes=["restaurante 1","restaurante 2","restaurante 3","restaurante 4"]






function calificarHamburguesa(item){
    hamburguesa=item.id[0];
    let nombre=item.id.substring(1);
    for(let i=0;i<5;i++)
    if(i<hamburguesa){
        document.getElementById((i+1)+nombre).style.color="gold";
    }else{
        document.getElementById((i+1)+nombre).style.color="#bbb";
    }
}
function calificarRestaurante(item){
    experiencia=item.id[0];
    let nombre=item.id.substring(1);
    for(let i=0;i<5;i++)
    if(i<experiencia){
        document.getElementById((i+1)+nombre).style.color="gold";
    }else{
        document.getElementById((i+1)+nombre).style.color="#bbb";
    }
}



function mensaje() {
    usuario=document.getElementById("usuario").value;
    identificacion=document.getElementById("identificacion").value;
    factura=document.getElementById("factura").value;
    alert(usuario+" calificaste: " +hamburguesa +" estrellas para hamburguesa "+" y "+experiencia+
    " estrellas para experiencia en "+restaurante+" identificacion: "+identificacion+" factura: "+factura) 

}

function nombreRestaurante (i) {
   restaurante=restaurantes[i]
   document.getElementById("esteRestaurante").innerText="Experiencia "+restaurante;
    document.getElementById("h1votacion").innerText="Votación "+restaurante;
    
}




