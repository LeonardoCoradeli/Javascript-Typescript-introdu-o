interface Todo{
    title: string;
    description: string;
}

function updatetodo(todo:Todo,fieldstoupdate:Partial<Todo>){
    return {...todo,...fieldstoupdate};
}

//o partial serve para transformar todos os campos em opcional, nesse caso opcional ou string

const todo1:Todo = {
    title: "titulo",
    description: "descricao"
};

const todo2:Todo = updatetodo(todo1,{title: "titulo2"})

//Require funciona ao contrario exigindo que todos os campos sejam preenchidos

const todo3:Required<Todo> = updatetodo(todo1,{title:"titulo3",description: "descricao3"});


//ReadOnly faz com que seja possivel so ler o objeto

const todo4:Readonly<Todo> = updatetodo(todo1,{title:"titulo4",description: "descricao4"});

//Picked pega um campo especifico para adicionar em outro

type Titulo =  Pick<Todo,"title">;
const titulo:Titulo = {title:"Teste"};

//Omit omite um campo de uma outra interface

