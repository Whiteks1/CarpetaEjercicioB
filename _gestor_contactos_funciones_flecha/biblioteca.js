//Función para convertir texto a minúsculas sin tildes
function limpiaLetra(letra_bruta) {
    let letra_a_limpiar = letra_bruta.toLowerCase();
    let letra_limpia = '';
    switch (letra_a_limpiar) {
        case 'á':
        case 'à':
        case 'ä':
            letra_limpia = 'a'
            break;
        case 'é':
        case 'è':
        case 'ë':
            letra_limpia = 'e'
            break;
        case 'í':
        case 'ì':
        case 'ï':
            letra_limpia = 'i'
            break;
        case 'ó':
        case 'ò':
        case 'ö':
            letra_limpia = 'o'
            break;
        case 'ú':
        case 'ù':
        case 'ü':
            letra_limpia = 'u'
            break;
        default:
            letra_limpia = letra_a_limpiar;
            break;
    }

    return letra_limpia
}
//validación del texto
//elimina espacios redundantes y comprueba que la cadena tenga al menos 3 caracteres
function validaTxt(texto) {
    let txt_limpio = texto.trim()
    while (txt_limpio.indexOf('  ') != -1) {
        txt_limpio = txt_limpio.replaceAll('  ', ' ');
    }
    if (txt_limpio.length < 3) {
        return false;
    }
    return txt_limpio;
}
//función para eliminar espacios redundantes
//validación del texto
function textoTrim(texto) {
    let txt_limpio = texto.trim()
    while (txt_limpio.indexOf('  ') != -1) {
        txt_limpio = txt_limpio.replaceAll('  ', ' ');
    }
    return txt_limpio;
}
//función para crear un nodo a partir de 3 parametros: tipo de nodo, clase css, y contenido
function creaNodo(tipo, clase, contenido) {
    if (tipo === null || tipo === '') {
        tipo = 'span'
    }
    let nodo = document.createElement(tipo);
    nodo.className = clase;
    nodo.textContent = contenido;
    return nodo;
}