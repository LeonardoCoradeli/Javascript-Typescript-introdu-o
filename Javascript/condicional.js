//if/else

let nome="João";

if(nome==="João"){
    console.log("O nome é João");
}
else{
    console.log("O nome não é João");
}

//switch

let cargo ="professor";
switch(cargo){
    case "chefe":
        console.log("O cargo é chefe");
        break;
    case "aluno":
        console.log("O cargo é aluno");
        break;
    case "diretor":
        console.log("O cargo é diretor");
        break;
    default:
        console.log("O carrgo não foi encontrado.");
}

//ternario
console.log(cargo==="professor"? "O cargo é professor":"O cargo não é professor");

