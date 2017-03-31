document.getElementById('formularioPrincipal').addEventListener('submit', guardarFavorito)

function  guardarFavorito(e) {
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
  e.preventDefault()
}
