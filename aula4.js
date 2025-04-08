function voltagem(resistencia, amperagem) {
    let voltagem = (resistencia * amperagem)
    return voltagem
}

function resistencia(voltagem, amperagem) {
    let resistencia = (voltagem / amperagem)
    return resistencia
}

function amperagem(resistencia, voltagem) {
    let amperagem = (voltagem / resistencia)
    return amperagem
}

function CalcularLeiDeOhm(voltagem, amperagem, resistencia) {
    if (voltagem = null) {
        return console.log(voltagem(resistencia, amperagem))
    }
    if (resistencia = null) {
        return console.log(resistencia(voltagem, amperagem))
    }
    if (amperagem = null) {
        return console.log(amperagem(resistencia, voltagem))
    }
}

function imc(altura, peso) {
    let imc = (peso / (altura * altura))
    if (imc > 35 && imc < 40) {
        return console.log("seu imc é ", imc, " é você esta com obesidade 2")
    }
    if (imc > 25 && imc < 30) {
        return console.log("seu imc é ", imc, " é você esta acima do peso ")
    }
    if (imc > 18 && imc < 25) {
        return console.log("seu imc é ", imc, " é você esta saudavel")
    }
    if (imc > 16 && imc < 17) {
        return console.log("seu imc é ", imc, " é você esta abaixo do peso")
    }
    if (imc < 16) {
        return console.log("seu imc é ", imc, " é voce esta desnutrido")
    }
    if (imc > 30 && imc < 35) {
        return console.log("seu imc é ", imc, " é você esta com obesidade 1")
    }
    if (imc > 40) {
        return console.log("seu imc é ", imc, " é você esta com obesidade 3")
    }
}

function area(b, altura) {
    let area = b * altura
    return "a area é " + area
}

function distanciaPontos(x, y, xb, yb) {
    let distancia = Math.sqrt(((xb - x) * (xb - x)) + ((yb - y) * (yb - y)))
    return "a distancia é" + distancia
}

function Juros(capital, porcentagem, tempo) {
    let porcenta = porcentagem / 100
    let juros = (capital * porcenta * tempo)
    return "o total de juros é " + juros
}
let peso = 80
let altura = 2
console.log(imc(altura, peso))

let base = 90
let heigth = 45
console.log(area(base, heigth))

let x = 6
let y = 9
let xb = 2
let yb = 3
console.log(distanciaPontos(x, y, xb, yb))

let dinheiro = 5000
let porcentagem = 50
let tempo = 1
console.log(Juros(dinheiro, porcentagem, tempo))

let amper = 100
let ohm = 200
console.log(CalcularLeiDeOhm(null, amper, ohm))