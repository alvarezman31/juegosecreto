
let numeroSecreto = 0;
let intentos = 0;
let listanNmerosSorteados = [];
let numeroMaximo = 10;
let numerosLista =[2,6,8,10,5,22,98,25,63,54,78];
let numerosLista2 =[2,6,8,10,5,22,98,25,63,54,78];
function verificarIntento(){
    //alert('Click desde el Botón');
    let numeroDeUsuario =  parseInt(document.getElementById('valorUsuaro').value);    
    if (numeroDeUsuario===numeroSecreto)
        {
            asignarTextoElemento('p',`Acertastes el Número en ${intentos} ${intentos==1?'vez':'veces'}`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        }
        else{
            // el usuario no acerto 
            if (numeroDeUsuario>numeroSecreto) {
                asignarTextoElemento('p',`El Número secreto es Menor `);
            } else {
                asignarTextoElemento('p',`El Número secreto es mayor Intento`);
            }
            intentos++;
            limpiarCaja();
            asignarTextoElemento('#intentos',`Intento Nro. ${intentos} `);
        }
    return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
    
}

function generarNumeroSecreto()
{
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listanNmerosSorteados);

    // si ya sortiamos todos los numeros
    if (listanNmerosSorteados.length==numeroMaximo) {
        alert("No hay mas Numeros");
        console.log("No hay mas Numeros");
       return;
    }
    // valido si el numero generado esta en la lista
    if (listanNmerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    }
    else{
        listanNmerosSorteados.push(numeroGenerado);        
        return numeroGenerado;
    }

    
}

function limpiarCaja() 
{
    let valorCaja = document.querySelector('#valorUsuaro') // con el # se le indica que se accesa por el id
    valorCaja.value='';
    valorCaja.focus();    
}

function condicionesIniciales() {
    numeroSecreto = generarNumeroSecreto();    
    intentos = 1;   
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`indica un número del 1 al ${numeroMaximo}`);       
    asignarTextoElemento('#intentos',`Intento Nro. ${intentos} `);
}
function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}


function sumaLista(lista) {
    let promedio = 0;
    lista.forEach((element) =>promedio += element);
    console.log(promedio/numerosLista.length);
   //console.log(`Suma de valores: ${function (lista.forEach((element) =>promedio += element); console.log(promedio));} `);
    console.log(`Valor Maximo: ${lista.reduce((a, b) => Math.max(a, b), -Infinity)} `);
    
    
}
function promedioLista(lista) {
    let promedio = 0;
    lista.forEach((element) =>promedio += element);
    console.log(promedio/numerosLista.length);
    console.log(`Suma de valores: ${promedio} `);
    console.log(`Valor Minimo: ${lista.reduce((a, b) => Math.min(a, b), Number.POSITIVE_INFINITY)} `);
    console.log(`Valor Maximo: ${lista.reduce((a, b) => Math.max(a, b), -Infinity)} `);
    console.log(`El Numero 22 se encuentra el la posicion [: ${lista.indexOf(78)==-1?"No se encuentra en la lista":lista.indexOf(78) } ] `);
    for (let index = 0; index < lista.length; index++) {
        console.log(`Suma del elemento ${index} es = ${numerosLista[index] + numerosLista2[index]}`)
        
    }
    lista.forEach(element => { console.log(`El cuadrado de ${element} es = ${element*element}`)
        
    });
    
}
//sumaLista(numerosLista)
promedioLista(numerosLista)
condicionesIniciales();
