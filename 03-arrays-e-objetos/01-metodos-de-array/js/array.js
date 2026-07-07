/*
Autor: Paulo Ricardo Sousa Silva
Data: 2026-07-07 12:17:34
*/
const num = [5 , 3 , 7 , 2 , 2]
const pessoas = [
    { nome: 'PatrÃ­cia', idade: 53 },
    { nome: 'Bruno', idade: 18 },
    { nome: 'Camila', idade: 29 },
    { nome: 'OtÃ¡vio', idade: 60 },
    { nome: 'Beatriz', idade: 25 },
    { nome: 'SÃ©rgio', idade: 39 },
    { nome: 'Helena', idade: 66 },
    { nome: 'Igor', idade: 17 },
    { nome: 'MÃ´nica', idade: 41 },
];

console.log(num);
console.log(`PosiÃ§Ã£o 4: ${num[4]}`);
num[4] = 1 // Coloca 1 na posiÃ§Ã£o 4 da array
console.log(`PosiÃ§Ã£o 4: ${num[4]}`);

console.log('<-------------------------------->');

console.log(num);
console.log(`Mostrando a primeira posiÃ§Ã£o do array ${num[0]}`)
num.sort() // Reordena a array
console.log(`Mostrando a primeira posiÃ§Ã£o do array depois de organizar ${num[0]}`)

console.log('<-------------------------------->');

console.log(num);
console.log(`PosiÃ§Ã£o 5: ${num[5]}`);
num.push(0.5) // cria uma posiÃ§Ã£o no final da array sÃ³ pra colocar o 0.5
console.log(`PosiÃ§Ã£o 5: ${num[5]}`);

console.log('<-------------------------------->');

console.log(num);
console.log(`Quantidade de elementos: ${num.length}`); // Quantidade de elemento na Array

console.log('<-------------------------------->');

console.log(num);
console.log('Loop para mostrar todos os elementos da array:');

for (let c = 0; c < num.length ; c++) {
    console.log(`Elemento da array: ${num[c]}`)
}

console.log('Fim do Loop')

console.log('<-------------------------------->');

console.log(num);
console.log('Mostrando todos os elementos da array com for in:');

for (let posicao in num) {
    console.log(`Elemento da array: ${num[posicao]}`)
}

console.log('Fim do loop')

console.log('<-------------------------------->');

console.log(num);
console.log(`Procurando a Key do valor 7 na array: ${num.indexOf(7)}`); // Retorna o Ã­ndice do elemento
console.log(`Procurando a Key do valor 7 na array: ${num.indexOf(0)}`); // Retorna -1 quando nÃ£o acha o valor

console.log('<-------------------------------->');

console.log(num);

console.log(num.slice(0, -1)); // nÃ£o mexe no Array original

console.log('<-------------------------------->');

console.log(num);

num.pop() // Remove o ultimo elemento do Array
console.log(`Foi removido o Ãºltimo elemento ${num}`);

console.log('<-------------------------------->');

console.log(num);

//  splice(index, delete, valor que vai adicionar, valor que vai adicionar, ...)
num.splice(2, 1, 'teste', 20)
// tira 1 elemento comeÃ§ando do index 2 e adiciona 'teste' e 20

console.log(num);
console.log(num.splice(2, 2, 90, 31, 21, 68, 61, 12)); // Retornou o que eu tirei da Array e ainda adicionou 90, 31, 21, 68, 61, 12

console.log(num);

console.log('<-------------------------------->');

console.log(num);

// ---> Exemplo 1
/*
function callbackFilter(valor) {
    return valor > 10;
}

const numFiltrado = num.filter(callbackFilter) // Filter sÃ³ recebe valor boleano
console.log(numFiltrado);
*/

// ---> Exemplo 2
/*
const numFiltrado = num.filter(function (valor) {
    return valor > 10;
})

console.log(numFiltrado);
*/

// ---> Exemplo 3

const numFiltrado = num.filter( valor => valor > 10)
// Ele retorna valor, indice e array assim como map()

console.log(numFiltrado);

console.log('<-------------------------------->');

console.log(num);

// Exemplo 1
const dobro = num.map((valor, indice, array) => {
    console.log(`Esse Ã© o ${valor}\nEsse Ã© o indice do valor ${indice}\nE esse Ã© a array completa ${array}\n`);
})

console.log(pessoas);

// Exemplo 2
const nomes = pessoas.map((valor, index, array) => valor.nome)
console.log(nomes);

// Exemplo 3
const idades2 = pessoas.map((obj, index, array) => ({ idade: obj.idade}))
console.log(idades2);

// Exemplo 4
/*
const idades3 = pessoas.map((obj, index, array) => {   // Afeta a Array/Obj original 
    delete obj.nome
    return obj
})
console.log(idades3);
*/

// Exemplo 5
const idParaPessoa = pessoas.map((valor, indice) => {   // Sem alterar o Obj Original
    const newObj = {... valor} // Spread Expression: "..."
    newObj.id = indice // NÃ£o tem id mas ele adiciona
    return newObj
})
console.log(idParaPessoa);

console.log('<-------------------------------->');

console.log(num);

let total = num.reduce(function(acumulador, valor, indice, array) {
    // console.log(acumulador, valor, indice, array);
    acumulador += valor
    return acumulador;
}, 100);
console.log(total);

console.log('<-------------------------------->');

console.log(num);

const pares = num
.filter(valor => valor % 2 === 0)
.map((valor) => valor * 2)
.reduce((acumulador, valor, index, array) => acumulador += valor)

console.log(pares);

console.log('<-------------------------------->');

console.log(num);

num.forEach((valor, index, array) => {
    console.log(total += valor);
})