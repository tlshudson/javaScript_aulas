const pessoa = {
    saudacao: "Bom dia senhor(a)!",
    falar(){
        console.log(this.saudacao);
    }
}
pessoa.falar();
//chamada padrão do this com o argumento da função referenciado pela objeto

//abaixo segue um possível problema com o apontamento de this, por conta do escopo global: paradigma funcional X Orientação à objetos
//o problema abaixo foi resolvido utilizando o utilizando a função bind()

//tentativa de armazenar uma função herdada de um objeto dentro de uma variável
const falar = pessoa.falar;
falar();
//erro ao chamar a função pois o this estará apontado para o contexto global e não será retornada a função falar() normalmente

//tratativa de erro do apontamento global resolvida com bind e armazenada uma função dentro de uma constante.
const falarDePessoa = pessoa.falar.bind(pessoa);
falarDePessoa();