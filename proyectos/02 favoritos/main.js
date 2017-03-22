// Nuevos conceptos
// addEventListener
// preventDefault
var formularioPrincipal = document.getElementById('formularioPrincipal').addEventListener('submit', guardarFavorito)

function guardarFavorito(e) {
  // Evitar que se ejecute el comportamiento por defecto
  e.preventDefault()
  var nombre = document.getElementById('nombre').value
  var url = document.getElementById('url').value

  var favoritos = {
    nombre: nombre,
    url: url
  }
  localStorage.setItem("apellido", "Perez")
  localStorage.setItem('test', 'Hello World')
  console.log(favoritos)
}
