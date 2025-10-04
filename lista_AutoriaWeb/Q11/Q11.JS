function tabuada(){
    let numero = parseFloat(document.getElementById('numero').value);
    let resultado;

    for(let i = 0; i < 10; i++){
        
        switch(i){
            
            case 0:
                resultado = numero * (i+1);
               
                document.getElementById('x1').innerHTML = numero + "*" + (i+1);
                document.getElementById('result1').innerHTML = resultado;
                break;

            case 1:
                resultado = numero * (i+1);
               
                document.getElementById('x2').innerHTML = numero + "*" + (i+1);
                document.getElementById('result2').innerHTML = resultado;
                break;
            case 2:
                resultado = numero * (i+1);
               
                document.getElementById('x3').innerHTML = numero + "*" + (i+1);
                document.getElementById('result3').innerHTML = resultado;
                break;
            case 3:
                resultado = numero * (i+1);
               
                document.getElementById('x4').innerHTML = numero + "*" + (i+1);
                document.getElementById('result4').innerHTML = resultado;
                break;
            case 4:
                resultado = numero * (i+1);
               
                document.getElementById('x5').innerHTML = numero + "*" + (i+1);
                document.getElementById('result5').innerHTML = resultado;
                break;
            case 5:
                resultado = numero * (i+1);
               
                document.getElementById('x6').innerHTML = numero + "*" + (i+1);
                document.getElementById('result6').innerHTML = resultado;
                break;
            case 6:
                resultado = numero * (i+1);
               
                document.getElementById('x7').innerHTML = numero + "*" + (i+1);
                document.getElementById('result7').innerHTML = resultado;
                break;
            case 7:
                resultado = numero * (i+1);
               
                document.getElementById('x8').innerHTML = numero + "*" + (i+1);
                document.getElementById('result8').innerHTML = resultado;
                break;
            case 8:
                resultado = numero * (i+1);
               
                document.getElementById('x9').innerHTML = numero + "*" + (i+1);
                document.getElementById('result9').innerHTML = resultado;
                break;
            case 9:
                resultado = numero * (i+1);
               
                document.getElementById('x10').innerHTML = numero + "*" + (i+1);
                document.getElementById('result10').innerHTML = resultado;

        }
    }
}