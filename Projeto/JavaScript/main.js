/*1 - Dado o seguinte array de strings

    ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o']
Crie um script que exiba na tela a seguinte string 'ambitus.io'.

*/
var letras = ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o'];
var contagemP;
var contagemS;

function primeiro() {
    var palavra = '';
    contagemP = contagemNumero(contagemP);

    for(letra of letras){
        palavra += letra;
    }
    //alert(palavra);
    var resolucaoPrimeira = document.querySelector('#resolucaoPrimeira');
    var paragrafoResposta = document.createElement('p');

    paragrafoResposta.setAttribute('id', 'paragrafo 1_'+contagemP);
    paragrafoResposta.style.cssFloat="lefth";
    paragrafoResposta.innerText = (contagemP > 1 )?" "+ palavra : palavra;
    resolucaoPrimeira.appendChild(paragrafoResposta);
}

function contagemNumero(valor){
    if(typeof valor === "undefined"){
        valor = 1;
    }else if(valor == 1){
        valor++;
    }
    return valor;
}


/*
2 - Dado o array abaixo, percorra-o e imprima na tela apenas os dados que não são undefined ou null

    ['o', undefined, null, 'l', undefined, 'a', ' null', null]
*/
function segundo(){
    var alfaNumericos =  ['o', undefined, null, 'l', undefined, 'a', ' null', null];
    
    var resolucaoS = document.querySelector('#resolucaoSegunda');
    for(alfa of alfaNumericos){
        if(alfa !== 'undefined' && alfa != null){
            contagemS = contagemNumero(contagemS);
            //alert(alfa);
            var paragrafoRespostaS = document.createElement('p');
            paragrafoRespostaS.setAttribute('id', 'paragrafo 2_'+contagemS);
            paragrafoRespostaS.style.cssFloat="lefth";
            paragrafoRespostaS.innerText = (contagemS > 1 )?" "+ alfa : alfa;
            resolucaoS.appendChild(paragrafoRespostaS);
        }
    }
}

/*
3 - Exiba todos os itens do array abaixo, 1 por 1 após 3 segundos usando o conceito de Promise e setTimeout

    ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o']
*/

function terceiro(){
    var letras = ['a', 'm', 'b', 'i', 't', 'u', 's', '.', 'i', 'o'];
    var tempoInicial = 3000;
  
    for (let i = 0; i < letras.length; i++){
        var tempo ;
        //Controle do tempo.Onde quando passar na possição do inicial do arrayLetras{ a, m, ...} 
        // irá gastar 3 segundos para chamar a primeira posição imprimindo no console.log, e assim para as proximas posições.
        if(i == 1){
            tempo = tempoInicial *2;
        }else if(i > 1){
            tempo = tempo + tempoInicial; 
        }else {
            tempo = tempoInicial;
        }

        var minhaPromise = function() {
            return new Promise (function (resolve, reject){
                setTimeout(resolve, tempo, letras[i]);
            })
        }
        minhaPromise()
        .then(function(response){
            //alert(response);
            console.log(response);
        });
    }
}


/*
4 - utilizando uma estrutura de repetição (map, foreach, for, for in, for of), percorra a lista abaixo e imprima na tela apenas o atributo 'nome'

    [
        {
            "nome": "Thiago",
            "idade": 4567
        },
        {
            "nome": "Caio",
            "idade": 8
        },
        {
            "nome": "Bruno",
            "idade": 24
        }
    ]
*/
function quarto() {
    var pessoas = 
    [
        {
            "nome": "Thiago",
            "idade": 4567
        },
        {
            "nome": "Caio",
            "idade": 8
        },
        {
            "nome": "Bruno",
            "idade": 24
        }
    ]

    for(pessoa of pessoas){
        alert(pessoa.nome);

    }
}

var xhr = new XMLHttpRequest();

xhr.open('GET','https://api.github.com/users/joaofnetojfn');
xhr.send(null);

xhr.onreadystatechange = function(){
    if (xhr.readyState === 4) {
        


        console.log(JSON.parse(xhr.responseText));
        var response = JSON.parse(xhr.responseText);
        
        var linkLogo = document.querySelector('#logoLink');
        var gitSocial = document.querySelector('#socialGit');
        var logoRodaP = document.querySelector('#logo');
        linkLogo.setAttribute('href',response.html_url);
        gitSocial.setAttribute('href',response.html_url);
        logoRodaP.setAttribute('src',response.avatar_url);
    }
}





