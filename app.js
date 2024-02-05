//CAMBIO DE IMAGEN
let imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", () => {
  imagen.src = "images/img-main-2.png";
});

imagen.addEventListener("mouseout", () => {
  imagen.src = "images/img-main.png";
});

// CARDS SABER MAS

let mas = document.querySelectorAll(".card-port .btn-mas");
let parrafo = document.querySelectorAll(".card-port-hide .p-mas");
let git = document.querySelectorAll(".card-port-hide .git");
let menos = document.querySelectorAll(".card-port-hide .btn-menos");
let cardOriginal = document.querySelectorAll(".card-port");
let cardMas = document.querySelectorAll(".card-port-hide");

mas.forEach((masList, index) => {
  //como querySelector llama una coleccion de elementos, tengo que lograr iterar sobre cada uno
  masList.addEventListener("click", () => {
    //una vez que logro acceder a cada elemento utilizo el evento
    let indexCardOriginal = cardOriginal[index]; //aca  necesito acceder a cada una de las cards
    let indexCardMas = cardMas[index];
    indexCardOriginal.style.display = "none"; //una vez que accedi a cada indice, llevo a cabo el cambio de estilo
    indexCardMas.style.display = "inline";
  });
});

//aca para ver menos hago lo mismo, pero usando el otro boton
menos.forEach((menosList, index) => {
  menosList.addEventListener("click", () => {
    let cardOriginalindex = cardOriginal[index];
    let cardMasIndex = cardMas[index];
    cardOriginalindex.style.display = "inline";
    cardMasIndex.style.display = "none";
  });
});

// MENSAJE FORMULARIO

let form = document.querySelector(".form");
let send = document.querySelector(".btn-contact");
let message = document.querySelector(".message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  message.style.color = "red";
  message.style.fontSize = "10px";
  message.style.textAlign = "center";
  message.innerText = "Gracias! Su formulario ha sido enviado.";


  document.querySelector(".form-area").value="";
  document.getElementById("form-phone").value="";
  document.querySelector(".form-area-email").value="";
  document.querySelector(".form-area-subject").value="";
  document.querySelector(".form-area-message").value="";
});

// Slider para las cards en la sección "What I Do":
// Agrupa todas las cards en una fila utilizando un contenedor. Establece
// un ancho fijo al contenedor para que solo se muestre una parte.
// Crea un ‘slider’ agregando así botones de desplazamiento (izquierda y
// derecha) para cambiar la posición del contenedor y mostrar más cards.

