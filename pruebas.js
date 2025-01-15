//Estilos barra de inicio
let list = document.querySelectorAll(".navigation li");

function activelink() {
    list.forEach((element) => {
        element.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

// INDICADORES DE CLASES
list.forEach((item) => item.addEventListener("mouseover", activelink));
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");


let botonIniciar = document.querySelector(".iniciar")
let menu = document.querySelector(".header-container");
let welcome = document.querySelector(".welcome");
let first = document.querySelector(".first");
let introAbout = document.querySelector(".introAbout");
let soyFoto = document.querySelector(".foto");
let soyTexto = document.querySelector(".texto");
console.log(toggle, navigation, main);


// HACER CLICK TOGGLE
toggle.onclick = function () {
    navigation.classList.toggle("active");

    soyFoto.classList.toggle("active");
    // main.classList.toggle("active");
    // menu.classList.toggle("active");

};

// HACER CLICK EN GO!
botonIniciar.onclick = function(){
    menu.classList.toggle("active");
    first.classList.toggle("active"); //Desaparece Introduccion
    botonIniciar.classList.toggle("active"); //Desaparece boton

    // Aparece Think luego se arregla el main
    introAbout.style.display = 'flex'; // Se asegura de estar en el flujo
    setTimeout(() => {
        introAbout.classList.add('active'); // Aparece suavemente

        // Desaparece suavemente después de 1.2s
        setTimeout(() => {
            introAbout.classList.remove('active'); // Comienza a desaparecer
            introAbout.classList.add('inactive'); // Controla opacidad a 0

            setTimeout(() => {
                introAbout.style.display = 'none'; // Remueve completamente del flujo
                introAbout.classList.remove('inactive'); // Limpia la clase
                main.classList.toggle("active"); // Muestra el contenido principal
                soyFoto.style.display = 'flex';
                soyTexto.style.display = 'flex';
            }, 1000); // Tiempo de transición de opacidad (1s)
        }, 1200); // Tiempo de visibilidad de "Think..." (1.2s)
    }, 300); // Retraso antes de mostrar "Think..." (300ms)
};

// DESVANECER el WELCOME
setTimeout(() => {
    welcome.classList.add('active'); // Agrega la clase para ocultarlo

    setTimeout(() => {
        welcome.style.display = 'none'; // Quita completamente el elemento
    }, 1500);  
}, 1500); // 1500 ms = 1.5 segundos

// APARECER BOTON GO y Demas
setTimeout(() => {
    botonIniciar.classList.add('active'); 
    first.classList.add('active');
}, 3100);


















