const nome = "Marcelo Eltz";
let nome2 = "";
let pessoaDefault = {
    nome: "Marcelo Eltz",
    idade: "33",
    trabalho: "programador"
}

let nomes = ["Marcelo Eltz ", "Maria Silva", "Pedro Silva"]

let pessoasListaVazia = [];

let pessoas = [

    {
        nome: "Marcelo Eltz",
        idade: "33",
        trabalho: "programador"
    },
    {
        nome: "Maria Silva",
        idade: "25",
        trabalho: "ux/ui Designer"
    }

];


function alterarNome() {
    nome2 = "Maria Silva";
    console.log("valor alterado:");
    console.log(nome2);
}

function recebeEalteraNome(novoNome) {
    nome2 = novoNome;
    console.log("valor alterado recebendo um novo nome ");
    console.log(nome2);
}

function imprimirPessoa(pessoa) {
    console.log("nome");
    console.log(pessoa.nome);

    console.log("idade");
    console.log(pessoa.idade);

    console.log("trabalho");
    console.log(pessoa.trabalho);
}

function adicionarPessoa(pessoa) {
    pessoa.push(pessoa);
}

function imprimirPessoa() {
    console.log("--------IMPRIMIR PESSOAS-------");
    pessoas.forEach((item) => {
        console.log("Nome:");
        console.log(item.nome);

        console.log("idade");
        console.log(item.idade);

        console.log("trabalho");
        console.log(item.trabalho);
    })
}

adicionarPessoa({
    nome: "Pedro Silva",
    idade: "28",
    trabalho: "Porteiro"
});

imprimirPessoas();



//<script src="./js/index.js"></script>

//document.getElementById("link-conta").addEventListener("click", finction() {
//alert("o usuário clicou no link criar conta.");
//})

//imprimirPessoa(pessoaDefault);

//imprimirPessoa({
//nome: "Maria Silva",
//idade: "25",
//trabalho: "ux/ui Designer"
//});