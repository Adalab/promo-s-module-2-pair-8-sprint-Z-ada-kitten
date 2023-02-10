## Cancelar formulario

Haz una nueva función cancelNewKitten(event) asociada al evento clic del botón cancelar la creación de un nuevo gatito.
Si completaste el ejercicio 4 Cancelar formulario" puedes modificar el código para incluir la función manejadora del evento.
Sino haz el código necesario dentro de esta función para ocultar la sección del formulario de añadir un nuevo gatito cuando el usuario de clic en el botón cancelar. Recuerda también limpiar los valores de los inputs.
const buttonCancelForm = document.querySelector('.js-btn-cancel');
buttonCancelForm.addEventListener('click', cancelNewKitten);

const cancelNewKitten = (event) => {
//completa o mueve el código para cancelar la creación de un nuevo gatito.
};
.

2. ## Filtrar por descripción
   Haz una nueva función filterKitten asociada al evento click del botón buscar para filtrar y mostrar solo aquellos gatitos que la descripción concuerde con la introducida por la usuaria. Para ello:
   Escucha el evento click asociado al botón buscar:
   const buttonSearch = document.querySelector('.js-button-search');
   buttonSearch.addEventListener('click', filterKitten);
   Obtén los valores que ha escrito la usuaria en el input de descripción, para ello utiliza el mismo código que hemos realizado en otras clases`:
   const input_search_desc = document.querySelector('.js_in_search_desc');
   const descrSearchText = input_search_desc.value;
   Haz la función manejadora asociada al evento anterior:
   const filterKitten = (event) => {
   if (kittenDesc1.includes(descrSearchText)) {
   listElement.innerHTML += kittenOne;
   }
   if (kittenDesc2.includes(descrSearchText)) {
   listElement.innerHTML += kittenTwo;
   }
   if (kittenDesc3.includes(descrSearchText)) {
   listElement.innerHTML += kittenThree;
   }
   };
   Valida si la usuaria le dé click al botón Buscar y no haya rellenado alguno de los valores a buscar: raza o descripción.
