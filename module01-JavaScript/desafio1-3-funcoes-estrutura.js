const jogadores = [
    { nome: "Neymar", habilidades: [ "drible" ] },
    { nome: "CR7", habilidades: [ "velocidade", "chute" ] },
    { nome: "Messi", habilidades: [ "drible", "velocidade" ] }
]

/*
Percorra a lista de usuários com uma estrutura de repetição imprimindo em tela as informações dos usuários:
    Carlos trabalha com HTML, CSS
    Jarmine trabalha com JavaScript, CSS
    Tuane trabalha com HTML, Node.js
*/


// As duas declarações da estrutura 'for' abaixo funcionam.
// Atenção, a forma como é declarado influencia na forma como é mostrado depois, verifique os 'console.log' abaixo

//for (let i = 0 ; i < jogadores.length; i++) {
for (let jogador of jogadores){
    console.log(`${jogador.nome} is very good in ${jogador.habilidades.join(', ')}`)
    //console.log(`${jogadores[i].nome} is very good in ${jogadores[i].habilidades.join(', ')}`)
}


// Função que busca por habilidade específica
// Jogador é bom em chute?

function checaChute(pJogador) {
    for ( let habilidade of pJogador.habilidades) {
        if (habilidade === "chute") {
            return true;
        }
    }
    return false;
}

for (let i = 0; i < jogadores.length; i++) {
    const jogadorBomDeChute = checaChute(jogadores[i]);
    if(jogadorBomDeChute) {
        console.log(`${jogadores[i].nome} é muito bom de chute.`)
    }
}

// Crie um programa que calcula a soma de receitas e despesas de usuários e no fim retorna o saldo (receitas - despesas).
const clientes = [
    {
      nome: "Salvio",
      receitas: [115.3, 48.7, 98.3, 14.5],
      despesas: [85.3, 13.5, 19.9]
    },
    {
      nome: "Marcio",
      receitas: [24.6, 214.3, 45.3],
      despesas: [185.3, 12.1, 120.0]
    },
    {
      nome: "Lucia",
      receitas: [9.8, 120.3, 340.2, 45.3],
      despesas: [450.2, 29.9]
    }
];

/*
Percorra o array de usuário e para cada usuário chame uma função chamada calculaSaldo que recebe como parâmetro as receitas e despesas do usuário:
Crie uma segunda função que recebe como parâmetro um array de números e retorna a soma deles e use-a para calcular a soma de receitas e despesas dentro da função calculaSaldo:

A função calculaSaldo deve utilizar a função somaNumeros para calcular a soma de receitas e despesas e no fim retornar o saldo do usuário, ou seja receitas - despesas.
No fim exiba todos usuários em telas, seu respectivo saldo e SE o saldo é POSITIVO ou NEGATIVO:

    Fulano possui saldo POSITIVO de 43.3
    Sicrano possui saldo NEGATIVO de -90.3
*/

function calculaSaldo(pReceitas, pDespesas) {
    const somaReceitas = somaNumeros(pReceitas)
    const somaDespesas = somaNumeros(pDespesas)
    return (somaReceitas - somaDespesas);
}

function somaNumeros(pNumeros) {
    let soma = 0;
    for (let numero = 0 ; numero < pNumeros.length; numero++) {
        soma = soma + pNumeros[numero];
    }
    return soma
}

for (let i = 0; i < clientes.length; i++) {
    const saldo = calculaSaldo(clientes[i].receitas, clientes[i].despesas);
    if (saldo < 0) {
        console.log(`${clientes[i].nome} possui saldo NEGATIVO de ${saldo.toFixed(2)}`);
    } else {
        console.log(`${clientes[i].nome} possui saldo POSITIVO de ${saldo.toFixed(2)}`);
    }
}



