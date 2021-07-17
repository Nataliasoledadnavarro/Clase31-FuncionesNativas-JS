/// APUNTES DE LA CLASE ///

// Funciones nativas - METODOS

// Number()
// String()
// Boolean()

// Propiedades de strings
// LENGTH
// const nombre = "Carola";
// const longitudDelNombre = nombre.length // es un NUMERO

// const contrasenia = prompt("Escriba su contraseña")

// console.log(contrasenia.length)
// if (contrasenia.length <= 6) {
//   alert("Su contraseña es muy corta")
// }
// else {
//   alert("Contraseña valida")
// }

// FUNCIONES NATIVAS o METODOS de string

// toLowerCase()
// toUpperCase()

// let nombre = "nati"
// let otroNombre = "jEnNi"

// console.log(  nombre.toUpperCase()  )
// console.log(  otroNombre.toLowerCase()  )

// charAt
// const nombre = "M!ka"

// console.log( nombre.charAt(0)  ) // M
// console.log( nombre.charAt(1)  ) // i
// console.log( nombre.charAt(2)  ) // k
// console.log( nombre.charAt(3)  ) // a
// console.log( nombre.charAt(4)  ) // ""

// slice
// toma un String, y lo corta empezando por la posicion que le indiquemos
// y terminando en la posicion que le indiquemos

// const nombre = "Eliana"

// // el primer parametro es inclusivo, el segundo no lo es
// console.log(nombre.slice(1, 4)) // lia

// // El segundo parametro es opcional: si no esta, se llega hasta el final del string
// console.log(nombre.slice(1)) // liana

// tengo que agarrar la primer letra y convertirla a mayuscula
// tengo que agarrar el resto del nombre y convertirlo a minuscula
// tengo que unir ambas partes

// const nombreUsuario = prompt("Decime tu nombre")

// const capitalizarNombre = (nombre) => {
//   const primeraLetra = nombre.charAt(0)
//   const restoDelNombre = nombre.slice(1)
//   const primeraEnMayuscula = primeraLetra.toUpperCase()
//   const restoEnMinuscula = restoDelNombre.toLowerCase()
//   const nombreCompleto = primeraEnMayuscula + restoEnMinuscula

//   return nombreCompleto
// }

// console.log(capitalizarNombre(nombreUsuario))

// Las funciones nativas se pueden concatenar

// const nombre = "Agustina"
// const primeraLetraMinuscula = nombre.charAt(0).toLowerCase()
// console.log(primeraLetraMinuscula) // a

// const nombreUsuario = prompt("Decime tu nombre")

// const capitalizarNombre = (nombre) => {
//   const primeraLetra = nombre.charAt(0).toUpperCase()
//   const restoDelNombre = nombre.slice(1).toLowerCase()
//   const nombreCompleto = primeraLetra + restoDelNombre

//   return nombreCompleto
// }

// console.log(capitalizarNombre(nombreUsuario))

// replace
// Recibe dos parametros
// El primero es el valor a reemplazar
// El segundo es el valor por el cual se debe reemplazar
// Solo reemplaza la primera aparicion del valor

// const frase = "Aguante river plate"
// const otraFrase = "Griselda es fanatica de Indio Solari"

// console.log(frase.replace("v", "B"))
// console.log(otraFrase.replace("Indio Solari", "Ricardo Montaner"))
// const fraseConPalabraRepetida = "Malena tiene tres gatos. A malena le encantan los gatos"
// console.log( fraseConPalabraRepetida.replace("gatos", "perros") )

// expresiones regulares o REGEX

// /patron/gi
// const frase = "River es el mejor Rikkkkkkker Rimer Riler Rioer equipo de argentina. Aguante Riber Plate"
// const fraseConA = frase.replace(/ri[a-z]er/gi, "BOQUITA")
// console.log(fraseConA)

// /patron/modificadores

// /palabra/g --> buscar literalmente "palabra" en todas sus apariciones
// /e/i --> buscar literalmente "e" en mayuscula o minuscula
// /[ae]/gi --> buscar toda aparicion de la letra a o de la letra e en mayuscula o minuscula

// Escribir una funcion que encuentre malas palabras en un juego infantil
// y las reemplace por *****

// const frase = "La puta madre Mariano, que ojete de mierda tenes"

// frase.replace("puta", "*****")
// frase.replace("ojete", "*****")
// frase.replace("mierda", "*****")

// frase.replace(/puta|ojete|mierda/, "*****")

// match
// busca un string o expresion regular y retorna una lista
// const frase = "Esta frase tiene una mAlA palabra"
// console.log(frase.match(/mala palabra/ig))

// includes
// no recibe expresiones regulares
// permite buscar, retorna un booleano

// const frase = "es lo mismo poner gi que ig"
// console.log(frase.includes("gi"))

// indexOf
// Retorna la posicion del caracter que paso como parametro
// Si no lo encuentra, retorna -1
// const nombre = "Diamela"
// console.log(nombre.indexOf("b")) // -1

// FUNCIONES NATIVAS O METODOS PARA NUMEROS

// const decimal = "error fatal"

// console.log(decimal)

// console.log(Math.round(decimal))
// console.log(Math.ceil(decimal))
// console.log(Math.floor(decimal))

// isNaN

// console.log(isNaN(NaN))
// console.log(isNaN(33))

// const celularDelUsuario = "No tengo celular"

// const celularEnNumero = Number(celularDelUsuario)

// if (isNaN(celularEnNumero)) {
//   // no le mando nada a la base de datos
// }
// else {
//   // se lo puedo mandar a mi base datos
// }

//// EJERCICIOS MUMUKI /////

///EJERCICIO 1 ///

/*const tienenMismaLongitud = (primerPalabra, segundaPalabra) => { if (primerPalabra.length === segundaPalabra.length){return true}
else{return false}  
}

console.log(tienenMismaLongitud("javascript", "java"));

console.log(tienenMismaLongitud("manzana", "cerveza"));*/

/// EJERCICIO 2 ///

/*const esElUltimoCaracter = (palabra, caracter) => {
  return palabra.slice(-1) === caracter
}
*/
/// EJERICICIO 3 ///

/*const esValida = (contrasenia) => {
    if (contrasenia.length >= 8){return true}
    else{return false}
  }
  
  esValida("contraseniaMuySegura");
  
  esValida("abc123");*/

/*const esValida = (contrasenia) => {
  contrasenia.length >= 8;
};*/

//// ejercicio 4 ////  RESOLVER PORQUE EL ULTIMO CONSOLE.LOG RETORNA TRUE

/*const sonIguales = (a, b) => {
return a.toUpperCase() === b.toUpperCase()
}

console.log(sonIguales('NO ESTOY GRITANDO', 'ESTOY GRITANDO'))*/

/// ejercicio 6 ///

/*const burlarse = (str) => {
    return str.replace(/a|e|o|u/gi, "i")
  }
  
  console.log(burlarse('programar es dificil'))*/

/// EJERCICIO 7 /// TIENE IFS INNECESARIOS

/*const esFraccionMayorAUno = (fraccion) => {
    let numerador = fraccion.charAt(0)
    let denominador = fraccion.charAt(2)
    
    if((numerador/denominador) > 1){ return true}
    else{return false}
  }

  console.log(esFraccionMayorAUno('1/2'))

  console.log(esFraccionMayorAUno('2/2'))

  console.log(esFraccionMayorAUno('4/2'))*/

// EJERCICIO 8 //
/*const capitalizar = (str) => {
    let primeraLetra = str.charAt(0);
    let primeraLetraMayuscula = primeraLetra.toUpperCase()
    let restoDelString = str.slice(1);
    
    return primeraLetraMayuscula + restoDelString
    
    
  }*/

/// EJERCICIO 9 ////

/*const aHackerSpeak = (str) => {
  
    let primerReemplazo = str.replace(/i/gi,"1");
    
    let segundoReemplazo = primerReemplazo.replace(/e/gi,"3");
    
    let tercerReemplazo = segundoReemplazo.replace(/a/gi,"4");
    
    let cuartoReemplazo = tercerReemplazo.replace(/s/gi,"5");
    
    let quintoReemplazo = cuartoReemplazo.replace(/o/gi,"0");
  
    return quintoReemplazo
  }*/

// EJERCICIO 10 //

/* const obtenerPrimeraOracion = (str) => {
    let punto = str.indexOf(".")
    
    if (str.includes(".")) {return str.slice(0, punto)
                           }
     else {return str}
                           }*/

/*/// EJERCICIO 12 ///
const removerVocales = (str) => {
  return str.replace(/a|e|i|o|u/gi, "")
}*/

//ejercicio 13 // Pensar como reducir uso de variables

/*const obtenerExtension = (archivo) => {
  
  let ubicacionPunto = archivo.indexOf(".")
  
  let extension = archivo.slice(ubicacionPunto)
  
  let extensionSinPunto = extension.slice(1)
  
  return extensionSinPunto
  
}*/

// EJERCICIO 14 /// CONSULTAR SI ESTA LA POSIBIIDAD DE HACER NO INCLUDES.

/*const esPuenteSeguro = (puente) => {
  return puente.includes(" ") === false;
};

console.log(esPuenteSeguro("### ##"));

console.log(esPuenteSeguro("##### ####"));

console.log(esPuenteSeguro("########"));*/

///EJERCICIO 16 ///

/*const esAnioNuevo = (fecha) => {
  let dia = fecha.slice(0, 2);
  let mes = fecha.slice(3, 5);

  return dia === "01" && mes === "01";
};

console.log(esAnioNuevo("03/05/2015"));
console.log(esAnioNuevo("22/01/1987"));
console.log(esAnioNuevo("01/01/2020"));
*/
