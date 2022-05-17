
var pai = document.querySelector('.result')
var quebra = document.createElement('br')
var textoTela;



function verificador(){
    
    var number1 = parseInt(document.querySelector('#val1').value, 10)
    var number2 = parseInt(document.querySelector('#val2').value, 10)

    textoTela = igualdade(number1, number2)
    inserirNaTela(textoTela)

    textoTela = conferirSoma(number1, number2)
    inserirNaTela(textoTela)
    
}   

function igualdade(n1, n2){
    var auxTexto;
    
    if(n1 == n2){
        auxTexto = "iguais.";
    }
    else{
        auxTexto =  "diferentes.";
    }

    return "Os dois números são " + auxTexto + "\n Soma = "+ (n1 + n2);
}

function conferirSoma(n1, n2){
    var auxTexto =  "maior que 10 e menor que 20."
    //TODO limpar tela antes
    // * imprimir valor da soma
    //
    auxTexto = (n1 + n2 ) >= 20 ?  "maior 20." : auxTexto;
    auxTexto = (n1 + n2) <= 10 ? "menor que 10" : auxTexto
   /* if((n1 + n2 ) >= 20){
        auxTexto = "maior 20."
     }

    else if((n1 + n2) <= 10 ){
        auxTexto = "menor que 10."
    }
    else{
        auxTexto = "maior que 10 e menor que 20."
    }*/

    return "A soma de " + n1 + " + " + n2 + " é " + auxTexto;
}

function inserirNaTela(texto){
    var resultado = document.createElement('p');
    resultado.innerHTML = texto

    pai.appendChild(resultado)
    pai.appendChild(quebra)
}