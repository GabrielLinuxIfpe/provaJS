/*
Linha digitável

Embora não seja uma atividade muito divertida, pagar boletos é algo comum no dia a dia das pessoas. No entanto, a maioria delas não conhece exatamente o significado da sequência numérica dessas contas.

Existe um número na maior parte dos boletos e contas chamado Linha Digitável, com 48 dígitos separados em quatro campos. De modo geral, a linha digitável reproduz em números o código de barras. Com ela, você consegue realizar o pagamento de uma conta, mesmo sem ter ela em mãos.

Originalmente o código de barras tem 44 dígitos, mas que para a geração da linha Digitável é separado em quatro campos de 11 dígitos cada, onde é adicionado mais um dígido: o Dígito de Auto-Conferência (DAC), para evitar erros de digitação.

O DAC (Dígito de Auto-Conferência) módulo 11, de um número é calculado como segue:

1) multiplicando cada algarismo, pela seqüência de multiplicadores 2,3,4,5,6,7,8,9,2,3,4.... posicionados da direita para a esquerda;

DAC módulo 11 da seguinte seqüência de números: 01230067896. 

2) Soma dos produtos da multiplicação:

0 + 3 + 4 + 27 + 0 + 0 + 36 + 35 + 32 + 27 + 12 = 176

3) Resto da divisão do resultado da soma acima por 11

Resto = 176 % 11 = 0

4) Por fim o DAC é igual a: 11 - Resto da divisão<

DAC = 11 - 0 = 11, então DAC = 0 conforme observação abaixo.

Observação: Se o DAC calculado for 10 ou 11 o DAC será 0.

Dito isto, elabore uma função que recebe os números de um código de barras (string com 44 caracteres) e retorne a linha digitável.

Nome da função: linhaDigitavel

Paramêtros: (string)

Retorno: string
*/

function linhaDigitavel(codigo) {
    let bloco1 = ''
    let bloco2 = ''
    let bloco3 = ''
    let bloco4 = ''
    let fatorMultiplicativo = '43298765432'
    for(variavel in codigo) {
        if(variavel < 11){
            bloco1 += codigo[variavel]
        } else if(variavel < 22) {
            bloco2 += codigo[variavel]
        } else if(variavel < 33) {
            bloco3 += codigo[variavel]
        } else {
            bloco4 += codigo[variavel]
        }
    }

    let soma1 = 0
    for(variavel in fatorMultiplicativo){
        let resultado = parseInt(fatorMultiplicativo[variavel]) * parseInt(bloco1[variavel])
        soma1+=resultado
        
    }

    let soma2 = 0
    for(variavel in fatorMultiplicativo){
        let resultado = parseInt(fatorMultiplicativo[variavel]) * parseInt(bloco2[variavel])
        soma2+=resultado
        
    }

    let soma3 = 0
    for(variavel in fatorMultiplicativo){
        let resultado = parseInt(fatorMultiplicativo[variavel]) * parseInt(bloco3[variavel])
        soma3+=resultado
        
    }

    let soma4 = 0
    for(variavel in fatorMultiplicativo){
        let resultado = parseInt(fatorMultiplicativo[variavel]) * parseInt(bloco4[variavel])
        soma4+=resultado
        
    }

    let restoDivisaoBloco1 = soma1 % 11
    let restoDivisaoBloco2 = soma2 % 11
    let restoDivisaoBloco3 = soma3 % 11
    let restoDivisaoBloco4 = soma4 % 11

    let dac1 = 11 - restoDivisaoBloco1
    let dac2 = 11 - restoDivisaoBloco2
    let dac3 = 11 - restoDivisaoBloco3
    let dac4 = 11 - restoDivisaoBloco4

    if(dac1 == 10 || dac1 == 11) {
        dac1 = 0
    }

    if(dac2 == 10 || dac2 == 11) {
        dac2 = 0
    }

    if(dac3 == 10 || dac3 == 11) {
        dac3 = 0
    }

    if(dac4 == 10 || dac4 == 11) {
        dac4 = 0
    }


    return `${bloco1}-${dac1} ${bloco2}-${dac2} ${bloco3}-${dac3} ${bloco4}-${dac4}`




    //console.log(soma1)
    //console.log(soma2)
    //console.log(soma3)
    //console.log(soma4)
    
    //console.log(bloco1)
    //console.log(bloco2)
    //console.log(bloco3)
    //console.log(bloco4)
}


console.log(linhaDigitavel("83880000001596700110070418832051019781121383"))
console.log(linhaDigitavel("83880000001596700110070418832051019781121383"))
