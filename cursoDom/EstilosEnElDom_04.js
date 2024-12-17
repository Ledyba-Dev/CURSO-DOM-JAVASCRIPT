// *.className.split(" "); "1 2 3" => [1,2,3]
// *.className.join(" "); [1,2,3] => "1 2 3"

//------------------------------------
// |            elemento.className
// |
// | Retorna un string con el nombre de todas
// | las clases del elemento y nos permite también
// | agregar clases al elemento
//------------------------------------

// --------------------------------------------

// classList | Devuelve un array de elementos con todas la clases. [DOMTokenList]


// -- classList.length | Devuelve el numero de clases

// -- classList.value | Devuelve un string con todas las clases

// -- classList.iten(0) | Nos permite acceder a una clase en particular del array DOMTokenList con las clases

// -- classList.contains("nombreClase") | true si tiene la clase, sino false

// -- classList

// -- classList.add("clase1", "clase2") | Añade clase1 y case2, etc

// -- classList.remove("clase1", "clase2") | remueve clase1 y clase2, etc

// -- classList.toggle("hidden")
//Si el elemento tiene la clase "hidden" se la quitará, si no la tiene se la pondrá.

// -- classList.toggle("clase", expresion) | Si expresión es true añade la clase, sino se la quita

// -- classList.replace("claseVieja", "claseNueva") | quita claseVieja y añade claseNueva

// --------------------------------------------

// objeto.style | elemento.style.color = "red" | Me devuelve un objeto CSSStyleDeclaration
// nos permite trabajar con los estilos en línea de los elementos


// .setProperty(nombrePropiedad, valor, prioridad)
// nos permite asignarle un valor a una propiedad

// .getPropertyValue(padding-left) | obtener valor de una propiedad


// .removeProperty(nombrePropiedad)	| remueve una propiedad


// .getComputedStyle(elemento) | obtenemos las propiedades ya computadas y procesadas por el navegador
// además podemos acceder a los estilos de los pseudoelementos
// getComputedStyle(element, "::after");


//------------------------------------
// |            elemento.style
// |
// |
// | El objeto style nos permite cambiar agregar estilo a la etiqueta
// | y nos retorna un objeto con todos los estilos
// | que hemos agregado desde js o inline desde html
// | 
// | elemento.style = "border: 1px solid orange;"
//------------------------------------