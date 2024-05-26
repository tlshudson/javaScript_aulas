{
    {
        {
            {
                {
                    var a = "Será?" ;
                    console.log(a) ;
                }
            }
        }
    }
}
//explicação dessa bagunça: VARIÁVEIS DO TIPO VAR podem ser acessadas no escopo global do código, mesmo estando em outros bloco de código; com FUNÇÕES isso não funciona!
console.log(a) ;

//caso de uma variável do tipo var dentro do escopo de uma função pode ser acessada fora dela? Teste abaixo:
function teste(){
    var b = "Mais um teste";
    console.log(b);
}

teste(); //ao acessar a função, a variável é impressa com sucesso, ao tentar acessá-la diretamente fora da função retorna um erro, veja abaixo:
// console.log(b); //este comando retornará que b is not defined. Não é possível acessar uma variável declarada dentro de outra função.
