var botao = document.querySelector('input#gerarBotao')
botao.addEventListener('click', gerarTabuada)

function gerarTabuada() {
    var num = String(document.querySelector('input#num').value)
    var area = document.querySelector('textarea#tabuada')
    var c = 0

    if (num == '') {
        window.alert('Insira um valor')
        return;
    }

    Number(num)
    
    area.innerHTML = ''

    while (c <= 10) {
        var aux = num * c
        area.innerHTML += `${num} X ${c} = ${aux}\n`
        c++
    }
}