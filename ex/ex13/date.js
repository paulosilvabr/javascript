const data1 = new Date;
console.log(data1.toString())

const data2 = new Date('2007-08-20 20:10:32')
console.log(data2.toString())

const data = new Date('2019-04-20 20:20:59');
console.log('Dia', data.getDate());
console.log('Mês', data.getMonth() + 1);
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay());
console.log(data.toString());

function zeroEsquerda(num) {
    num >= 10 ? num : `0${num}`
}

function formataData(data){
    const dia = zeroEsquerda (data.getDate());
    const mes = zeroEsquerda (data.getMonth() + 1);
    const ano = zeroEsquerda (data.getFullYear());
    const hora = zeroEsquerda (data.getHours());
    const min = zeroEsquerda (data.getMinutes());
    const seg = zeroEsquerda (data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
}

const dataFormatoErrado = new Date()
const dataBrasil = formataData(dataFormatoErrado)
console.log(dataBrasil)
