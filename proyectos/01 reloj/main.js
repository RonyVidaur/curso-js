var agujaHoras = document.querySelector('.aguja-horas')
var agujaMinutos = document.querySelector('.aguja-minutos')
var agujaSegundos = document.querySelector('.aguja-segundos')

function obtenerHora() {
  var fecha = new Date()
  var hora = fecha.getHours()
  var minutos = fecha.getMinutes()
  var segundos = fecha.getSeconds()
  var gradosHora = ((hora/12) * 360) + 90
  var gradosMinutos = ((minutos/60)*360) + 90
  var gradosSegundos = ((segundos/60)*360) + 90

  agujaHoras.style.transform = "rotate("+ gradosHora + "deg)"
  agujaMinutos.style.transform = "rotate("+ gradosMinutos+ "deg)"
  agujaSegundos.style.transform = "rotate("+ gradosSegundos + "deg)"
}
setInterval(obtenerHora, 1000)
