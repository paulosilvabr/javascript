var botao = document.querySelector('input#botaoTeste')

botao.addEventListener('click', testar)

function testar() {
    var inicio = Number(document.querySelector('input#ini').value)
    var fim = Number(document.querySelector('input#fim').value)
    var step = Number(document.querySelector('input#step').value)
    var out = document.getElementsByTagName('output')[0]

    if (inicio == fim) {
        out.innerText = 'Impossível fazer o teste'
        return;
    } 

    if (step == 0) {
        step = 1
    }

    out.innerHTML = ''

    if (inicio < fim) {
        while (inicio <= fim) {
        out.innerHTML += `${inicio} &#128073;`
        inicio += step
        }

        out.innerHTML += '&#127937;'
    } else {
        while (inicio >= fim) {
        out.innerHTML += `${inicio} &#128073;`
        inicio -= step
        }

        out.innerHTML += '&#127937;'
    }
}