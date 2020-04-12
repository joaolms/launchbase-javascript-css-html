// Declarando uma constante, não é possível alterar depois
const nome = 'Petros'
// Template string - é possível utilizar valores de variavéis dentro da variável
const nome3 = `Glauce - ${nome}`

console.log(nome3)

const notaAluno01 = 5.0
const notaAluno02 = 7.5
const notaAluno03 = 6.3


// Verificar o tipo de uma varíavel
console.log(typeof notaAluno01)

// Cálculo
const media = ((notaAluno01 + notaAluno02 + notaAluno03) / 3)
console.log(media.toFixed(2))

// Condicionais - SE a média for menor que 5, parabinazar a turma
console.log(media > 5)
if (media > 5) {
    // faz alguma coisa
    console.log(`A nota média foi de ${media}. Parabéns turma.`)
} else {
    // senão, faz outra coisa
    console.log(`Bora estudar cambada, a nota média dessa turma foi de ${media}`)
}

// Operadores
