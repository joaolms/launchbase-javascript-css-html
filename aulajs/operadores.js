// Comparação
console.log( 5 > 4 ) // true
console.log( 5 < 4 ) // false
console.log( 5 >= 4 ) // true
console.log( 4 <= 4 ) // true

// Igualdade
console.log( 4 == "4" ) // true
console.log( 5 === 4 ) // false, pois o tipo é diferente
console.log( 4 != "5" ) // true
console.log( 4 !== "5" ) // true, pois é diferente inclusive do tipo

// Lógicos
console.log( 5 == 5 && 6 ==6 ) // true
console.log( 5 == 5 && 6 != 6 ) // false
console.log( 5 == 5 || 6 != 6 ) // true
console.log( ! (5 > 6) ) // true
console.log( ! (5 < 6) ) // false

const idade = 16
if(!(idade >= 18) || idade === 17) {
    console.log("Bloquear entrada")
} else {
    console.log("Entrada liberada")
}

// Aritméticos
console.log( 5 * 5 )   // 25
console.log( 2 / 2 )   // 1
console.log( 2 % 1.5 ) // 0.5
console.log( 2 + 2 )   // 4
console.log( 2 - 2 )   // 0

