let array1= [0,1,2,3,4];
console.log(array1);

let valor = array1[4];
console.log(valor);

let array2 = [0,1,2,3,4];
array2[2]=5;
console.log(array2);

/*for(let i=0;i<array1.length;i++){
    console.log(array1[i]);
}*/


//MANIPULAR VETORES

let pilha=[];
//push insere no final do array
pilha.push("Banana");
pilha.push("Maçã");
console.log(pilha);
//pop retira do final do array ou selecionado
pilha.pop();
console.log(pilha);

let pilha2=[];
pilha2.push(1);
pilha2.push(2);
pilha2.push(3);

console.log(pilha2.shift());

//MAP →destrincha o vetor

let frutas = ["Banana","Uva","Maçã"];
let novasfrutas = frutas.map((fruits)=>(fruits[0]==="B"? fruits:null));

console.log(frutas);
console.log(novasfrutas);
