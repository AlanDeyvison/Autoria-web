function verificarPalindromo() {
    let palavra = document.getElementById('palindromo').value.toLowerCase();
    let i = palavra.length-1;
    let j = 0;
    let flag = false;

    while (j<i){

        if(palavra[i] !== palavra[j] ){
            flag = true;
            break;
        }

        i--;
        j++;
        
    }

    if(flag == true){
        document.getElementById('resultado').innerHTML = "não é um palindromo";
    }else{
        document.getElementById('resultado').innerHTML = "é um palindromo";
    }


}