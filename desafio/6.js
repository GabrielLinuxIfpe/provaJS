/*
Bhaskara
​

Uma das vantagens da programação é a automatização de tarefas que não gostamos de realizar.

Dito isto, elabore uma função cujo objetivo é resolver a fórmula de Bhaskara. Para isso, sua função deve receber três parâmetros, “ax2”, “bx” e “c”, de tal modo que na equação: 3x² - 5x + 12 os valores seriam respectivamente: 3, -5, 12.

Como retorno deve ser passado um vetor com no máximo 2 valores, um para cada possível resultado.

Observação: Caso o delta seja negativo o array deve ser retornado vazio, se delta for igual a zero o array deve ser retornado com apenas um valor.

Nome da função: bhaskara

Paramêtros: (number)

Retorno: string
*/


function bhaskara(a, b, c) {
    let delta = (b**2)-(4*a*c)
    console.log(delta)

    if(delta < 0) {
        return []
    } else if(delta == 0){
        let baskara = (((-1) * b)) / (2*a)
        let arr = []
        arr.push(baskara)

        return arr
    }else {
        let baskara1 = (((-1) * b) + (Math.sqrt(delta))) / (2*a)
        let baskara2 = (((-1) * b) - (Math.sqrt(delta))) / (2*a)

        let arr = []

        arr.push(baskara1)
        arr.push(baskara2)

        return arr
    }
}



console.log(bhaskara(-3, 18, -15))
console.log(bhaskara(3, -4, 2))
console.log(bhaskara(4, -4, 1))
console.log(bhaskara(4, -12, 9))

