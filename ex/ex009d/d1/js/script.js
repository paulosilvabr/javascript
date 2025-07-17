var botao = document.querySelector('input#botaoTeste')

botao.addEventListener('click', testar)

function testar() {
    var inicio = Number(document.querySelector('input#ini').value)
    var fim = Number(document.querySelector('input#fim').value)
    var step = Number(document.querySelector('input#step').value)
    var out = document.getElementsByTagName('output')[0]

    if (inicio == 0 || fim == 0) {
        out.innerText = 'Insira valores nos campos acima'
        return;
    } 

    if (condition) {
        
    }
}