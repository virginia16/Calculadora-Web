
let historial = localStorage.getItem("historial") ? JSON.parse(localStorage.getItem("historial")) : [];

function RealizarOperacion() {
    let num1 = document.getElementById('number1').value;
    let num2 = document.getElementById('number2').value;
    let operator = document.getElementById('operator').value;

    let resul = operacion(num1,num2,operator);

    guardarHistorial({
       
        "Primer Numero" : num1,
         "Operador" : operator,
        "Segundo Numero" : num2,
        "Resultado" : resul
    });
}



function operacion(n1, n2, op) {
    let resultado;
 
    switch(op){
        case '+' :
        resultado = parseInt(n1) + parseInt(n2);
        return resultado;

         case '-' :
        resultado = parseInt(n1) - parseInt(n2);
        return resultado;

         case '*' :
        resultado = parseInt(n1) * parseInt(n2);
        return resultado;

         case '/' :
        resultado = parseInt(n1) / parseInt(n2);
        return resultado;
   }


    }



function guardarHistorial(dato) {
    if (dato == undefined ) {
        alert("No se puede realizar la operacion, no hay un resultado");
    } else {
        historial.push(dato);
        localStorage.setItem("historial", JSON.stringify(historial));
        location.reload();
    }

}

