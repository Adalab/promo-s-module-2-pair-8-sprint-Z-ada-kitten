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

btnSearch.addEventListener ('click', (event) =>{

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

}); 

// ¿Y si no hay raza?


if (kittenOneRace === "") {
  html = `Uy que despiste, no sabemos su raza`;
} else {
  html = kittenOneRace;
}

// Función para desplegar el colapsable 
// Es una CLASE y por lo tanto no se pone el punto 


buttonPlus.addEventListener('click', (event) => {

  if (newForm.classList.contains('collapsed')) {
    newForm.classList.remove('collapsed');
  } else {
    newForm.classList.add('collapsed');
  }

}); 

const inputDesc = document.querySelector('.js-input-desc');
const inputPhoto = document.querySelector('.js-input-photo');
const inputName = document.querySelector('.js-input-name');
const labelMessageError = document.querySelector('.js-label-error');




const addBtn= document.querySelector('.js-addBtn');
const cancelBtn= document.querySelector('.js-cancelBtn'); 

const handleClick = (event) => {
  event.preventDefault (); 
  //declaramos las constantes dentro de la función porque se ejecutan al hacer click - ES UN EVENTO QUE OCURRE AL HACER CLICK
  const valueDesc = inputDesc.value;
  const valuePhoto = inputPhoto.value;
  const valueName = inputName.value;
  if (valueDesc === '' || valuePhoto === '' || valueName === '') {
    labelMessageError.innerHTML='¡Uy! parece que has olvidado algo';
  } else {
    labelMessageError.innerHTML=''; 
    console.log('Holi');
  }

}

const handleClickCancel=(event)=> {
  
  newForm.classList.add('collapsed');
  labelMessageError.innerHTML='';
 

}

cancelBtn.addEventListener('click', handleClickCancel);
addBtn.addEventListener('click', handleClick); 


