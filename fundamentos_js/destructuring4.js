function rand([min = 0, max = 1000]){
    if (min > max) [min, max] = [max, min] 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
    
}

console.log(rand([50, 40]));

//mais um exemplo de extração de um objeto(rand), onde podemos pegar pequenos valores e transformá-los com funcções sem precisar retirar o corpo do objeto inteiro.