
//para adcionar a barra
document.getElementById('data').addEventListener('input', function(event){
    let value = event.target.value.replace(/\D/g, '');

    if(value.length >= 2){
        value = value.substring(0, 2) + '/' + value.substring(2);
    }

    if(value.length >= 5) {
        value = value.substring(0,5) + '/' + value.substring(5, 9);
    }
    
    event.target.value = value;
});


function formatarData(){
    
    let data = document.getElementById('data').value;

    data = data.split("/");
    let dia = data[0];
    let mes = data[1];
    let ano = data[2];

    switch(mes) {
        case "01":
            document.getElementById('result').innerHTML = dia + "de janeiro de " + ano; 
            break;
        case "02":
            document.getElementById('result').innerHTML = dia + "de fevereiro de " + ano; 
            break;
        case "03":
            document.getElementById('result').innerHTML = dia + "de março de " + ano; 
            break;
        case "04":
            document.getElementById('result').innerHTML = dia + "de abril de " + ano; 
            break;
        case "05":
            document.getElementById('result').innerHTML = dia + "de maio de " + ano; 
            break;
        case "06":
            document.getElementById('result').innerHTML = dia + "de junho de " + ano; 
            break;
        case "07":
            document.getElementById('result').innerHTML = dia + "de julho de " + ano; 
            break;
        case "08":
            document.getElementById('result').innerHTML = dia + "de agosto de " + ano; 
            break;
        case "09":
            document.getElementById('result').innerHTML = dia + "de setembro de " + ano; 
            break;
        case "10":
            document.getElementById('result').innerHTML = dia + "de outubro de " + ano; 
            break;
        case "11":
            document.getElementById('result').innerHTML = dia + "de novembro de " + ano; 
            break;
        case "12":
            document.getElementById('result').innerHTML = dia + "de dezembro de " + ano; 
    }

}