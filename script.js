/* Regras da incripitação: 
"e" e convertido para "enter" 
"i" e convertido para "imes"
"a" e convertido para "ai"
"o" e convertido para "ober"
"u" e convertido para "ufat"
Somente letras minusculas
Não se permite acentos  
*/

/* Regras de desencriptação: 
"enter" e convertido para "e" 
"imes" e convertido para "i"
"ai" e convertido para "a"
"ober" e convertido para "o"
"ufat" e convertido para "u"
Somente letras minusculas
Nao se permitem acentuação de palavras   
*/


//----- função para encripitar o texto -----//
function encriptarTexto(texto){

    arrayTexto = [];
    var largoTexto = texto.length;
    
    //Guardamos o texto dentro do array
    for(var indiceTexto = 0; indiceTexto < largoTexto; indiceTexto++){
        arrayTexto.push(texto.charAt(indiceTexto));
    }
    
    var largoArray = arrayTexto.length;

    //Percorra o arrayz para trocar o texto conforme apropriado
    for(var indiceArray = 0; indiceArray < largoArray; indiceArray++){
        if(arrayTexto[indiceArray] == 'e'){
            arrayTexto.splice(indiceArray, 1, 'enter');
        }else if(arrayTexto[indiceArray] == 'i'){
            arrayTexto.splice(indiceArray, 1, 'imes');
        }else if(arrayTexto[indiceArray] == 'a'){
            arrayTexto.splice(indiceArray, 1, 'ai');
        }else if(arrayTexto[indiceArray] == 'o'){
            arrayTexto.splice(indiceArray, 1, 'ober');
        }else if(arrayTexto[indiceArray] == 'u'){
            arrayTexto.splice(indiceArray, 1, 'ufat');
        }
    }

    //Passa os indices do array a um string
    var textoEncriptado = "".concat(...arrayTexto);
    
    //Imprimi o resultado em um input
    console.log(textoEncriptado);
    var textoSalida = document.querySelector("#msg");
    textoSalida.value = textoEncriptado;
}

//----- Função para Desencriptar o texto -----//
function desencriptarTexto(texto){
    //Rempassar os valores correspondentes
    var textoDesencriptado = texto.replace(/ai/g,'a');
    textoDesencriptado = textoDesencriptado.replace(/enter/g,'e');
    textoDesencriptado = textoDesencriptado.replace(/imes/g,'i');
    textoDesencriptado = textoDesencriptado.replace(/ober/g,'o');
    textoDesencriptado = textoDesencriptado.replace(/ufat/g,'u');

    //Imprimir o resultado no input
    console.log(textoDesencriptado);
    var textoSalida = document.querySelector("#msg");
    textoSalida.value = textoDesencriptado;
}

//----- capturando os botoes e passando as funçoes -----//
var botonEncriptar = document.querySelector("#btn-encriptar");
botonEncriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    encriptarTexto(textoEntrada);
});

var botonDesencriptar = document.querySelector("#btn-desencriptar");
botonDesencriptar.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto").value;
    desencriptarTexto(textoEntrada);
});


//----- Função para copiar no text area -----//
function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
}  
document.querySelector("#btn-copy").addEventListener("click", copy);

//----- Função para limpar os inputs -----//
function limpiar(input){
    input.value= "";
}

var botonLimpiarEntrada = document.querySelector("#btn-limpiarEntrada");
botonLimpiarEntrada.addEventListener("click",function(event){
    event.preventDefault();
    var textoEntrada = document.querySelector("#input-texto");
    limpiar(textoEntrada);
});

var botonLimpiarSalida = document.querySelector("#btn-limpiarSalida");
botonLimpiarSalida.addEventListener("click",function(event){
    event.preventDefault();
    var textoSalida = document.querySelector("#msg");
    limpiar(textoSalida);
});