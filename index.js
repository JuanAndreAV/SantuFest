let restaurante;
let experiencia = 0;
let usuario;
let identificacion;
let telefono;

window.addEventListener('load', function () {
 var spinner = document.getElementById('spinner');
 spinner.classList.add('d-none');
})
window.addEventListener('DOMContentLoaded', function (){
    var spinner = this.document.getElementById('spinner');
    spinner.classList.remove('d-none');
})

const restaurantes=["ANTICUARIO","DONDE DONDO","EL SECRETO","FRUTOS DEL PARAISO","GREEN BURGER","HOJARASCA","LYLY COOK", "MUCUNA","Q2","THADDEUS"]
var caracteresEspeciales = /[!@#$%^&*()_+{}\[\]:;<>,.?~\\|]/;


const URL = "http://localhost:8080/api"

/*function closeVideo(){
    var videoContainer = document.getElementById("video-container");
    videoContainer.style.display ="none";
}
window.onload = function(){
    var videoContainer = document.getElementById("video-container");
    videoContainer.style.display = "flex";

}*/
//toggle texto
function toggleTexto(parrafoId,a){
    let parrafo = document.getElementById(parrafoId);
    if(parrafo.style.maxHeight === "100px"){
        parrafo.style.maxHeight = "none";
        a.innerHTML = "Leer menos";
    } else {
        parrafo.style.maxHeight = "100px";
        a.innerHTML = "Leer más";
    }
}

//calificación

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

//Envio de datos
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
            alert("No pudimos procesar tu solicitud:",e);
        
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
//Limitar caracteres

function limitarCaracteres (input, maxlength){
    input.addEventListener("input",function(){
if(input.value.length > maxlength){
    input.value = input.value.slice(0,maxlength)
}
})
}
limitarCaracteres(document.getElementById("usuario"), 40);
limitarCaracteres(document.getElementById("identificacion"), 10);
limitarCaracteres(document.getElementById("telefono"), 10);


//Validación de datos
function validar() {
    usuario=document.getElementById("usuario").value;
    identificacion=document.getElementById("identificacion").value;
    telefono=document.getElementById("telefono").value;

    let parrafo1 = document.getElementById("parrafo1");
    let parrafo2 = document.getElementById("parrafo2");
    let parrafo3 = document.getElementById("parrafo3");
    let parrafo4 = document.getElementById("parrafo4");
    let parrafo5 = document.getElementById("parrafo5");
    let input = document.getElementById("miCheckbox");

    if (usuario===""){
        parrafo1.setAttribute("style", "color:red",);
        parrafo1.textContent= "Ingresa tu nombre";
        return false;
    } 
    if (identificacion===""){
        parrafo2.setAttribute("style", "color:red",);
        parrafo2.innerText= "Ingresa tu identificación";
        return false;
    }
    if (telefono===""){
        parrafo3.setAttribute("style", "color:red",);
        parrafo3.innerText= "Ingresa un número de contacto";
        return false;
    }
    if(experiencia==0){
        parrafo4.setAttribute("style", "color:red",)
        return false;
    }
    if (!input.checked){
        parrafo5.setAttribute("style", "color:red",);
        parrafo5.innerText= "Debes aceptar política de tratamiento de datos"
        return false;
    }
    if (caracteresEspeciales.test(usuario)){
        alert("No se permiten caracteres especiales");
        return false;
    }
    else {
        sendForm()
        alert("Gracias por tu calificación: SantuFest 2023!")
        borrar()
    }
    
}
//Limitar caracteres

function limitarCaracteres (input, maxlength){
    input.addEventListener("input",function(){
if(input.value.length > maxlength){
    input.value = input.value.slice(0,maxlength)
}
})
}
limitarCaracteres(document.getElementById("usuario"), 40);
limitarCaracteres(document.getElementById("identificacion"), 10);
limitarCaracteres(document.getElementById("telefono"), 10);

//Eleccion restaurante
function nombreRestaurante (i) {
   restaurante=restaurantes[i]
   document.getElementById("esteRestaurante").innerText="Experiencia: "+restaurante;
    document.getElementById("h1votacion").innerText=restaurante;
    
}
//limpiar formulario

function borrar(){
    document.getElementById("usuario").value = "";
    document.getElementById("identificacion").value = "";
    document.getElementById("telefono").value = "";
    parrafo1.innerText = "";
    parrafo2.innerText = "";
    parrafo3.innerText = "";
    parrafo4.setAttribute("style", "color:#bbb",)
    parrafo5.innerText = "";
}

