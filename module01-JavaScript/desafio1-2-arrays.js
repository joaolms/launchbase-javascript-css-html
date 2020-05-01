// Desafio 1
const empresa = {
    nome: "Rocketseat",
    cor: "roxo",
    foco: "programação",
    endereco: {
        rua: "Rua Guilherme Gemala",
        numero: 260
    }
};
 
console.log(`A empresa ${empresa.nome} está localizada em ${empresa.endereco.rua}, ${empresa.endereco.numero}.`);

// Desafio 2
const programador = {
    nome: "Petros",
    idade: 1,
    tecnologias: [
        {
            nome: "C++",
            especialidade: "Desktop"
        },
        {
            nome: "Python",
            especialidade: "Data Science"
        },
        {
            nome: "JavaScript",
            especialidade: "Web/Mobile"
        }
    ]
};

console.log(`O usuário ${programador.nome} tem ${programador.idade} anos e usa a tecnologia ${programador.tecnologias[0].nome} com especialidade em ${programador.tecnologias[0].especialidade}.`);
