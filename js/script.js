function saludo1(){
    console.log("Welcome");
}

saludo1();

function salida2a(){
    alert(5+3);
    alert("La suma de los 2 numeros es " + (5+3))

}

function salida2b(){
    let elemento=document.getElementById("salida2b");
    elemento.innerHTML="La suma de los 2 numeros es " + (5+3);
}

function salida3(){
    let nombre=prompt("Por favor ingrese su nombre. ");
    alert("Saluton "+nombre);
}

function funcion5(numero){
    return(numero % 2=== 0)

}

function LeeValores(){
    let varNum1=document.getElementById("Num1")
    let varNum2=document.getElementById("Num2")
    let valorNum1=VarNum1.Value
    let valorNum2=varNum2.value
    return compara(valorNum1, valorNum2)
    

}

function compara(a, b){
    if(a>b){
        return a;
    }
    else{
        return b;
    }
}