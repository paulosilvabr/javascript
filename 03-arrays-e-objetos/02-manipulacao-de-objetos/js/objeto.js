/*
Autor: Paulo Ricardo Sousa Silva
Data: 2026-07-07 12:17:34
*/
// Objeto
console.log('Generator Function');

let amigo = {
  nome: 'JosÃ©',
  sexo: 'M',
  peso: 85.4,
  engordar(p = 0) {
    console.log('Engordou')
    this.peso += p
  }
}

amigo.engordar(2)
console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

console.log('<--------------------------------->')

console.log('Freeze');

function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
  
  Object.freeze(this) // Deixa imultÃ¡vel qualquer objeto instÃ¢nciado desse construtor
}

const p1 = new Pessoa('Paulo', 18)

p1.nome = 'Seu ZÃ©' // Editado
Object.freeze(p1) // Deixa a variÃ¡vel (tem que ser um objeto) com atributos imultÃ¡veis
p1.nome = 'Seu JoÃ£o' // NÃ£o editado

console.log(p1);

console.log('<--------------------------------->')

console.log('defineProperty');

function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', { // Argm = this, Atributos, ConfiguraÃ§Ãµes
    enumerable: true, // Mostra a chave nos loops for?
    value: estoque, // Qual Ã© o valor que esse atributo pega?
    writable: false, // Pode editar esse atributo depois?
    configurable: false // Pode redefinir as configuraÃ§Ãµes dessa propriedade?

  })

  try {

    Object.definePropertiy(this, 'estoque', {
      enumerable: false // redefinindo a propriedade
    })

  } catch (e) {
    console.log(`A protiredade ESTOQUE nÃ£o pode ser redefinida: ${e.message}`);
  }
}

const produto1 = new Produto('Massa de Bolo', 20.00, 16)

// Reescrevendo o valor da propriedade
produto1.estoque = 10000 // Ã‰ sÃ³ ignorada, sem acusaÃ§Ã£o de erro

console.log(produto1);

console.log('<--------------------------------->')

console.log('delete');

console.log(produto1);

delete produto1.estoque // SÃ³ funciona se a configuraÃ§Ã£o "configurable" for TRUE

console.log(produto1);

console.log('<--------------------------------->')

console.log('defineProperties e Getter');

function Conta(titular, cpf, saldo) { 
  // O parÃ¢metro 'saldo' aqui em cima JÃ Ã‰ a sua variÃ¡vel privada

  Object.defineProperties(this, {
    titular: {
      value: titular,
      writable: false,
      enumerable: true,
      configurable: true
    },

    cpf: {
      value: cpf,
      writable: false,
      enumerable: false,
      configurable: false
    },

    saldo: {
      enumerable: true,
      configurable: false,

      get: function() {
        return saldo; // Retorna o valor do parÃ¢metro lÃ¡ de cima
      }, 
      
      set: function (newValor) { // 'newValor' Ã© o valor recebido
        if (typeof newValor !== 'number') {
          throw new TypeError('Tipo Invalido');
        }
        saldo = newValor; // Atualiza o parÃ¢metro 'saldo' do construtor
      }
    }
  })
}

const conta1 = new Conta('JoÃ£o Silva Pereira Pinho', '999.999.999-99', 47125.50)

console.log(conta1);
console.log(conta1.saldo); // 47125.5
conta1.saldo = 50000;      // Usa o set para atualizar a variÃ¡vel interna
console.log(conta1.saldo); // 50000

console.log('<--------------------------------->')

console.log('For...of/in em Objeto');

function Livro(nome, nmrPagina, tags, editora) {
  this.nome = nome;
  this.nmrPagina = nmrPagina;
  this.tags = tags;
  this.editora = editora;
}

const livro1 = new Livro(
  'Mistborn: O ImpÃ©rio Final',
  710,
  ['Alta Fantasia', 'Aventura'],
  'Trama'
);

console.log(livro1);

console.log(''); // Separador

// for...in em Objeto
for (const entry in Object.entries(livro1)) {
  console.log(entry);
}

console.log(''); // Separador

// for...of em Objeto
for (const entry of Object.entries(livro1)) {
  console.log(entry);
}

console.log(''); // Separador

// for...of em Objeto
for (const [chave, valor] of Object.entries(livro1)) {
  console.log(chave, valor);
}
