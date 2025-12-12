function Aula(nome, videoID) {
    this.nome = nome;
    this.videoID = videoID;
} //Função construtora

const aula1 = new Aula('Bem Vindo', 123);
const aula2 = new Aula('Até Breve', 456);
console.log(aula1, aula2);

function novo(f, ...params) { //simula o funcionamento do New
    const obj = {}; //Criação do Objeto: Cria um objeto literal vazio, que será a nova instância.
    obj.__proto__ = f.prototype; //Herança Protótipica: Define o protótipo do novo objeto (obj) para ser o mesmo objeto referenciado por f.prototype (ou seja, Aula.prototype)
    f.apply(obj, params); //Execução do Construtor: Chama a função construtora original (f, que é Aula) usando o método apply
    return obj; //Retorno: Retorna o objeto recém-construído e inicializado.
}

const aula3 = novo(Aula, 'Bem Vindo', 123);