function embaralharNomes() {
    let embaralhamento = ''; //forçação pra mostrar que é string homi
    let nome1 = document.getElementById('nome1').value;
    let nome2 = document.getElementById('nome2').value;

    let maxLetras = Math.max(nome1.length, nome2.length);


        for(let i = 0; i < maxLetras; i++){

            if(i < nome1.length)
            embaralhamento += nome1[i];

            if(i < nome2.length)
            embaralhamento += nome2[i]; // o push não funcionou :(
            
        }

    document.getElementById('nomeResult1').value = embaralhamento;

}