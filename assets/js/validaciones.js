

//* Entrada de fecha de nacimiento

const inputNacimiento = document.querySelector("#birth"); //seleccionar el elemento con el id = birth

inputNacimiento.addEventListener("blur", (evento) => {
validarNacimiento(evento.target);
});

//* Valor fecha de nacimiento

function validarNacimiento(input) {
const fechaCliente = new Date (input.value); //tomar el valor del input de fecha
mayorDeEdad(fechaCliente);
}

//* Verificar si la fecha ingresada cumple con la condicion de edad >18 years

function mayorDeEdad(fecha) {
  const fechaActual = new Date();
 console.log(fecha,"---",fechaActual);
}


