const buttonNumber=document.getElementsByName("numero");
const buttonOperador=document.getElementsByName("operador");
const equals=document.getElementsByName("equal");
const clear=document.getElementsByName("borrar");
var result=document.getElementById("result");
var opActual="";
var opPasada="";
var op=undefined;
console.log(buttonNumber);

buttonNumber.forEach(function(buttom){
    buttom.addEventListener('click',function(){
      addNumber(buttom.innerText)
    });
});
buttonOperador.forEach(function(buttom){
    buttom.addEventListener('click',function(){
        operationSelect(buttom.innerText);

    })
});
equals.addEventListener('click',function(){
   Operation();
   updateDisplay();
});
borrar.addEventListener('click',function(){
     limpiar();
     updateDisplay();
});
function operationSelect(operacion){  

      if(operacion==="") return;
      if(operacion!==""){
         calcular();
      }
      op=operacion.toString();
      opAnterior
}
function addNumber(number){
    opActual=opActual.toString()+number.toString();
    updateDisplay()
}
function limpiar(){
    opActual="";
    opPasada="";
    op=undefined;
}
function updateDisplay(){
 
    result.value=opActual;
}
limpiar();
