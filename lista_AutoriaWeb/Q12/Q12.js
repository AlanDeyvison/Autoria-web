
function pesquisarPalavra(){
    const palavra = document.getElementById('pesquisa').value.trim();
    const resultadoBusca = document.getElementById('resultadoBusca');

    if(!palavra){
        document.getElementById('resultadoBusca').innerHTML = "insira uma palavra para pesquisar";
        return;
    }

    const containerTexto = document.querySelector('.textoClass');
    let textoHtml = containerTexto.innerHTML;

    textoHtml = removerDestaque(textoHtml);
    
    const regex = new RegExp(`(${palavra})`, 'gi'); //indentificar palavra
    const contador = (textoHtml.match(regex) || []).length; //contar palavras

    if(contador > 0){
        const texotDestaques = textoHtml.replace(regex, '<span class="grafado">$1</span>' );
        containerTexto.innerHTML = texotDestaques; //modificando o texto para os que tao grafado


        resultadoBusca.innerHTML = `
        <span>
        Encontrei ${contador} palavras iguais a ${palavra}.
        </span>
        `;
    }else{
        containerTexto.innerHTML = textoHtml;

        resultadoBusca.innerHTML = `não foi encontrado nenhuam palavra igual a ${palavra}`;
    }
 
}



//função para limpar caso tenha algo destacado 
function removerDestaque(texto){
    const regex = /<span class="grafado">(.*?)<\/span>/g;
    return texto.replace(regex, '$1');

}


//só testando o event
/*
 document.getElementById('pesquisa').addEventListener('keypress', function(event){
    if(event.key === 'Enter') {
        pesquisarPalavra();
    }
 });
 */