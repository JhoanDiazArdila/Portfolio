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
const toggle = document.querySelector(".toggle");
const navigation = document.querySelector(".navigation");
const main = document.querySelector(".main");


const botonIniciar = document.querySelector(".iniciar")
const menu = document.querySelector(".header-container");
const welcome = document.querySelector(".welcome");
const first = document.querySelector(".first");
const introAbout = document.querySelector(".introAbout");
const soyFoto = document.querySelector(".foto");
const soyTexto = document.querySelector(".texto");

const flechaBajarAbout = document.querySelector("#bajarAbout");
const flechaSubirAbout = document.querySelector("#subirAbout");

const principles = document.querySelector(".principles");
const flechaBajarPrinci = document.querySelector("#bajarPrinci");
const flechaSubirPrinci = document.querySelector("#subirPrinci");

const mision = document.querySelector(".mision");
const flechaBajarMision = document.querySelector("#bajarMision");
const flechaSubirMision = document.querySelector("#subirMision");

const services = document.querySelector(".services");
const flechaBajarServices = document.querySelector("#bajarServi");
const flechaSubirServices = document.querySelector("#subirServi");




//BOTONES NAV
const botonAbout = document.querySelector("#about");
const botonServices = document.querySelector("#services");
const botonExpertise = document.querySelector("#expertise");
const botonProjects = document.querySelector("#projects");
const botonContact = document.querySelector("#contact");
const botonLanguaje = document.querySelector("#languageSelector");



// DESCARGAR CURRICULUM
document.addEventListener('DOMContentLoaded', () => {
  const link = document.getElementById('vitae');

  link.addEventListener('click', (event) => {
      event.preventDefault(); // Prevenir la navegación predeterminada

      const fileUrl = 'documentos/CurriculumVitae_JhoanDiaz.pdf'; // Cambia esto a la ubicación real del archivo
      const a = document.createElement('a');
      a.href = fileUrl;
      a.download = 'Curriculum_Vitae_JhoanDiaz.pdf'; // Nombre con el que se descargará
      a.click();
  });
});



// HACER CLICK TOGGLE
toggle.onclick = function () {
    navigation.classList.toggle("active");

    soyFoto.classList.toggle("active");
    // main.classList.toggle("active");
    // menu.classList.toggle("active");

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


flechaBajarAbout.onclick = function(){
  soyFoto.style.display = 'none';
  soyTexto.style.display = 'none'
  main.classList.remove("active");
  main.classList.add("nodivision");
  principles.classList.add("active");
  simulateHover();
};


flechaSubirPrinci.onclick = function(){
  principles.classList.remove("active");
  main.classList.remove("nodivision");
  main.classList.toggle("active"); // Muestra el contenido principal
  soyFoto.style.display = 'flex';
  soyTexto.style.display = 'flex';
};
flechaBajarPrinci.onclick = function(){
  principles.classList.remove("active");
  main.classList.remove("nodivision");
  main.classList.add("active");
  soyFoto.style.display = 'flex';
  mision.style.display = 'flex';
};


flechaSubirMision.onclick = function(){
  mision.style.display = 'none';
  soyFoto.style.display = 'none';
  main.classList.remove("active");
  main.classList.add("nodivision");
  principles.classList.add("active");
};
flechaBajarMision.onclick = function(){
  mision.style.display = 'none';
  soyFoto.style.display = 'none';
  main.classList.remove("active");
  main.classList.add("nodivision");
  services.style.display = 'grid';
};


flechaSubirServices.onclick = function(){
  services.style.display = 'none';
  main.classList.remove("nodivision");
  main.classList.add("active");
  soyFoto.style.display = 'flex';
  mision.style.display = 'flex';
};




function simulateHover() {
  // Selecciona las clases objetivo
  const classes = [".foot3", ".foot1", ".body3", ".body2", ".body1"];
  
  setInterval(() => {
    // Seleccionar una clase aleatoria
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const elements = document.querySelectorAll(randomClass);
    
    if (elements.length > 0) {
      // Seleccionar un elemento aleatorio de esa clase
      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      
      // Simular hover aplicando estilos
      const pElements = randomElement.querySelectorAll("p");
      pElements.forEach(p => {
        p.style.display = "grid";
        p.style.transition = "2.5s";
        
        if (randomClass === ".foot3") {
          p.style.textAlign = "center";
          p.style.paddingRight = "15vw";
        } else if (randomClass === ".foot1") {
          p.style.paddingLeft = "15vw";
        }
      });

      // Remover el efecto después de un tiempo para simular el fin del hover
      setTimeout(() => {
        pElements.forEach(p => {
          p.style.display = "";
          p.style.textAlign = "";
          p.style.paddingRight = "";
          p.style.paddingLeft = "";
          p.style.transition = "";
        });
      }, 2000); // Mantener el estilo por 2 segundos
    }
  }, 2000); // Repetir cada 2 segundos
}


/*
// FUNCION DE SCROLL

let lastScrollTop = 0;  // Inicializamos la última posición del scroll

window.addEventListener('scroll', () => {
    let currentScroll = window.scrollY || document.documentElement.scrollTop;  // Obtenemos la posición actual del scroll

    if (currentScroll > lastScrollTop) {
      console.log("Scroll hacia abajo");
      soyFoto.style.display = 'flex';
      soyTexto.style.display = 'flex'
      main.classList.toggle("active");

      principles.classList.add("active");

    } else {
      console.log("Scroll hacia arriba");


    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;  // Actualizamos la última posición del scroll
});
*/



