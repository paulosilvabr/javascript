// Capturar Hora do Client
var tempo = new Date().getHours()

// Capturar Elementos
var header = document.querySelector('output.horario')
var hora = document.querySelector('output.hora')
var img = document.querySelector('div.img')
var body = document.getElementsByTagName('body')[0]

// Alteração por horário
if (tempo >= 0 && tempo < 6) {
    header.innerHTML = 'Hora da Madrugada!'
    hora.innerHTML = tempo
    img.style.backgroundImage = 'URL(../image/dawn.jpg)'
    body.style.backgroundColor = '#1c2b6bff'
} else if (tempo <13) {
    header.innerHTML = 'Hora do Dia!'
    hora.innerHTML = tempo
    img.style.backgroundImage = 'URL(../image/morning.jpg)'
    body.style.backgroundColor = '#4fc7ffff'
} else if (tempo < 18) {
    header.innerHTML = 'Hora da Tarde!'
    hora.innerHTML = tempo
    img.style.backgroundImage = 'URL(../image/afternoon.jpg)'
    body.style.backgroundColor = '#ffc853ff'
} else {
    header.innerHTML = 'Hora da Noite'
    hora.innerHTML = tempo
    img.style.backgroundImage = 'URL(../image/night.jpg)'
    body.style.backgroundColor = '#2d44aaff'
}