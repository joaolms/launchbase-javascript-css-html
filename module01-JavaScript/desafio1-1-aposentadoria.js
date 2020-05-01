/*
Contribuição mínima para homem são 35 anos
Contribuição mínima para mulheres sao 30 anos

Utilizando a regra 85-95, a soma da idade com o tempo de contribuição do homem precisa ser de no mínimo 95 anos, enquanto a mulher precisa ter no mínimo 85 anos na soma;
Com base nas regras acima imprima na tela as mensagens:

SE a pessoa estiver aposentada: Silvana, você pode se aposentar!;
SE a pessoa NÃO estiver aposentada: Silvana, você ainda não pode se aposentar!;
*/

const nome = "Silvana";
const sexo = "F";
const idade = 48;
const contribuicao = 23;

regra = ( idade + contribuicao );

if( sexo === "F" ){
    if( regra < 85 ){
        console.log(`${nome}, você ainda não pode se aposentar.`);    } else {
        console.log(`${nome}, você pode se aposentar.`);
    }
} else {
    if( regra < 95 ){
        console.log(`${nome}, você ainda não pode se aposentar.`);
    } else {
        console.log(`${nome}, você pode se aposentar.`);
    }
}