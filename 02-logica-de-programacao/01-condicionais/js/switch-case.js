/*
Autor: Paulo Ricardo Sousa Silva
Data: 2026-07-07 12:17:34
*/
var d = new Date()
var diaSem = d.getDay()

console.log(`VocÃª esta no dia ${diaSem} da Semana`)

/*
0 = Domingo
1 = Segunda
2 = TerÃ§a
3 = Quarta
4 = Quinta
5 = Sexta
6 = SÃ¡bado
*/

switch (diaSem) {
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda-Feira')
        break;
    case 2:
        console.log('TerÃ§a-Feira')
        break
    case 3: 
        console.log('Quarta-Feira')
        break
    case 4:
        console.log('Quinta-Feira')
        break
    case 5:
        console.log('Sexta-Feira')
        break
    case 6:
        console.log('SÃ¡bado')
        break
    default:
        console.log('[ERRO 010] Data InvÃ¡lida')
        break // NÃ£o precisa colocar esse Break
}