const alunosDaTurmaA = [
    {
        nome: "Jon Snow",
        nota: 9
    },
    {
        nome: "Sansa Stark",
        nota: 6
    },
    {
        nome: "Arya Stark",
        nota: 10
    }
];

const alunosDaTurmaB = [
    {
        nome: "Jaime Lannister",
        nota: 4
    },
    {
        nome: "Tyrion Lannister",
        nota: 7
    },
    {
        nome: "Cersei Lannister",
        nota: 0
    }
];

function calculaMedia(alunos){
    return ((alunos[0].nota + alunos[1].nota + alunos[2].nota) / 3).toFixed(1);
};

function enviaMensagem(media, turma) {
    if ( media > 5 ) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns`)
    } else {
        console.log(`A média da turma ${turma} é menor que 5.`)
    }
};


// Adicionar uma nova propriedade ao objeto

function marcarComoReprovado(aluno) {
    aluno.reprovado = false;
    if (aluno.nota < 5) {
        aluno.reprovado = true;
    }
}

function enviarMensagemReprovado(aluno){
    if (aluno.reprovado){
        console.log(`O aluno ${aluno.nome} está reprovado!`)
    }
}

function alunoReprovado(alunos){
    for (let aluno of alunos) {
        marcarComoReprovado(aluno);
        enviarMensagemReprovado(aluno)
    }
}

const mediaTurmaA = calculaMedia(alunosDaTurmaA);
const mediaTurmaB = calculaMedia(alunosDaTurmaB);

enviaMensagem(mediaTurmaA, "turmaA");
enviaMensagem(mediaTurmaB, 'turmaB');

alunoReprovado(alunosDaTurmaA)
alunoReprovado(alunosDaTurmaB)