//CAMBIO DE IMAGEN
let imagen = document.getElementById("imagen");

imagen.addEventListener("mouseover", () => {
  imagen.src = "images/img-main-2.png";
});

imagen.addEventListener("mouseout", () => {
  imagen.src = "images/img-main.png";
});

// Mostrar más información en la sección de My Portfolio:
// ● Agrega un botón "Saber más" a cada tarjeta de la sección de Portfolio.
// ● Añade un estilo a la cards para mostrar una caja superpuesta con más
// texto al hacer click en ‘saber más’, la misma incluye un botón de
// GitHub en la caja superpuesta que lleva al repositorio. Agrega un botón
// "Cerrar" en la caja superpuesta para cerrarla y volver a la vista original.

let mas = document.querySelectorAll(".card-port .btn-mas");
let parrafo = document.querySelectorAll(".card-port-hide .p-mas");
let git = document.querySelectorAll(".card-port-hide .git");
let menos = document.querySelectorAll(".card-port-hide .btn-menos");
let cardOriginal = document.querySelectorAll(".card-port");
let cardMas = document.querySelectorAll(".card-port-hide");

mas.forEach((masList, index) => { //como querySelector llama una coleccion de elementos, tengo que lograr iterar sobre cada uno 
  masList.addEventListener("click", () => { //una vez que logro acceder a cada elemento utilizo el evento
    let indexCardOriginal = cardOriginal[index]; //aca  necesito acceder a cada una de las cards 
    let indexCardMas = cardMas[index];
    indexCardOriginal.style.display = "none"; //una vez que accedi a cada indice, llevo a cabo el cambio de estilo
    indexCardMas.style.display = "inline";
  });
});

//aca para ver menos hago lo mismo, pero usando el otro boton 9
menos.forEach((menosList, index) => {
    menosList.addEventListener("click", ()=>{
    let cardOriginalindex = cardOriginal[index];
    let cardMasIndex = cardMas[index];
    cardOriginalindex.style.display = "inline";
    cardMasIndex.style.display = "none";
    });
});