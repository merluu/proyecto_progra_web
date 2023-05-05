function validarUserName()
{
    const user = $('#id-campoUserName').val();
    const pass = $('#id-campoPass').val();
    if (user != "" && pass != ""){
        window.location.href = '../pages/index.html';
    } else {
        alert ("Los campos están vacíos")
    }

}
