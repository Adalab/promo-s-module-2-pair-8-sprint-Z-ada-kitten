'use strict'; 

//3. Mostrar formulario 

//Definimos la constante búscándola dentro del html con la clase js-new-form 
//const formHidden=document.querySelector ('.js-new-form');

// Esconde la clase collapse de la constante formHidden
//formHidden.classList.remove("collapsed"); 

//4. Mostrar gatitos desde JS

//const catList=document.querySelector(".js-list");
const catList= document.querySelector('.js-list'); 
const kittenOneImage = "https://dev.adalab.es/gato-siames.webp";
   
const kittenOneName = 'Anastacio';
const kittenOneDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';
const kittenTwoImage = 
             "https://dev.adalab.es/sphynx-gato.webp";
            
const kittenTwoName = 'Fiona';
const kittenTwoDesc =
  'Produce fascinación y curiosidad. Exótico, raro, bello, extraño…     hasta con pinta de alienígena han llegado a definir a esta raza        gatuna que se caracteriza por la «ausencia» de pelo';
const kittenTwoRace = 'Sphynx';

const kittenThreeImage =         
              "https://dev.adalab.es/maine-coon-cat.webp";             ;
const kittenThreeName = 'Cielo';
const kittenThreeDesc =
  ' Tienen la cabeza cuadrada y los ojos simétricos, por lo que su     bella mirada se ha convertido en una de sus señas de identidad. Sus ojos son grandes y las orejas resultan largas y en punta.';
const kittenThreeRace = 'Maine Coon';


const kittenOne = `<li class="card">
<article>
  <img
    class="card_img" src= ${kittenOneImage}
    alt="gatito"/>
  <h3 class="card_title"> ${kittenOneName.toUpperCase()}</h3>
  <h4 class="card_race"> ${kittenOneRace}</h4>
  <p class="card_description "> ${kittenOneDesc} </p>         
  </article>
</li>`;

const kittenTwo = `<li class="card">
            <img
              class="card_img"
              src= ${kittenTwoImage}
              alt="sphynx-cat"
            />
            <h3 class="card_title">${kittenTwoName.toUpperCase()}</h3>
            <h4 class="card_race">${kittenTwoRace}</h4>
            <p class="card_description"> ${kittenTwoDesc}              
            </p>
          </li>`;
 const kittenThree = `<li class="card">
            <img
              class="card_img"
              src= ${kittenThreeImage}
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${kittenThreeName.toUpperCase()}</h3>
            <h4 class="card_race">${kittenThreeRace}</h4>
            <p class="card_description">${kittenThreeDesc}
            
            </p>
          </li>`;

const input_search_desc = document.querySelector('.js_in_search_desc');

const btnSearch= document.querySelector ('.js-button'); 

let html = '';

const newForm=document.querySelector ('.js-new-form');

const  buttonPlus = document.querySelector(".js-plus");

const list=document.querySelector('.js-list'); 


        
// FIN CONSTANTES 

//vamos a traer a Anastasio y amigos de vuelta
//primero de todo conectar js con HTML
//const Catlist= document.querySelector('.js-list'); //esta constante va en js-list, siempre se pone antes (lo  ideal es que siempre fuese al principio del documento)
catList.innerHTML = kittenOne + kittenTwo + kittenThree; // esta constante está compuesta por

//ejercicio 2.2
/*const kittenOneImage = "https://dev.adalab.es/gato-siames.webp";
   
const kittenOneName = 'Anastacio';
const kittenOneDesc =
  ' Porte elegante, su patrón de color tan característico y sus ojos de un azul intenso, pero su historia se remonta a Asía al menos hace 500 años, donde tuvo su origen muy posiblemente.';
const kittenOneRace = 'Siamés';*/
//al declarar las const las subimos arroba para que se pudan relacionar con el contenido.

//filtrar búsqueda por constantes (se comenta porque más abajo filtraremos búsqueda por función).
/*btnSearch.addEventListener ('click', (event) =>{

  event.preventDefault();
  const descrSearchText = input_search_desc.value;

if( kittenOneDesc.includes(descrSearchText) ) {
 catList.innerHTML = kittenOne;

  }
  
  if( kittenTwoDesc.includes(descrSearchText) ) {
    catList.innerHTML = kittenTwo;
  }
  
  if( kittenThreeDesc.includes(descrSearchText) ) {
    catList.innerHTML = kittenThree;
  }

}); */

// ¿Y si no hay raza?


if (kittenOneRace === "") {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenOneRace;
}

// Función para desplegar el colapsable 
// Es una CLASE y por lo tanto no se pone el punto 


/*buttonPlus.addEventListener('click', (event) => {

  if (newForm.classList.contains('collapsed')) {
    newForm.classList.remove('collapsed');
  } else {
    newForm.classList.add('collapsed');
  }

}); */

// Funciones para abrir y cerrar el desplegable para añadir gatito: 

// Crea dos funciones para mostrar u ocultar el formulario para añadir un nuevo gatito

function showNewCatForm() {
  newForm.classList.remove('collapsed');
}
function hideNewCatForm() {
  newForm.classList.add('collapsed');
}


//Declaro la función manejadora y utilizo las funciones creadas anteriormente

function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newForm.classList.contains('collapsed')) {
    showNewCatForm();
  } else {
    hideNewCatForm();
  }
}

// Defino el evento que inicia la función manejadora

buttonPlus.addEventListener('click', handleClickNewCatForm);


/*function handleClickNewCatForm(event) {
  event.preventDefault();
  if (newFormElement.classList.contains('collapsed')) {
    //completa el código
  } else {
    //completa el código
  }
}*/




const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const inputRace = document.querySelector('.js-input-race');
const labelMessageError = document.querySelector('.js-label-error');




const addBtn= document.querySelector('.js-addBtn');
const cancelBtn= document.querySelector('.js-cancelBtn'); 

const handleClick = (event) => {
  event.preventDefault (); 
  //declaramos las constantes dentro de la función porque se ejecutan al hacer click - ES UN EVENTO QUE OCURRE AL HACER CLICK
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  const valueRace = inputRace.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML='¡Uy! parece que has olvidado algo';
  } else {
    labelMessageError.innerHTML=''; 
    renderKitten(valuePhoto, valueDesc, valueName, valueRace)
  }

}


addBtn.addEventListener('click', handleClick); 

// 2. FORMULARIO: Adicionar nuevo gatito
//modifica el evento para cumplir una función manejadora

function renderKitten(url, desc, name, race) {
 list.innerHTML+=`<li class="card">
 <article>
   <img
     class="card_img" src= ${url}
     alt="gatito"/>
   <h3 class="card_title"> ${name.toUpperCase()}</h3>
   <h4 class="card_race"> ${race}</h4>
   <p class="card_description "> ${desc} </p>         
   </article>
 </li>`;
}

//Haz una nueva función cancelNewKitten(event) asociada al evento clic del botón cancelar la creación de un nuevo gatito.

const handleClickCancel=(event)=> {
  cancelNewKitten ();
 
}
//anidamos una función dentro de otra y funciona igual
const cancelNewKitten = (event) => {
newForm.classList.add('collapsed');
  labelMessageError.innerHTML='';
};

cancelBtn.addEventListener('click', handleClickCancel);

//función para filtrar la selección
//const descrSearchText = input_search_desc.value; debe estar dentro del evento para que funcione.

function filterKitten (event) {
  const descrSearchText = input_search_desc.value;
  if( kittenOneDesc.includes(descrSearchText) ) {
 catList.innerHTML = kittenOne;
  }
    if( kittenTwoDesc.includes(descrSearchText) ) {
    catList.innerHTML = kittenTwo;
  }
    if( kittenThreeDesc.includes(descrSearchText) ) {
    catList.innerHTML = kittenThree;
  }
} 
btnSearch.addEventListener ('click', (event) =>{
  event.preventDefault();
  filterKitten ();
});

//"function filterKitten (event) {" es lo mismo que "const filterKitten = (event) => { "


