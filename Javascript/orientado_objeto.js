class Aluno{
    ra;
    nome;
    notas=[];

    constructor(ra, nome, notas){
        this.ra = ra;
        this.nome = nome;
        this.notas = notas;
    }

    media(){
        let media = 0;

        this.notas.map((nota)=>(media += nota));
        
        if(media/this.notas.length>=5.0){
            return console.log("O aluno "+this.nome+" foi aprovado");
        }
        else{
            return console.log("O aluno "+this.nome+" foi reprovado");
        }
    }
}

let aluno = new Aluno(12345678,"Leonardo",[10,4,3,10]);

aluno.media();