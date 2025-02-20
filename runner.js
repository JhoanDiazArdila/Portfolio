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


const toggleMobile = document.querySelector(".toggle_mobile");
const navigationMobile = document.querySelector(".nav_mobile");
const navListMobile = document.querySelector(".nav-list-mobile");


const botonIniciar = document.querySelector(".iniciar")
const menu = document.querySelector(".header-container");
const welcome = document.querySelector(".welcome");
const first = document.querySelector(".first");
const introAbout = document.querySelector(".introAbout");

// SECCIONES

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

const expertise = document.querySelector(".expertise");
const flechaBajarExpertise = document.querySelector("#bajarExpert");
const flechaSubirExpertise = document.querySelector("#subirExpert");

const projects = document.querySelector(".projects");
const flechaBajarProjects = document.querySelector("#bajarProjects");
const flechaSubirProjects = document.querySelector("#subirProjects");


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

// Toggle Mobile
toggleMobile.onclick = function () {
    navigationMobile.classList.toggle("active");
    navListMobile.classList.toggle("active");
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
  mision.style.display = 'flex';
  // Validar tamaño de pantanlla
  if (window.innerWidth < 1150) {
    soyFoto.style.display = 'none';
  } else {
    soyFoto.style.display = 'flex';
  }
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
  if (window.innerWidth < 800) {
    services.style.display = 'flex';
  }else{
    services.style.display = 'grid';
  }
};


flechaSubirServices.onclick = function(){
  services.style.display = 'none';
  main.classList.remove("nodivision");
  main.classList.add("active");
  mision.style.display = 'flex';
  if (window.innerWidth < 1150) {
    soyFoto.style.display = 'none';
  } else {
    soyFoto.style.display = 'flex';
  }
};
flechaBajarServices.onclick = function(){
  services.style.display = 'none';
  main.classList.remove("nodivision");
  main.classList.add("active");
  expertise.style.display = 'flex';
  soyFoto.style.display = 'flex';
  simulateHoverExpertise();
}


flechaSubirExpertise.onclick = function(){
  soyFoto.style.display = 'none';
  expertise.style.display = 'none';
  main.classList.remove("active");
  main.classList.add("nodivision");
  if (window.innerWidth < 800) {
    services.style.display = 'flex';
  }else{
    services.style.display = 'grid';
  }
}
flechaBajarExpertise.onclick = function(){
  expertise.style.display = 'none';
  soyFoto.style.display = 'none';
  main.classList.remove("active");
  main.classList.add("nodivision");
  projects.style.display = 'flex';
}


flechaSubirProjects.onclick = function(){
  projects.style.display = 'none';
  main.classList.remove("nodivision");
  main.classList.add("active");
  expertise.style.display = 'flex';
  soyFoto.style.display = 'flex';
  simulateHoverExpertise();
}





// Función para ocultar todas las secciones
function hideAllSections() {
  // Ocultamos cada sección
  main.classList.remove("active", "nodivision");
  soyFoto.style.display = 'none';
  soyTexto.style.display = 'none';
  if(principles) principles.classList.remove("active");
  if(mision) mision.style.display = 'none';
  if(services) services.style.display = 'none';
  if(expertise) expertise.style.display = 'none';
  if(projects) projects.style.display = 'none';
}

// Función para mostrar la sección deseada y gestionar soyFoto
function showSection(section) {
  // Primero ocultamos todas
  hideAllSections();

  // Luego, según la sección, la mostramos y ajustamos soyFoto
  switch(section) {
    case 'about': 
      main.classList.toggle("active");
      soyTexto.style.display = 'flex';
      soyFoto.style.display = 'flex';
      break;
    case 'services':
      if(services) {
        main.classList.add("nodivision");
        // Si el ancho es menor a 800, mostramos como flex, de lo contrario en grid
        services.style.display = window.innerWidth < 800 ? 'flex' : 'grid';
      }
      break;
    case 'expertise':
      main.classList.add("active");
      expertise.style.display = 'flex';
      soyFoto.style.display = 'flex';
      simulateHoverExpertise();
      break;
    case 'projects':
      main.classList.add("nodivision");
      projects.style.display = 'flex';
      break;
    case 'contact':
      // Si tu sección de Contact se gestiona aparte, por ejemplo:
      // document.querySelector(".contact").style.display = 'flex';
      // Aquí también se oculta la foto.
      soyFoto.style.display = 'none';
      break;
    // default:
      // Por defecto, podrías decidir ocultar la foto o mostrarla según tu diseño.
      // soyFoto.style.display = 'none';
  }
}

// Eventos para el menú de escritorio
document.querySelectorAll('.navigation .nav-list li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(link.id);
  });
});

// Eventos para el menú móvil
document.querySelectorAll('.nav_mobile .nav-list-mobile li a').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    showSection(link.id);
  });
});

// Asignar eventos click a los botones de navegación
// botonAbout.addEventListener('click', (e) => {
//   e.preventDefault();
//   showSection('about');
// });
// botonServices.addEventListener('click', (e) => {
//   e.preventDefault();
//   showSection('services');
// });
// botonExpertise.addEventListener('click', (e) => {
//   e.preventDefault();
//   showSection('expertise');
// });
// botonProjects.addEventListener('click', (e) => {
//   console.log('click');
//   e.preventDefault();
//   showSection('projects');
// });
// botonContact.addEventListener('click', (e) => {
//   e.preventDefault();
//   showSection('contact');
// });





function simulateHoverExpertise() {
  const classes = [".expertise1", ".expertise2", ".expertise3", ".expertise4", ".expertise5", ".expertise6", ".expertise7", ".expertise8"];


  let toggle = true;

  setInterval(() => {
    // Seleccionar una clase aleatoria
    const randomClass = classes[Math.floor(Math.random() * classes.length)];
    const elements = document.querySelectorAll(randomClass);
    

    if (elements.length > 0) {
      // Seleccionar un elemento aleatorio de esa clase
      const randomElement = elements[Math.floor(Math.random() * elements.length)];
      const img = randomElement.querySelector("img");

      if (img) {
        if (toggle) {
          img.id = "hover-effect";
        } else {
          img.id = "hover-effect1";
        }
        // Invertir el toggle para el próximo ciclo
        toggle = !toggle;
        setTimeout(() => {
          img.removeAttribute("id");
        }, 1800);
      }
    }
  }, 2000)
}



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
          if (window.innerWidth < 800) {
            p.style.textAlign = "center";
            p.style.paddingRight = "0"
          } else {
            p.style.textAlign = "center";
            p.style.paddingRight = "15vw";
          }
        } else if (randomClass === ".foot1") {
          if (window.innerWidth < 800) {
            p.style.paddingLeft = "0"
          } else {
            p.style.paddingLeft = "15vw";
          }
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




// ESCUCHA DE CLICKS
document.addEventListener("click", function (event) {



});

