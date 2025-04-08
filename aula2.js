const pontos = [12, 10, 4, 5, 6, 8, 9, 10, 15, 30, 2, 3, 34]

maiorNum = 0
let menorNum = pontos[0];
numRepetido = 0;

for(let i = 0; i<pontos.length; i++){
    if(maiorNum<pontos[i]) {
        maiorNum=pontos[i]
    }
}
console.log(" o maior numero é:", maiorNum);


for(let i = 0; i<pontos.length; i++){
    if(menorNum>pontos[i]) {
        menorNum=pontos[i]
    }
}
console.log(" o menor numero é:", menorNum);

for(let i = 0; i<pontos.length; i++){
    if(numRepetido==pontos[i]) {
        numRepetido=pontos[i]
    }
}
console.log(" o numero de itens repetidos é:", numRepetido);