const nome = "Rebeca";
const concat = 'Olá ' + nome + '!';
// console.log(concat);

//template strings são expressões embutidas. Pode-se utilizar string multi-linhas e interpolação de string com elas
const template = `
    Olá
    ${nome}!`;
console.log(concat, template);
//exemplo de um template string denominado pelos caracteres especiais de CRASE, podendo ser escrito em várias linhas e interpretar uma várias atavés do caractere $ seguido de chaves {}. EX: ${TESTE}

//pode-se utilizar templates strings para delimitar e interpretar expressões numéricas
console.log(`1 + 1 = ${1 + 1}`)

//função que transforma a string armazenada em uma variável em maiúsculas
const up = texto => texto.toUpperCase();
console.log(`Ei... ${up('cuidado')}!`);