document.getElementById('formularioPrincipal').addEventListener('submit', guardarFavorito)

function guardarFavorito(e) {
  var nombreSitio = document.getElementById('nombreSitio').value

  var urlSitio = document.getElementById('urlSitio').value

  var favorito = {
    nombre: nombreSitio,
    url: urlSitio
  }

  if (localStorage.getItem('favoritos') === null) {
    var favoritos = []
    favoritos.push(favorito)
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  } else {
    var favoritos = JSON.parse(localStorage.getItem('favoritos'))
    favoritos.push(favorito)
    localStorage.setItem('favoritos', JSON.stringify(favoritos))
  }
  cargarFavoritos()
  e.preventDefault()
}


function cargarFavoritos() {
  var favoritos = JSON.parse(localStorage.getItem('favoritos'))

  var resultadoFavoritos = document.getElementById('resultadoFavoritos')

  resultadoFavoritos.innerHTML = ''
  for (var i = 0; i < favoritos.length; i++) {
    nombre = favoritos[i].nombre
    url = favoritos[i].url
    resultadoFavoritos.innerHTML += '<div class="well">' +
    '<h3>'+ nombre +
    '<a class="btn btn-default" target="_blank" href="' + url + '">Visitar</a>'+
    '<a onclick="borrarFavorito('') class="btn btn-danger" href="#">Borrar</a>'
    '</h3>'+
    '</div>'
  }
}
