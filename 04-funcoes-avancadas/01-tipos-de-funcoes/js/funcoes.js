/*
Autor: Paulo Ricardo Sousa Silva
Data: 2026-07-07 12:17:34
*/
// FunÃ§Ã£o com parÃ¢metro
console.log('Formas diferentes de exibir uma funÃ§Ã£o');

function parimpar(n) {
    if (n%2 == 0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

// Guardando o valor em uma variÃ¡vel
let s = parimpar(20)
console.log(s)

// Mostrando o resultado direto
console.log(parimpar(1))

console.log('<--------------------------------->')

// FunÃ§Ã£o
console.log('Valores PadrÃµes de um parÃ¢metro');
 
function soma( n1 = 0, n2 = 0 ) { //(n = 0) = Se n nÃ£o tiver valor ele atribui 0 como valor padrÃ£o
    return n1 + n2
}

console.log(soma(9, ));

console.log('<--------------------------------->')

//FunÃ§Ã£o em uma VariÃ¡vel
console.log('FunÃ§Ã£o dentro de um variÃ¡vel');

let dobro = function(x) {
    return x*2
}

console.log(dobro(5))

console.log('<--------------------------------->')

//FunÃ§Ã£o Recursiva
console.log('FunÃ§Ã£o Recursiva');
console.log('TOMAR CUIDADO COM LOOP INFINITO!!!');

// Exemplo 1
function fatorial(num) {
    if (num == 1) { // a funÃ§Ã£o sÃ³ nÃ£o vira um loop infinito porquÃª tem essa linha falando onde tem que parar
        return 1
    } else {
        return num * fatorial(num-1)
    }
}

console.log(fatorial(5))

// Exemplo 2
function recursiva(max) {
    if (max >= 10) return;
    max++
    console.log(max);
    recursiva(max)
}

recursiva(0)

console.log('<--------------------------------->')

// Arrow Functions
console.log('Arrow Functions');
console.log('FunÃ§Ã£o 1 - Somar');

/*
    function somar( a = 1, b = 1 ) {
        return a + b
    }
*/

const somar = ( a = 1, b = 1 ) => a + b
console.log(somar())

console.log('FunÃ§Ã£o 1 - Maior que 10');

const numeros = [5, 12, 8, 130, 44];

/*
    // 1. VocÃª define a regra
    function eMaiorQueDez(num) {
        return num > 10;
    }

    // 2. VocÃª usa a regra dentro do filter
    const maioresQueDez = numeros.filter(eMaiorQueDez);

    // 3. Juta tudo
    function filtrarMaioresQueDez(listaDeNumeros) {
        return listaDeNumeros.filter(function(num) {
            return num > 10;
        });
    }
*/

const maiorQueDez = numeros.filter(num => num > 10)
console.log(maiorQueDez)

console.log('<--------------------------------->')

// Functions Expression
console.log('Functions Expression');

/*
    function saldacao() {
        console.log('OlÃ¡ pessoa')    
    }
*/

const saldacao = function() {
    console.log('OlÃ¡ pessoa')
}

saldacao()

console.log('<--------------------------------->')

// Outra forma de execultar uma funÃ§Ã£o
console.log('Outra forma de execultar uma funÃ§Ã£o');

function execFuncao(funcao) { // O parametro tem que ser um Function Expression
    funcao()
}

execFuncao(saldacao); // Execultando a FunÃ§Ã£o saldacao() dentro como parÃ¢metro de execFuncao()

console.log('<--------------------------------->')

// Dentro de Objeto
console.log('Dentro de Objeto');

const obj = {
    // falar: () => console.log('Falando abobrinha...')  <<--- tambem funciona
    falar() {
        console.log('Falando abobrinha...')
    }
}

obj.falar()

console.log('<--------------------------------->')

// Arguments
console.log('Arguments');

function novosNumeros() {
    console.log(arguments)
}
novosNumeros(0, 1, 2, 3, 4, 5, 6, 7, 8, 9) // Argumentos que eu mandei como parametros

console.log('<--------------------------------->')

// IIFE -> Immediately invoked function expression
console.log('IIFE');
/*
    FEITA PARA FUGIR DAS VARIÃVEIS GLOBAIS, O QUE Ã‰ UMA BOA PRÃTICA

    SINTAXE:

    (function(param){
        const naoGlobal = 'VÃ¡riavel nÃ£o global'
        console.log(`${naoGlobal} e seu parametro ${param}`)
    })(20)
    
    OBS: Pode ter ou nÃ£o parÃ¢metros
*/

(function(idade, peso, altura) {
    const sobrenome = 'Ricardo';

    function criaNome (nome) {
        return nome + ' ' + sobrenome;
    }

    function falaNome() {
        console.log(criaNome ('Paulo'));
    }

    falaNome();
    console.log(idade, peso, altura);
})(30, 80, 1.80);

console.log('<--------------------------------->')

// Factory Function
console.log('Factory Function');

function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,
    sobrenome,

    // Getter
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },

    // Setter
    set nomeCompleto(valor) {
      valor = valor.split(' ');
      this.nome = valor.shift();
      this.sobrenome = valor.join(' ');
    },

    fala(assunto = 'falando sobre NADA') {
      return `${this.nome} estÃ¡ ${assunto}.`;
    },

    altura: a,
    peso: p,

    // Getter
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      return indice.toFixed(2);
    }
  };
}

const p1 = criaPessoa('Luiz', 'OtÃ¡vio', 1.8, 80);
const p2 = criaPessoa('JoÃ£o', 'OtÃ¡vio', 1.90, 57);
const p3 = criaPessoa('Junior', 'OtÃ¡vio', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

console.log('<--------------------------------->')

// Constructor Function
console.log('Constructor Function');

function Pessoa(idade = 18) {
    const nome = 'Paulo'            // Atributo Private
    const sobrenome = 'Ricardo'     // Atributo Private
    this.idade = idade              // Atributo Public

    this.apresentacao = () => {
        console.log(`OlÃ¡, meu nome Ã© ${nome} ${sobrenome} e minha idade Ã© ${idade}`)
    }
}

const p01 = new Pessoa(18)
p01.apresentacao()

console.log('<--------------------------------->')

// Generator Function
console.log('Generator Function');

// Exemplo 1
function* geradora() {
    yield 'valor 1';
    yield 'valor 2';
    yield 'valor 3';
}

const g1 = geradora()

// Chave value: valor do yield - Done: se ja terminou todos os yield ou nÃ£o
console.log(g1.next());
console.log(g1.next().value);
console.log(g1.next().value);
console.log(g1.next().done);

console.log(''); // Separador

// Exemplo 2
function* geradora2() {
    yield 2
    yield 3
    yield 4
}

function* geradora3() {
    yield 0
    yield 1
    yield* geradora2() // Chama outra Generator Function
    yield 5
}

const g2 = geradora3()
console.log(g2.next().value);
console.log(g2.next().value);
console.log(g2.next().value); // feita pela geradora2()
console.log(g2.next().value); // feita pela geradora2()
console.log(g2.next().value); // feita pela geradora2()
console.log(g2.next().value);
console.log(g2.next());
