// Estrutura de um Tratamento de erro

try {
    // Bloco de código que pode dar erro
}
catch (e) // esse (e) é a variável que guarda o erro que deu, pode ser referênciada no bloco abaixo ou armazenada em um banco de dados para a equiper ter conhecimento do erro, por exemplo
{
    // Bloco de código que é execultado apoós dar erro
}
finally {
    // Sempre é execultado
}

// throw lança o erro pra estrutura de erro que está execultando a função que ele esta dentro

function exemplo() {
    throw new Error("Esta é uma mensagem de erro."); // Lançando erro pro Try
}

try {
    exemplo();
} catch (error) {   // Esse (error) é justamente o erro que foi lançado pelo throw
    console.error(error.message);   // o .message é só pra pegar a mensagem dentro do erro
}

// Exemplo de uma estrutura de erro

function retonaHora (data) {
    if (data && ! (data instanceof Date)) {
        throw new TypeError('Esperando instância de Date.'); // throw passa o erro pro try
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

