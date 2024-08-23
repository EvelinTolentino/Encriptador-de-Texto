const textArea = document.querySelector(".ingresa");
const mensaje = document.querySelector(".imagen__texto");
const imagen = document.querySelector(".imagen__persona");

/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat" */

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
    imagen.style.display = "none"
}


function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = "";
   imagen.style.display = "block"
}

function desencriptar(stringeDesencriptada){
    let matrizCodigo = [["e", "enter"],["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringeDesencriptada = stringeDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringeDesencriptada.includes(matrizCodigo[i][1])){
            stringeDesencriptada = stringeDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }
    }
    return stringeDesencriptada
}

