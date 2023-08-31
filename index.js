let restaurante;
let experiencia = 0;
let usuario;
let identificacion;
let telefono;

const restaurantes=["restaurante 1","restaurante 2","restaurante 3","restaurante 4"]


const URL = "http://localhost:8080/api"



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
async function sendForm(){
    try {
        await fetch(URL + "/votes?" + new URLSearchParams({
            restaurantId: restaurante,
            invoiceId:telefono,
            customerId: identificacion,
            customerName: usuario,
            productScore: 0,
            attentionScore: experiencia
        }), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then((response) => {
            getFromRestaurant(1);
        });
    } catch (e) {

    }
}

async function getFromRestaurant(id){
    try {
        await fetch(URL + "/votes/restaurant/" + id, {
            method: "GET"
        }).then((response) => {
            response.json().then(function(j) { 
                console.log(j); 
            });
        }).catch(error => {
            console.log(error);
        });
    } catch (e) {

    }
}




function mensaje() {
    usuario=document.getElementById("usuario").value;
    identificacion=document.getElementById("identificacion").value;
    telefono=document.getElementById("factura").value;
    sendForm();

}

function nombreRestaurante (i) {
   restaurante=restaurantes[i]
   document.getElementById("esteRestaurante").innerText="Experiencia: "+restaurante;
    document.getElementById("h1votacion").innerText="Votación: "+restaurante;
    
}




