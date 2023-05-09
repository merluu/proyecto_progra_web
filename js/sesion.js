function validarUserName() {
    const user = $('#id-campoUserName').val();
    const pass = $('#id-campoPass').val();
    if (user != "" && pass != "") {
        window.location.href = '../pages/index.html';
    } else {
        alert("Los campos están vacíos");
    }
}

$(document).ready(function () {
    fetch('https://mindicador.cl/api')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));



});