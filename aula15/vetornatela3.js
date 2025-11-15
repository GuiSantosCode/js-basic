let num = [5, 8, 2, 9, 3] //declarou vetor de 6 posições
num.push(1) //colocou o 1 no final de tudo
num.sort() //transformou tudo em ordem 1,2,3..
console.log(num)
console.log(`O vetor tem ${num.length} posições`) //lenght == cumprimento
console.log(`O primeiro valor do vetor é ${num[0]}`) //num na primeira posição
let pos = num.indexOf(8) //a variável pos, vai receber o indice que está o elemento 8 (indice 4)
console.log(`O valor 8 está na posição ${pos}`) 

