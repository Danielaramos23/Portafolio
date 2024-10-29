$(document).ready(function() {
  $("#formulario").submit(function(evento) {
      evento.preventDefault();
      
      var name = $("#name").val();
      var email = $("#email").val();
      var message = $("#message").val();
      var valido = true;

      // Restablecer mensajes de error y estilos
      $(".form-text").html("");
      $(".col-form-label").removeClass("text-danger");

      if (name == "") {
          valido = false;
          $("#error-name").html("Ingresar nombre");
          $("#lbl-name").addClass("text-danger");
      }

      if (email == "") {
          valido = false;
          $("#error-email").html("Ingresar correo electrónico");
          $("#lbl-email").addClass("text-danger");
      }

      if (message == "") {
          valido = false;
          $("#error-message").html("Ingresar mensaje");
          $("#lbl-message").addClass("text-danger");
      }

      if (valido) {
          $(".alert").removeClass("d-none"); // Muestra la alerta si todo es válido
      }
  });

  
$("#btn-limpiar").click(function () {

  $("#name").val("");
  $("#email").val("");
  $("#message").val("");
  $(".alert").addClass("d-none");
});
});