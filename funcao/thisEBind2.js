//amarrando o contexto this, em uma função, utilizando bind, self ou uma arrow function
/*function Pessoa() {
    this.idade = 0;

    setInterval(function() {
        this.idade++;
        console.log(this.idade);
    }, 1000);
}

new Pessoa;
*/

//como verificado, neste primeiro caso, o contexto this é apontado diretamente para a função setInterval, retornando valores não numéricos, por se tratar de uma função.

//no caso a seguir faremos a correção armazenando o contexto this em uma constante e atribuindo o valor de idade no contexto da constante criada armazenando this.
function Pessoa() {
    this.idade = 0;

    const self = this;
    setInterval(function(){
        self.idade++;
        console.log(self.idade)
        
    } ,1000)
}

new Pessoa;