import { valida } from "./validaciones.js";


//*Seleccionando todos los inputs
//agregando el addEventListener

const inputs = document.querySelector("input");

inputs.forEach( input => {
 input.addEventListener('blur', (input) => {
  valida(input.target)
 });
});
