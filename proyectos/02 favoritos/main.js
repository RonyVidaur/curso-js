document.getElementById('formularioPrincipal').addEventListener('submit', guardarFavorito)

function  guardarFavorito(e) {
  var nombreSitio = document.getElementById('nombreSitio').value
  var urlSitio = document.getElementById('urlSitio').value

  var favorito = {
    nombre: nombreSitio,
    url: urlSitio
  }
  // si no existe el objeto favoritos en localStorage
  if (localStorage.getItem('favoritos') === null) {
    var favoritos = []
    favoritos.push(favorito)
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
    // si ya existe el objeto en localStorage
  } else {
    var favoritos = JSON.parse(localStorage.getItem('favoritos'))
    favoritos.push(favorito)
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }
  // evitar que la pagina se recargue al presionar el boton submit
  e.preventDefault()
}

function cargarFavoritos() {
  var resultadoFavoritos = document.getElementById('resultadoFavoritos')
  var favoritos = JSON.parse(localStorage.getItem('favoritos'))
  for (var i = 0; i < favoritos.length; i++) {
    var nombre = favoritos[i].nombre
    var url = favoritos[i].url
    // innerHTML - mostrar resultado en pantalla
    resultadoFavoritos.innerHTML += '<div class="well"' +
                                      "<h3>"+ nombre +
                                      '<a target="_blank" class="btn btn-default" href="' + url + '">Visitar</a>' +
                                      '<a class="btn btn-danger" href="#"'+ '">Borrar</a>' +  
                                      '</h3>' +
                                    '</div>'
  }
}
