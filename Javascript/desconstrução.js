const person={
    olhos: "verdes",
    boca:{
        dentes: "brancos",
        lingua: "vermelha"
    }
}

//descontruido

let {boca} = person;
let {lingua} = boca;

console.log(boca);
console.log(lingua);

//descontruindo vetores

let numeros=[1,2,3];
let [um,dois]=numeros;

console.log(um);
console.log(dois);

//mudando objetos ou vetores

let newperson={...person,olhos:"castanhos"};

console.log(newperson);
