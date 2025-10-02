function cadastrar(){
    let senha1 = document.getElementById('senha');
    let senha2 = document.getElementById('confirmacao');
    let usuario = document.getElementById('usuario');

    if(usuario.value === "" || senha1.value === "" || senha2.value === ""){
        alert("Preencha todos os campos");
    }else{
        if(senha2.value != senha1.value){
            alert("senhas diferentes");
        }else{
            if(senha1.value.length < 6 || senha1.value.length > 10){
                alert("senhas precisam ter entre 6 a 10 caracteres")
            }else{
                alert("cadastrado");
            }
        }
    }
}