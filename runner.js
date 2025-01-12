


//Estilos barra de inicio
let list = document.querySelectorAll(".navigation li");

function activelink() {
  list.forEach((element) => {
    element.classList.remove("hovered");
  });
  this.classList.add("hovered");
}
list.forEach((item) => item.addEventListener("mouseover", activelink));
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");
console.log(toggle, navigation, main);

toggle.onclick = function () {
  navigation.classList.toggle("active");
  main.classList.toggle("active");
  
};










// botonesHeader.forEach(boton=> boton.addEventListener("click",(event)=>{
//     const botonId = event.currentTarget.id;
//     formularioEntrada.classList.remove("contenedor-ocupacion");
//     formularioEntrada.classList.add("contenedor-formulario");
//     formularioEntrada.innerHTML="";
//     // descripcion.innerHTML="";

//     switch(botonId){
//         case "registro_entrada":
//             mostrar_Formulario_Entrada();
//             break;
//         case "registro_salida":
//             mostrar_Formulario_Salida();
//             break;
//         case "registro_modificar":
//             tablaModificarDatos();
//             break;
//         case "registro_ocupacion":
//             ocupacion ();
//             break;
//         case "ver_registro":
//             mostrarTablaHistorial ();
//             break;
//         case "otra-imagen":
//             mostrarInicio();
//             break;
//     }
// }));