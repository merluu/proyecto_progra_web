function validarCampos() {
  if (validarRut() && validarCorreoElectronico() && validarContraseñas()) {
    window.location.href = '../pages/index.html';
  } else {
    alert("campos invalidos");
  }
}

function validarRut() {
  const rut = document.getElementById("id-rut").value;
  const parrafo = $('#id-msj');

  if (rutEsValido(rut) || rut == '') {
    parrafo.text('');
    return true;
  } else {
    parrafo.text('rut invalido');
    $('#id-rut').focus();
    return false;
  }
}

function rutEsValido(rut) {

  // Eliminar puntos y guiones del RUT
  rut = rut.replace(/\./g, '');
  rut = rut.replace(/\-/g, '');

  // Validar longitud del RUT
  if (rut.length < 8 || rut.length > 9) {
    return false;
  }

  // Extraer dígito verificador del RUT
  var dv = rut.charAt(rut.length - 1);

  // Extraer número base del RUT
  var num = parseInt(rut.substring(0, rut.length - 1));

  // Calcular dígito verificador esperado
  var m = 0, s = 1;
  for (; num; num = Math.floor(num / 10)) {
    s = (s + num % 10 * (9 - m++ % 6)) % 11;
  }
  var dvEsperado = (s > 0) ? String(s - 1) : 'K';

  // Comparar dígito verificador esperado con dígito verificador del RUT
  return (dv.toUpperCase() === dvEsperado);
}

function validarCorreoElectronico() {
  const email = document.getElementById("idEmail").value;
  const parrafo = $('#id-msjc');
  // Expresión regular para validar el correo electrónico
  var regex = /\S+@\S+\.\S+/;


  // Valida el correo electrónico utilizando la expresión regular
  if (regex.test(email)) {
    // El correo electrónico es válido
    parrafo.text('');
    return true;
  } else {
    // El correo electrónico no es válido
    parrafo.text('correo invalido');
    $('#idEmail').focus();
    return false;
  }
}

function validarContraseñas() {
  const contraseña1 = document.getElementById("idcontraseña1").value;
  const contraseña2 = document.getElementById("idcontraseña2").value;
  const parrafo = $('#id-msjp');

  if (contraseña1 === contraseña2) {
    // Las contraseñas son iguales
    parrafo.text('');
    return true;
  } else {
    // Las contraseñas no son iguales
    parrafo.text('Las contraseñas no coinciden');
    return false;
  }
}

function validarNombre() {
  const nombre = document.getElementById("id-nombre").value;
  // Expresión regular para validar el nombre
  var regex = /^[a-zA-Z ]{3,}$/;

  // Valida el nombre utilizando la expresión regular
  if (nombre.trim() === "") {
    // El nombre está vacío
    return false;
  } else if (!regex.test(nombre)) {
    // El nombre no cumple con los requisitos
    return false;
  } else {
    // El nombre es válido
    return true;
  }
}

/*
$(document).ready(function() {
  // todo lo que se hace apenas cargue el html
}); */
