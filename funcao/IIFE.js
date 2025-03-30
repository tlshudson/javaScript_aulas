//IIFE -> Imediatly Invoke Function Expression
//Function Expression imediatamente invocada

//pode ser definida dentro de uma função anônima
//é automaticamente invocada
//foge do escopo global e abrange variáveis que estarão disponíveis somente no contexto do escopo

(function () {
    console.log("Automaticamente Invocada!");
    console.log("Foge do escopo mais abrangente");
    console.log("será invocada imediatamente na execução");
})()

