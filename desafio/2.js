/*Juros

Elabore uma função que recebe três parâmetros:

    capital inicial - exemplo: 1000
    taxa de juros - exemplo: 0.02
    tempo da aplicação - exemplo: 36

A função retornará o montante da aplicação financeira sob o regime de juros compostos.

Nome da função: juros

Paramêtros: (number, number, number)

Retorno: number*/


function juros(capInicial, txJuros, tempo) {
    let montante = capInicial*(1+txJuros)**tempo

    return montante.toFixed(2)
}


console.log(juros((1000, 0.02, 36)))
