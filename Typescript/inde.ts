type pessoa={
    nome: string;
    idaade:number;
};

let alguem:pessoa;

alguem = {
    nome: "João",
    idaade: 20,
};

console.log(alguem);

//Verifica enquanto o código é escrito se os tipos estão sendo atribuidos corretamente

function oi(nome?: string){
    console.log("oi "+nome);
}
//o ? antes de : permite que esse seja um parametre do tipo escolhido ou undefined ou seja, vazio, tornando o campo opcional


function response(palavra1:string,palavra2:string):void{
    console.log(palavra1+" "+palavra2);
}

//pode-se definir também o tipo de retorno da função

type cordenada={
    x:number;
    y:number;
}

function mostrarcordenada(pt:cordenada/*pode ser substituido por pt:{x:number,y:number}*/){
    console.log("Mostrar x: "+pt.x);
    console.log("Mostrar y: "+pt.y);
}
//o uso de tipos facilita adicionar parametros

mostrarcordenada({x:10,y:11});

type cordenada2={
    x?:number|boolean|null;
    y:number;
}

//pode-se atribuir mais de um tipo , no exemplo o x pode ser um numero, boolean,null ou vazio


interface lata{
    marca:string;
    material:string;
}

interface lata_especial extends lata{
    marca:"coca";
    material:"aluminio";
    peso:40;
}

//a diferença entre interface e tipo é a possibilidade de herança, lata_especial estende lata

