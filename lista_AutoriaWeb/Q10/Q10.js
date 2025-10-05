/*10) Escreva um script que receba três números fornecidos pelo usuário através de um formulário 
exiba em os números digitados em forma de tabela, a soma, a média, o produto, o maior e 
menor número.*/

function criarTabela(){

    let numeros = [];
    numeros.push(parseFloat(document.getElementById('num1').value));
    numeros.push(parseFloat(document.getElementById('num2').value));
    numeros.push(parseFloat(document.getElementById('num3').value));

    let media = 0; 
    let maior = numeros[0]; 
    let menor = numeros[0];
    let produto = 1;
    let soma = 0;


    //media e produto
    for(let i = 0; i < numeros.length; i++){
        produto *= numeros[i];
        soma += numeros[i];
    }
    //produto = media;
    media = soma/numeros.length;

    //maior e menor
    for(let i = 1; i < numeros.length; i++){
        if(numeros[i]> maior){
            maior = numeros[i];
        }
        if(numeros[i] < menor){
            menor = numeros[i];
        }
    }


    document.getElementById('resultSoma').innerHTML = soma; 
    document.getElementById('resultProduto').innerHTML = produto;//ta ficando como string!!!!! AAAAAAA (concertei kk)
    document.getElementById('resultMaior').innerHTML = maior;
    document.getElementById('resultMenor').innerHTML = menor;
    document.getElementById('resultMedia').innerHTML = media;    



}