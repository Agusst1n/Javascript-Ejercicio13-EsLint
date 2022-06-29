//*! Crea un nuevo proyecto de Node

//*! - Instala la dependencia ESLint (https://www.npmjs.com/package/eslint)

//*! - Duplica el archivo del ejercicio de la sesión 04-Textos

//*! - Utiliza los tres estilos de comillas de forma alterna (comillas simples, dobles, backticks)

//*! - Crea el fichero .eslintrc.json

//*! - Cambia la configuración de ESLint para que la versión ecmaVersion sea "latest"

//*! - Cambia la configuración de ESLint para que muestre un error cada vez que las comillas no sean dobles

//*! - Crea un script en el package.json para corregir automáticamente todos los errores

//*! - Ejecuta el script a través del terminal



let nombre = "Agustin"

let apellido = "Godoy"

let estudiante = `${nombre} ${apellido}`

let estudianteMayus = estudiante.toUpperCase()

let estudianteMinus = estudiante.toLowerCase()

let estudianteLongitud = estudiante.length

let primeraLetra = nombre.charAt(0)

let ultimaLetra = apellido.charAt(apellido.length - 1)

let sinEspacios = estudiante.trim()

let contenido = estudiante.includes(nombre)