// IMC
const nome = "João";
const altura = 1.82;
const peso = 100;

imc = (peso / ( altura * altura ));

msgabaixo = `${nome}, você não está acima do peso.`;
msgacima = `${nome}, você está acima do peso.`;

if ( imc >= 30 ){
    console.log(`Seu IMC é ${imc}`);
    console.log(msgacima);
} else {
    console.log(`Seu IMC é ${imc}`);
    console.log(msgabaixo);
}