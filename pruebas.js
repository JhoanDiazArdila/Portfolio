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
// let main = document.querySelector(".main");


// let botonIniciar = document.querySelector(".iniciar")
// let menu = document.querySelector(".header-container");
// let welcome = document.querySelector(".welcome");
// let first = document.querySelector(".first");
// let introAbout = document.querySelector(".introAbout");
const soyFoto = document.querySelector(".foto");
// let soyTexto = document.querySelector(".texto");
// console.log(toggle, navigation, main);


// HACER CLICK TOGGLE
toggle.onclick = function () {
  navigation.classList.toggle("active");
  soyFoto.classList.toggle("active");
    

    
    // main.classList.toggle("active");
    // menu.classList.toggle("active");
};









// CARGA DE DATOS DESDE JSON
// funcion para cargar el json segun lo seleccionado
document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const languageSelector = document.getElementById('languageSelector');
  let currentLanguage = 'en';// esto determina que por predeterminado sea en ingles a menos que se cambie

  async function loadContent(section) {
    try {
      const response = await fetch(`content/content_${currentLanguage}.json`);
      if (!response.ok) throw new Error('Error al cargar el archivo JSON');
      const data = await response.json();//carga del json


      switch (section) {

        case 'intro':
          let introHtml = `
            <h5 class="welcome">${data.intro.welcome}</h5>

            <section class="first">
              <h3 class="greeting">${data.first.greeting}</h3>
              <div class="whoAmI">
                <p class="this">${data.first.whoAmI}</p>
                <h1>${data.first.name}</h1>
              </div>
              <h4 class="title">${data.first.title1}</h4>

              <p class="text">${data.first.text}</p>
              <p class="text1">${data.first.text1}</p>
              
              ${data.first.sub_text.map(line => `<p class="sub-text">${line}</p>`).join('')}

              <div class="divisionFlechasGo">
                <ion-icon class="flechaGo" name="arrow-redo-sharp"></ion-icon>
                <button class="iniciar">${data.first.button_Go}</button>
                <ion-icon class="flechaGo" name="arrow-undo-sharp"></ion-icon>
              </div>
            </section>
            <h5 class="introAbout">${data.intro_about.think}</h5>
  
            <section class="foto">
              <img src="${data.aboutMe.imgAboutMe}" alt="foto de perfil">
              <h2>${data.aboutMe.name}</h2>
              <h6>${data.aboutMe.occupation}</h6>
              <div class="logosImagen">
                <a href="${data.aboutMe.imgGit}" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="${data.aboutMe.imgLinkedin}" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="${data.aboutMe.imgWhatsApp}" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </div>
            </section>
            
            <section class="texto">
              <h4>${data.aboutMe.title}</h4>
              <div>
                ${data.aboutMe.parrafo1.map(line => `<p>${line}</p>`).join('')}
              </div>
              <div>
                ${data.aboutMe.parrafo2.map(line => `<p>${line}</p>`).join('')}
              </div>
              <div>
                ${data.aboutMe.parrafo3.map(line => `<p>${line}</p>`).join('')}
              </div>
              <div id="flechasScroll">
                <a href="">
                    <ion-icon name="arrow-down-circle"></ion-icon>
                </a>
                <a href="">
                    <ion-icon name="arrow-up-circle"></ion-icon>
                </a>
              </div>
            </section>
          `;

          content.innerHTML = introHtml;

          const welcome = document.querySelector(".welcome");
          const first = document.querySelector(".first");
          const botonIniciar = document.querySelector(".iniciar");
          const main = document.querySelector(".main");

          if (welcome) {
            setTimeout(() => {
              welcome.classList.add('active'); // Agrega la clase para ocultarlo
              setTimeout(() => {
                welcome.style.display = 'none'; // Quita completamente el elemento
              }, 1500);
            }, 1500); // 1500 ms = 1.5 segundos

            setTimeout(() => {
              botonIniciar.classList.add('active');
              first.classList.add('active');
            }, 3100);
          }
          
          if (first) {
            setTimeout(() => {
              first.classList.add('active'); // Muestra el contenido de "first"
            }, 3100);
          }

          if (botonIniciar) {
            console.log(' 1 llego aqui!!!!!!!!!');
            
            botonIniciar.addEventListener('click', () => {
              console.log('2 llego aqui!!!!!!!!!');
              const menu = document.querySelector(".header-container");
              const introAbout = document.querySelector(".introAbout"); // No ha cargado
              const soyFoto = document.querySelector(".foto"); // No ha cargado
              const soyTexto = document.querySelector(".texto"); // No ha cargado
              console.log('3 llego aqui!!!!!!!!!');

              if (menu && first) {
                console.log('4 llego aqui!!!!!!!!!');
                menu.classList.add("active");
                first.classList.toggle("active");
                botonIniciar.classList.toggle("active");

                console.log('5 llego aqui!!!!!!!!!');
                
                introAbout.style.display = 'flex';
                setTimeout(() => {
                  introAbout.classList.add('active');
                  setTimeout(() => {
                    introAbout.classList.remove('active');
                    introAbout.classList.add('inactive');
                    setTimeout(() => {
                      introAbout.style.display = 'none';
                      introAbout.classList.remove('inactive');
                      main.classList.toggle("active");
                      soyFoto.style.display = 'flex';
                      soyTexto.style.display = 'flex';
                    }, 1000);
                  }, 1200);
                }, 300);
              }
            });
          }
          break;


        case 'aboutMe':
          let aboutMe = `
            <h5 class="introAbout">${data.intro_about.think}</h5>
  
            <section class="foto">
              <img src="${data.aboutMe.imgAboutMe}" alt="foto de perfil">
              <h2>${data.aboutMe.name}</h2>
              <h6>${data.aboutMe.occupation}</h6>
              <div class="logosImagen">
                <a href="${data.aboutMe.imgGit}" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-github"></ion-icon>
                </a>
                <a href="${data.aboutMe.imgLinkedin}" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-linkedin"></ion-icon>
                </a>
                <a href="${data.aboutMe.imgWhatsApp}" target="_blank" rel="noopener noreferrer">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
              </div>
            </section>
            
            <section class="texto">
              <h4>${data.aboutMe.title}</h4>
              <div>
                ${data.aboutMe.parrafo1.map(line => `<p>${line}</p>`).join('')}
              </div>
              <div>
                ${data.aboutMe.parrafo2.map(line => `<p>${line}</p>`).join('')}
              </div>
              <div>
                ${data.aboutMe.parrafo3.map(line => `<p>${line}</p>`).join('')}
              </div>
              <div id="flechasScroll">
                <a href="">
                    <ion-icon name="arrow-down-circle"></ion-icon>
                </a>
                <a href="">
                    <ion-icon name="arrow-up-circle"></ion-icon>
                </a>
              </div>
            </section>
          `;
          content.innerHTML = aboutMe;
          break;


          
        default:
          content.innerHTML = `<p>Section not found.</p>`;
          break;
      }
    } catch (error) {
        console.error('Error:', error);
        content.innerHTML = `<p>Error loading content.</p>`;
    }
  }
  if (languageSelector) {
    languageSelector.addEventListener('click', () => {
      // Alternar entre 'en' y 'es' (o el idioma que desees)
      currentLanguage = currentLanguage === 'en' ? 'es' : 'en';
      loadContent('intro');
    });
  }

  const aboutMeButton = document.getElementById('AboutMe');
    if (aboutMeButton) {
      // document.getElementById('AboutMe').addEventListener('click', () => loadContent('aboutMe'));
      aboutMeButton.addEventListener('click', () => loadContent('aboutMe'));
    }


  loadContent('intro');
});









