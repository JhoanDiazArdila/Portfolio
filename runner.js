


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


// funcion para cargar el json segun lo seleccionado
document.addEventListener('DOMContentLoaded', () => {
  const content = document.getElementById('content');
  const languageSelector = document.getElementById('languageSelector');
  let currentLanguage = 'en';// esto determina que por predeterminado sea en ingles a menos que se cambie

  async function loadContent(section) {
    try {
      const response = await fetch(`content_${currentLanguage}.json`);
      if (!response.ok) throw new Error('Error al cargar el archivo JSON');
      const data = await response.json();//carga del json


      switch (section) {// segun el caso genera la section  EN  ${data.intro.greeting} VAS CAMBIANDO DESPUES DEL PUNTO LA PALABRA SEGUN COMO SE LLAME LA CLAVE EN EL JSON
        case 'intro':
          let introHtml = `
            <section id="intro">
                <article>
                <p >${data.intro.greeting}</p>
                <p >${data.intro.whoAmI}</p>
                <h1>${data.intro.title}</h1>
                <p>${data.intro.subtitle}</p>
          `;


          // Iterar sobre el array `text` que se encuentra en el json y añade cada línea
          //recuerda que se hizo asi para que el orden de las nias de texto quedara como esta en el canva
          //si no lo tomaba como una sola linea
          data.intro.text.forEach(line => {
            introHtml += `<p>${line}</p>`;
          });


          introHtml += `
              <button>${data.intro.buttonAboutMe}</button>
              <button>${data.intro.buttonSomeServices}</button>
          </article>    
      `;// se creo una section y luego un article para la parte de texto y otro article mas abajo para la imagen


          introHtml += `
                          <article>
                              <img src=${data.intro.imgIntro} alt="imgIntro">
                          </article>
                      </section>
                  `;


          content.innerHTML = introHtml;
          break;// intro va hasta aqui


        case 'aboutMe':
          content.innerHTML = `
                      <section id="aboutMe">
                          <article>
                              <h2>${data.aboutMe.name}</h2>
                              <h3>${data.aboutMe.occupation}</h3>
                              <img src=${data.aboutMe.imgAboutMe} alt="imgAboutMe">
                          </article>
                          <article>
                              <h3>${data.aboutMe.title}</h3>
                              <p>${data.aboutMe.occupation}</p>
                            
                              <p>${data.aboutMe.vision}</p>
                              <p>${data.aboutMe.mission}</p>
                              <h3>Principles</h3>
                              <p>${data.aboutMe.principles}</p>
                          </article>
                        
                      </section>
                  `;
          break;


        case 'services':
          content.innerHTML = `
                      <section id="services">
                          <h2>My Services</h2>
                          <p>${data.services.description}</p>
                          <h3>Featured Projects</h3>
                          <ul>
                              ${data.services.projects.map(project => `<li>${project}</li>`).join('')}
                          </ul>
                          <h3>Programming Languages</h3>
                          <p>${data.services.languages.join(', ')}</p>
                      </section>
                  `;
          break;


        case 'contact':
          content.innerHTML = `
                      <section id="contact">
                          <h2>Contact Me</h2>
                          <form>
                              <label for="name">${data.contact.form.name}:</label>
                              <input type="text" id="name" name="name" required>


                              <label for="email">${data.contact.form.email}:</label>
                              <input type="email" id="email" name="email" required>


                              <label for="message">${data.contact.form.message}:</label>
                              <textarea id="message" name="message" required></textarea>


                              <button type="submit">${data.contact.submitText}</button>
                          </form>
                      </section>
                  `;
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


  languageSelector.addEventListener('change', (event) => {
    currentLanguage = event.target.value;
    loadContent('intro');
  });


  document.getElementById('#AboutMe').addEventListener('click', () => loadContent('aboutMe'));



  loadContent('intro');
});















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