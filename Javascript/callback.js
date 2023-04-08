//funções que são argumentos de outras funções

let callback = function(){
    console.log('Fui execultado!');
}

setTimeout(callback, 5000);