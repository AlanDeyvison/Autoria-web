function verificarCPF(){
    let cpf = document.getElementById('cpf').value;

    if (cpf.length == 11){
        let cpfMostra = [cpf[0], cpf[1], cpf[2], ".", cpf[3], cpf[4], cpf[5], ".", cpf[6], cpf[7], cpf[8], "-", cpf[9], cpf[10] ];
        let result = cpfMostra.join("");
        document.getElementById('resultado').innerHTML = "o seu CPF " + result + " é válido."; 
        document.getElementById('resultado').className = 'valido';
    }else{
        document.getElementById('resultado').innerHTML = "o seu CPF " + cpf + " é inválido.";
        document.getElementById('resultado').className = 'invalido';
    }


    

}