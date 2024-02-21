  // Realiza una solicitud AJAX de tipo GET
  $.ajax({
    url: 'https://api.scripture.api.bible/v1/swagger.json',
    type: 'GET',
    success: function(response) {
      // La solicitud fue exitosa
      console.log('Respuesta:', response);
    },
    error: function(xhr, status, error) {
      // La solicitud falló
      console.error('Error al realizar la solicitud. Código de estado:', xhr.status);
    }
  });