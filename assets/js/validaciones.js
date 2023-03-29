
//* Entrada de fecha de nacimiento

export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  //Validar el campo
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid"); //remueve la clase
  } else {
    input.parentElement.classList.add("input-container--invalid"); //si esta en blanco, adiciona la clase
  }
}



//* Definiendo los mensajes de error en cada input
  //crear objetos con cada uno.

const mensajesDeError = {
  nombre: {
    valueMissing: "Este campo no puede estar vacío."
  },
  email: {
  valueMissing: "Este campo no puede estar vacío.",
  typeMismatch: "El correo no es válido."
  },
  password: {
    valueMissing: "Este campo no pued estar vacío.",
    patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales."
  },

    nacimiento: {
      valueMissing: "Este campo no pued estar vacío.",
      customError: "Debes tener al menos de 18 años"
    },
};






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
