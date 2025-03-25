function Pessoa() {
    this.idade = 0;

    //arrow function sendo passada dentro uma função
    setInterval(() => {
        this.idade++;
        console.log(this.idade);
    }, 1000)
}

//function pessoa sendo instanciada e sendo ativada
new Pessoa