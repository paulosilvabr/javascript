// Objeto
console.log('Generator Function');

let amigo = {
  nome: 'José',
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
  
  Object.freeze(this) // Deixa imultável qualquer objeto instânciado desse construtor
}

const p1 = new Pessoa('Paulo', 18)

p1.nome = 'Seu Zé' // Editado
Object.freeze(p1) // Deixa a variável (tem que ser um objeto) com atributos imultáveis
p1.nome = 'Seu João' // Não editado

console.log(p1);

console.log('<--------------------------------->')

console.log('defineProperty');

function Produto(nome, preco, estoque) {
  this.nome = nome
  this.preco = preco

  Object.defineProperty(this, 'estoque', { // Argm = this, Atributos, Configurações
    enumerable: true, // Mostra a chave nos loops for?
    value: estoque, // Qual é o valor que esse atributo pega?
    writable: false, // Pode editar esse atributo depois?
    configurable: false // Pode redefinir as configurações dessa propriedade?

  })

  try {

    Object.definePropertiy(this, 'estoque', {
      enumerable: false // redefinindo a propriedade
    })

  } catch (e) {
    console.log(`A protiredade ESTOQUE não pode ser redefinida: ${e.message}`);
  }
}

const produto1 = new Produto('Massa de Bolo', 20.00, 16)

// Reescrevendo o valor da propriedade
produto1.estoque = 10000 // É só ignorada, sem acusação de erro

console.log(produto1);

console.log('<--------------------------------->')

console.log('delete');

console.log(produto1);

delete produto1.estoque // Só funciona se a configuração "configurable" for TRUE

console.log(produto1);

console.log('<--------------------------------->')

console.log('defineProperties e Getter');

function Conta(titular, cpf, saldo) { 
  // O parâmetro 'saldo' aqui em cima JÁ É a sua variável privada

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
        return saldo; // Retorna o valor do parâmetro lá de cima
      }, 
      
      set: function (newValor) { // 'newValor' é o valor recebido
        if (typeof newValor !== 'number') {
          throw new TypeError('Tipo Invalido');
        }
        saldo = newValor; // Atualiza o parâmetro 'saldo' do construtor
      }
    }
  })
}

const conta1 = new Conta('Paulo Ricardo Sousa Silva', '999.999.999-99', 47125.50)

console.log(conta1);
console.log(conta1.saldo); // 47125.5
conta1.saldo = 50000;      // Usa o set para atualizar a variável interna
console.log(conta1.saldo); // 50000