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
    },
    {
        nome: "Brandon Stark",
        nota: 10
    }
];

const alunosDaTurmaB = [
    {
        nome: "Jaime Lannister",
        nota: 5
    },
    {
        nome: "Tyrion Lannister",
        nota: 9
    },
    {
        nome: "Cersei Lannister",
        idade: 0
    }
];

function calculaMedia(alunos){
    let soma = 0;
    for (let i = 0; i < alunos.length; i++) {
        console.log(i);
        soma = soma + alunos[i].nota;
    }

    const media = (soma / alunos.length);
    return media.toFixed(1);
}

function enviaMensagem(media, turma) {
    if ( media > 5 ) {
        console.log(`A media da turma ${turma} foi de ${media}. Parabéns`);
    } else {
        console.log(`A média da turma ${turma} é menor que 5.`);
    }
}

const mediaTurmaA = calculaMedia(alunosDaTurmaA);
const mediaTurmaB = calculaMedia(alunosDaTurmaB);

enviaMensagem(mediaTurmaA, "turmaA");
enviaMensagem(mediaTurmaB, 'turmaB');