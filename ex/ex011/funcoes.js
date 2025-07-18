// Função com parâmetro
console.log('Formas diferentes de exibir uma função');

function parimpar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

// Guardando o valor em uma variável
let s = parimpar(20)
console.log(s)

// Mostrando o resultado direto
console.log(parimpar(1))

console.log('<--------------------------------->')

// Função
console.log('Valores Padrões de um parâmetro');
 
function soma( n1 = 0, n2 = 0 ) { //(n = 0) = Se n não tiver valor ele atribui 0 como valor padrão
    return n1 + n2
}

console.log(soma(9, ));

console.log('<--------------------------------->')

//Função em uma Variável
console.log('Função dentro de um variável');

let dobro = function(x) {
    return x*2
}

console.log(dobro(5))

console.log('<--------------------------------->')

//Função Recursiva
console.log('Função Recursiva');
console.log('TOMAR CUIDADO COM LOOP INFINITO!!!');

function fatorial(num) {
    if (num == 1) { // a função só não vira um loop infinito porquê tem essa linha falando onde tem que parar
        return 1
    } else {
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5))