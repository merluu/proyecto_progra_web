function validarRut()
{
    //modificacion css
    //$("#id-reg").css("background-color", "yellow");
    //modificacion html
    //document.getElementById("id-reg").disabled = true;

    const rut = document.getElementById("id-rut").value;
    const parrafo = $('#id-msj');

    if(rutEsValido(rut) ||rut==''){
        parrafo.text('');
    } else {
        parrafo.text('rut invalido');
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