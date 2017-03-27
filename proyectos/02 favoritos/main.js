// Nuevos conceptos
// addEventListener
// preventDefault
var formularioPrincipal = document.getElementById('formularioPrincipal').addEventListener('submit', guardarFavorito)


function guardarFavorito(e) {
  // Evitar que se ejecute el comportamiento por defecto
  var nombre = document.getElementById('nombre').value
  var url = document.getElementById('url').value

  var favorito = {
    nombre: nombre,
    url: url
  }

  // Stringify
  // localStorage.setItem("apellido", "Perez")
  // localStorage.setItem('test', 'Hello World')
  if(localStorage.getItem('favoritos') === null) {
    var favoritos = []
    favoritos.push(favorito)
    localStorage.setItem('favoritos', JSON.stringify(favorito))
  } else {
    var favoritos = JSON.parse(localStorage.getItem('favoritos'))
    favoritos.push(favorito)
  }
  e.preventDefault()
  console.log(favoritos)
}
