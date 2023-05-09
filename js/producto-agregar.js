function validaciones() {

    if (validarNombre() && validarAnno() && validarPrecio()  && validarDescripcion()) {
        alert("Producto agregado correctamente!");
    } else {
        alert("campo(s) inválido(s)");
    }
}

function validarNombre() {
    const nomprod = $('#id-producto').val();
    // parrafo_nombre tiene el elemento párrafo especifico con todos sus atributos.
    const parrafo_nombre = $('#id-msjpro');
    if (nomprod != ""){
        parrafo_nombre.text('');
        return true;
    }else{
        parrafo_nombre.text('El nombre del producto no puede estar en blanco.');
        return false;
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

function validarDescripcion() {
    const desc = $('#id-textarea').val();
    // parrafo_nombre tiene el elemento párrafo especifico con todos sus atributos.
    const parrafo_txtarea = $('#id-desctxt');
    if (desc != ""){
        parrafo_txtarea.text('');
        return true;
    }else{
        parrafo_txtarea.text('El texto no puede estar en blanco.');
        return false;
    }
}