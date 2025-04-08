let
carneBoi = 50,
carneFrango = 30 ,
carnePorco = 20,
refrigerante = 8.50,
cerveja = 5.50,
carvao = 30,
temperos = 3.50,
molhos = 5,
gastoTotal = carneBoi+ carneFrango+ carnePorco+ refrigerante+ cerveja+
carvao+ temperos+ molhos,
tempoPreparo= 5 ,
tempoCompra =120,
horasTrabalhadas = 300,
precoEspetinho = 5.25,
espetinhosFeitos = horasTrabalhadas/tempoPreparo,
lucroDoDia = espetinhosFeitos * precoEspetinho


console.log("ele fez " + espetinhosFeitos + " espetinhos")
console.log("o lucro do dia é ", lucroDoDia-gastoTotal, " reais")