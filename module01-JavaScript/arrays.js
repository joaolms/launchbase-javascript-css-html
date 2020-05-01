// Objetos
const aluno01 = {
    nome: "João",
    nota: 10
}

const aluno02 = {
    nome: "Rose",
    nota: 9
}

const media = ((aluno01.nota + aluno02.nota) / 2);
console.log(aluno01);

// Conjunto de objetos - arrays ou vetores

const alunos = [
    {
        nome: "João",
        nota: 9,
        reprovado: false
    },
    {
        nome: "Rose",
        nota: 10,
        reprovado: false
    }
]

const media1 = ((alunos[0].nota + alunos[1].nota) / 2);
console.log(media1);
console.log(alunos);

const nomesDeAlunos=["João","Rose"];
console.log(nomesDeAlunos);

/*
Marcar aluno como reprovado se a nota
for menor que 5, e também enviar uma mensagem.
*/

