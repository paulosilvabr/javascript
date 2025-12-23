let num = [5 , 3 , 7 , 2 , 2]

console.log(num);
console.log(`Posição 4: ${num[4]}`);
num[4] = 1 // Coloca 1 na posição 4 da array
console.log(`Posição 4: ${num[4]}`);

console.log('<-------------------------------->');

console.log(num);
console.log(`Mostrando a primeira posição do array ${num[0]}`)
num.sort() // Reordena a array
console.log(`Mostrando a primeira posição do array depois de organizar ${num[0]}`)

console.log('<-------------------------------->');

console.log(num);
console.log(`Posição 5: ${num[5]}`);
num.push(0.5) // cria uma posição no final da array só pra colocar o 0.5
console.log(`Posição 5: ${num[5]}`);

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
console.log(`Procurando a Key do valor 7 na array: ${num.indexOf(7)}`); // Retorna o índice do elemento
console.log(`Procurando a Key do valor 7 na array: ${num.indexOf(0)}`); // Retorna -1 quando não acha o valor

console.log('<-------------------------------->');

console.log(num);

console.log(num.slice(0, -1)); // não mexe no Array original

console.log('<-------------------------------->');

console.log(num);

num.pop() // Remove o ultimo elemento do Array
console.log(`Foi removido o último elemento ${num}`);

console.log('<-------------------------------->');

console.log(num);

//  splice(index, delete, valor que vai adicionar, valor que vai adicionar, ...)
num.splice(2, 1, 'teste', 20)
// tira 1 elemento começando do index 2 e adiciona 'teste' e 20

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

const numFiltrado = num.filter(callbackFilter) // Filter só recebe valor boleano
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

console.log(numFiltrado);
