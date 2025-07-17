var data = new Date()
var agora = data.getHours()
// Essa linha de cima pega a a Hora do dispositivo

console.log(`São exatos ${agora} horas.`)

if (agora >= 0 && agora < 6) {
    console.log('Boa Madrugada!')
} else if(agora < 13) {
    console.log('Bom Dia!')
} else if (agora < 20) {
    console.log('Boa Tarde!')
} else {
    console.log('Boa Noite!')
}