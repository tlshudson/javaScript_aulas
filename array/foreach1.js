const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel'];

//function que passa nome e indice para o foreach e concatenando essas variáveis no console.log
aprovados.forEach(function(nome, indice){
    console.log(`${indice + 1}) ${nome}`);
});

//função callback passado para o foreach e nomes impressos
aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovado => console.log(aprovado);
aprovados.forEach(exibirAprovados);