function validaciones() {

    //
    const nombre = document.getElementById("id-producto").value;
    const parrafo = $('#id-producto');
    // Expresión regular para validar el nombre
    var regex = /^[a-zA-Z ]{3,}$/;

    console.log(nombre);

    if (nombre != "" && validarAnno() && validarPrecio()) {
        alert("Producto editado correctamente!");
    } else {
        alert("faltan campos");
    }

    // Valida el nombre utilizando la expresión regular
    if (nombre.trim() === "") {
        parrafo.text('nombre no puede estar vacío');
        // El nombre está vacío
        return false;
    } else if (!regex.test(nombre)) {
        parrafo.text('nombre inválido');
        // El nombre no cumple con los requisitos
        return false;
    } else {
        parrafo.text('');
        // El nombre es válido
        return true;
    }
}

function validarAnno() {
    //Captura el VALOR del input de #id-anno y el año
    const anno = $('#id-anno').val();
    console.log(anno);
    //Captura el elemento html del párrafo con la id= id-msjfech
    const parrafo = $('#id-msjfech');

    // Verificar si el campo está vacío
    if (anno.trim() === '') {
        parrafo.text('Debe ingresar una fecha');
        return false;
    }

    // Obtener la fecha actual del sistema
    const fechaActual = new Date();

    // Obtener la fecha como objeto Date
    const annoObj = new Date(anno);

    // Verificar si la fecha es mayor a la fecha actual
    if (annoObj > fechaActual) {
        parrafo.text('La fecha no puede ser superior a la fecha de hoy');
        return false;
    }
    parrafo.text('');
    return true;
}

function validarPrecio() {
    const precio = $('#id-precio').val();
    const msjprecio = $('#id-msjprecio');
    if (precio === "" || precio <= 0) {
        msjprecio.text('Precio incorrecto');
        return false;
    } else {
        msjprecio.text('');
        return true;
    }
}