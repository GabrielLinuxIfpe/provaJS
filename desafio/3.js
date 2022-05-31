/*
Progressão aritmética

A Progressão Aritmética (P.A.) é uma sequência de números onde a diferença entre dois termos consecutivos é sempre a mesma. Essa diferença constante é chamada de razão da P.A..

Sendo assim, a partir do segundo elemento da sequência, os números que surgem são resultantes da soma da razão com o valor do elemento anterior.

Exemplo: (4, 7, 10, 13, 16, ...) é uma P.A. infinita de razão 3.

Dito isto, elabore uma função que recebe três valores inteiros (number), inicio, razão e número do elemento, e retorne o elemento desejado:

Nome da função: pa

Paramêtros: (number, number, number)

Retorno: number
*/ 

function pa(inicio, razao, numElemento){
    let an = inicio + (numElemento - 1)* razao

    return an
}

console.log(pa(4, 3, 5))