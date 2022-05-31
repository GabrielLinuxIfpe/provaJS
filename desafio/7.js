/*
Palíndromo

Palíndromo, do grego palin (novo) e dromo (percurso), é toda palavra ou frase que pode ser lida de trás pra frente e que, independente da direção, mantém o seu sentido.

Dito isto, elabore uma função que recebe uma palavra e retorne um objeto com com duas propriedades:

palindromo: true ou false

palavra: a palavra recebida como argumento da função

Nome da função: palindromo

Paramêtros: (string)

Retorno: { palindromo: boolean, palavra: string}
*/


function palindromo(str) {     
    for(var i = 0; i < str.length / 2; i++){
        str1 = str.toLowerCase()
        if (str1[i] != str1[str1.length - i - 1]) {
            let bool =  false;
            return {'palindromo': bool, 'palavra': str}
        } else {
            let bool = true;
            return {'palindromo': bool, 'palavra': str}
        }
    }  
    
}

console.log(palindromo("Ana"))
console.log(palindromo("reviver"))
console.log(palindromo("Paulo"))
