var agora = new Date() // Função que trabalha com data/hora/etc
var hora = agora.getHours() // Váriavel que puxa o valor que a gente quer da função agora
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 5) {
    console.log('Boa madrugada!')
} else if (hora < 12) {
    console.log('Bom dia!')
} else if (hora <= 18) { 
    console.log('Boa Tarde!')
} else if (hora > 18 || hora <= 24) {
    console.log('Boa noite!')
}

