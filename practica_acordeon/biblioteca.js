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

//función para generar un número al azar comprendido entre 2 parámetros
function aleatorioEntre(min, max) {
    //no es necesario comprobar si la diferencia entre los parámetros es positiva o negativa o valor cero, siempre devuelve un valor aleatorio
    if (isNaN(min) || isNaN(max) || max === null || min === null) {
        return false;
    }
    let rango = max - min;
    let aleatorio = Math.random() * rango;
    let suma = aleatorio + min;
    let redondeo = Math.ceil(suma);
    return redondeo;
}
//ordenar un array de 1 dimensión en ambos sentidos(si es ascendente, orden = 1, descendente = -1)
function ordenaArray(datos, orden) {
    datos.sort((a, b) => {
        if (a === b) {
            return 0;
        } else {
            return (a > b ? 1 : -1) * orden;
        }
    })
    return datos;
}
// la función recibe un array de dos dimensiones par ser ordenado, el segundo parámetro indica la columna por la cual queremos ordenar los datos, y el tercero si el orden es ascendente o descendente.
        function ordenArrayMultiple(datos, campo, orden) {
            datos.sort((a,b)=>{
                if (a[campo] === b[campo]) {
                    return 0;
                } else {
                    return (a[campo] > b[campo] ? 1 : -1) * orden
                }
            })
            return datos;
        }