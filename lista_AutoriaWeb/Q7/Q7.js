function inverter(){
    let nomes = [];
    let invertidos

    nomes.push(document.getElementById('nome1').value);
    nomes.push(document.getElementById('nome2').value);
    nomes.push(document.getElementById('nome3').value);
    nomes.push(document.getElementById('nome4').value);
    nomes.push(document.getElementById('nome5').value);

    invertidos = nomes.reverse();

    document.getElementById('nome1').value = invertidos[0];
    document.getElementById('nome2').value = invertidos[1];
    document.getElementById('nome3').value = invertidos[2];
    document.getElementById('nome4').value = invertidos[3];
    document.getElementById('nome5').value = invertidos[4];
 }