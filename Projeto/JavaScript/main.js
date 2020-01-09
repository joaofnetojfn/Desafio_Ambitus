/*1 - Dado o seguinte array de strings

    ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o']
Crie um script que exiba na tela a seguinte string 'ambitus.io'.

*/
var letras = ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o'];
function primeiro() {
    var palavra = '';

    for(letra of letras){
        palavra += letra;
    }
    alert(palavra);
}

/*
2 - Dado o array abaixo, percorra-o e imprima na tela apenas os dados que não são undefined ou null

    ['o', undefined, null, 'l', undefined, 'a', ' null', null]
*/
function segundo(){
    var alfaNumericos =  ['o', undefined, null, 'l', undefined, 'a', ' null', null];
    for(alfa of alfaNumericos){
        if(alfa !== 'undefined' && alfa != null){
            alert(alfa);
        }
    }
}

/*
3 - Exiba todos os itens do array abaixo, 1 por 1 após 3 segundos usando o conceito de Promise e setTimeout

    ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o']
*/

function terceiro(){
    var letras = ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o'];
    letras.forEach(alertFunc);

    /*for (let i = 0; i < letras.length; i++){
        setTimeout(function(){ alertFunc(letras[i]); }, 3000);
        

    }*/
}
function alertFunc(letra){
    return new Promise (( resolve, reject) => {
        setTimeout(() => {
            alert(letra);
        },3000)
    })

    
}



