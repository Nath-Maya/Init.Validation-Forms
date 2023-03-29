import { valida } from "./validaciones.js";


//*Seleccionando todos los inputs
//agregando el addEventListener

const inputs = document.querySelectorAll("input");


inputs.forEach((input) => {
 input.addEventListener("blur", (input) => {
   valida(input.target);
 });
});
