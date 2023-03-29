
//* Entrada de fecha de nacimiento

export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }
}

const validadores = {
 nacimiento: (input) => validarNacimiento(input),
};

//* Valor fecha de nacimiento

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value); //tomar el valor del input de fecha
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos de 18 años";
  }
  //metodo .setCustomValidity define el mensaje de validacion personalizado.
  input.setCustomValidity(mensaje);
}

//* Verificar si la fecha ingresada cumple con la condicion de edad >18 years

function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
}
