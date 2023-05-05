var form = document.getElementById("myForm");
// Agrega un controlador de eventos para el evento "submit"
document.addEventListener("submit", function (event) {
  // Cancela el envío del formulario
  event.preventDefault();

  // Obtiene los valores de los campos
  var nombre = document.getElementsByName("nombre")[0].value;
  var psw = document.getElementsByName("psw")[0].value;
  var name = document.getElementById("nombre");
  var pswStyle = document.getElementById("psw");
  //Esto para Levantar Span De error
  var span = document.getElementById("mi-span");
  var spanPSW = document.getElementById("mispan2");
  var spanCaracteres = document.getElementById("mispan3")
  // Realiza las validaciones
    
  if (nombre === "") {
    spanCaracteres.style.display = "none";
    span.style.display = "flex"; //Muestra el mensaje de error
    span.style.color = "red"; //Genera la letra en rojo
    name.style.border = '1px solid red' //Agregar El borde Rojo
    return false;
  } else {
      console.log("entra");
      span.style.display = "none"; //Quita el mensaje de error
      console.log(nombre.length);
      if(nombre.length <= 5) {
        spanCaracteres.style.display = "flex";
        spanCaracteres.style.color = "red"
      }else {
        spanCaracteres.style.display = "none";
      }
    
    name.style.border = 'transparent' //Vuelve transparente el borde 
    document.getElementsByName("nombre")[0].classList.remove("input-error");
  }

  // Valida que la contraseña tenga al menos 8 caracteres y al menos una letra mayúscula
  var pswRegex = /^(?=.*[A-Z]).{8,}$/;
  if (!pswRegex.test(psw)) {
    console.log('én');
    spanPSW.style.display = "flex"; //Muestra el mensaje de error
    spanPSW.style.color = "red";//Genera la letra en rojo
    pswStyle.style.border = '1px solid red' //Agregar El borde Rojo
    return false;
  }else{
    spanPSW.style.display = "none";//Quita el mensaje de error
    pswStyle.style.border = 'transparent'//Vuelve transparente el borde 
  }
  // Si todo está bien, envía el formulario
  form.submit();
});