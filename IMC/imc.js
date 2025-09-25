function calculando(){ 
    let peso = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    let imc = peso / (altura*altura);

     let resultado = document.getElementById("resultado");
        resultado.innerHTML = `
        <h2>SEU IMC: ${imc}</h2>
    `;
}