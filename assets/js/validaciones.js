//* ENTRADA FECHA DE NACIMIENTO

export function valida(input) {
  const tipoDeInput = input.dataset.tipo;
  if (validadores[tipoDeInput]) {
    validadores[tipoDeInput](input);
  }

  //Validar el campo
  if (input.validity.valid) {
    input.parentElement.classList.remove("input-container--invalid"); //remueve la clase
    input.parentElement.querySelector(".input-message-error").innerHTML = "";
  } else {
    input.parentElement.classList.add("input-container--invalid"); //si esta en blanco, adiciona la clase
    input.parentElement.querySelector(".input-message-error").innerHTML =
      mostrarMensajeDeError(tipoDeInput, input);
  }
}

//* DEFINIR TIPO DE ERRORES

  //Tipos de Errores / se genera un array.

  const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError",
  ]

//crear objetos con cada uno.
const mensajesDeError = {
  //el objeto es el data-tipo que colocamos en las etiquetas de html
  nombre: {
    valueMissing: "Debe ingresar un nombre de usuario.",
  },
  email: {
    valueMissing: "Este campo no puede estar vacío.",
    typeMismatch: "El correo no es válido.",
  },
  password: {
    valueMissing: "Este campo no puede estar vacío.",
    patternMismatch:
      "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales.",
  },

  nacimiento: {
    valueMissing: "Este campo no puede estar vacío.",
    customError: "Debes tener al menos de 18 años",
  },

  numero: {
    valueMissing: "Este campo no puede estar vacío.",
    patternMismatch: "El formato requerido es de 10 digitos",
  },
};

const validadores = {
  nacimiento: (input) => validarNacimiento(input),
};

//* FUNCION PARA LOS MENSAJES DE ERROR

function mostrarMensajeDeError(tipoDeInput, input) {
  let mensaje = "";
  tipoDeErrores.forEach((error) => {
    if (input.validity[error]) {
      console.log(tipoDeInput, error);
      console.log(input.validity[error]);
      console.log(mensajesDeError[tipoDeInput][error]);
      mensaje = mensajesDeError[tipoDeInput][error];
    }
  });
  return mensaje;
}



//* MENSAJE FECHA DE NACIMIENTO

function validarNacimiento(input) {
  const fechaCliente = new Date(input.value); //tomar el valor del input de fecha
  let mensaje = "";
  if (!mayorDeEdad(fechaCliente)) {
    mensaje = "Debes tener al menos de 18 años";
  }
  //metodo .setCustomValidity define el mensaje de validacion personalizado.
  input.setCustomValidity(mensaje);
}

//* VALIDAR FECHA DE NACIMIENTO > 18

function mayorDeEdad(fecha) {
  const fechaActual = new Date();
  const diferenciaFechas = new Date(
    fecha.getUTCFullYear() + 18,
    fecha.getUTCMonth(),
    fecha.getUTCDate()
  );
  return diferenciaFechas <= fechaActual;
}
