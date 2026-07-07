/*
Autor: Paulo Ricardo Sousa Silva
Data: 2026-07-07 12:17:34
*/
// Estrutura de um Tratamento de erro

try {
    // Bloco de cÃ³digo que pode dar erro
}
catch (e) // esse (e) Ã© a variÃ¡vel que guarda o erro que deu, pode ser referÃªnciada no bloco abaixo ou armazenada em um banco de dados para a equiper ter conhecimento do erro, por exemplo
{
    // Bloco de cÃ³digo que Ã© execultado apoÃ³s dar erro
}
finally {
    // Sempre Ã© execultado
}

// throw lanÃ§a o erro pra estrutura de erro que estÃ¡ execultando a funÃ§Ã£o que ele esta dentro

function exemplo() {
    throw new Error("Esta Ã© uma mensagem de erro."); // LanÃ§ando erro pro Try
}

try {
    exemplo();
} catch (error) {   // Esse (error) Ã© justamente o erro que foi lanÃ§ado pelo throw
    console.error(error.message);   // o .message Ã© sÃ³ pra pegar a mensagem dentro do erro
}

// Exemplo de uma estrutura de erro

function retonaHora (data) {
    if (data && ! (data instanceof Date)) {
        throw new TypeError('Esperando instÃ¢ncia de Date.'); // throw passa o erro pro try
    }
    if (!data) {
        data= new Date();
    }
    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}
try {
    const data = new Date('01-01-1970 12:58:12');
    const hora = retonaHora();
    console.log(hora);
} catch(e) {
    // Tratar erro
    // console.log(e);
}
finally {
    console.log('Tenha um bom dia.');
}

