function validarCampos() {
    if (validarCheckboxSeleccionado()) {
        console.log("checkbox validos");
        confirmacion();
    }

}

function confirmacion() {
    var userPreference;

    if (confirm("Deseas guardar los cambios?") == true) {
        userPreference = "Datos guardados exitosamente!";
        window.location.href = '../pages/index.html';
    } else {
        userPreference = "Cambios cancelados!";
    }
}

function validarCheckboxSeleccionado() {
    const parrafo = $('#id-msjcheck');
    const numCheck = this.find('.form-check-input' + ':checked').length;
    console.log(numCheck);

    if (this.find('.form-check-input').filter(':checked').length > 0) {
        parrafo.text('');
        return true;
    } else {
        parrafo.text('Debes ingresar un valor para todos los checkboxes');
        return false;
    }
}

$.fn.numCheckboxesMarcados = function(clase) {
    return this.find('.form-check-input' + ':checked').length;
  };