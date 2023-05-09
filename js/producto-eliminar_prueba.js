$(document).ready(function () {
    $("#liveAlertBtn").click(function () {
        // Recorre la lista de juegos
        $("li.list-group-item").each(function () {
            // Verifica si el checkbox está marcado
            if ($(this).find("input[type='checkbox']").is(":checked")) {
                // Encuentra el elemento correspondiente en la lista de juegos
                var id = $(this).attr("flexCheckDefault");
                var gameItem = $("li.list-group-item[data-id='" + id + "']");
                // Elimina el elemento de la lista de juegos
                gameItem.remove();
            }
        });
        // Muestra el mensaje de éxito
        alert('El producto ha sido eliminado con éxito.', 'success');
    });
});
