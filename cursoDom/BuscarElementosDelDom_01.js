// console.log(document); imprime el elemento como html
// console.dir(document); imprime las propiedades del elemento

// Estos metodos nos sirver para obtener una etiqueta html y guardarla
// en una variable de javascript

//------------------------------------
// |        getElementById()
// |
// | Obtener una etiqueta por su id
// |
// | .getElementById("id") 
//------------------------------------
// en caso de no encontrarlo devuelve null



//----------------------------------------------------
// |           getElementsByClassName()
// |
// | Obtener varias o una etiqueta por su clase 
// |
// | .getElementsByClassName("clase") 
//----------------------------------------------------
// en caso de no encontrarlo ninguno devuelve un array vacío HTMLCollection []


//--------------------------------------------------------------
// |                getElementsByName()
// |
// | Obtener varias o una etiqueta por el valor de su atributo name 
// |
// | <input type="text" name="nombre">
// |
// | .getElementsByName("nombre") 
//---------------------------------------------------------------
// en caso de no encontrarlo devuelve un array vacío nodeList []



//------------------------------------
// |            getElementsByTagName()
// |
// | Obtener una o varias etiquetas por el nombre
// | 
// |
// | .getElementsByTagName("h1") 
//------------------------------------
// en caso de no encontrarlo devuelve un array vacío HTMLCollection []



//------------------------------------
// |            querySelector("")
// |
// | Obtener varias o una etiqueta por el 
// | selector css que pongamos
// |
// | .querySelector("selectorCSS") 
//------------------------------------
// en caso de no encontrarlo devuelve null



//------------------------------------
// |            querySelectorAll("")
// |
// | Devuelve un array con todas las etiquetas 
// | que coinciden con el selector
// |
// | .querySelector("selectorCSS") 
//------------------------------------
// en caso de no encontrarlo devuelve un array nodeList vacío []
// console.dir(padreDeContainerSpan instanceof Object);


// Nos permite saber si un elemento es Array nodelist etc
// console.log(byTag instanceof HTMLCollection);
// HTMLCollection || nodeList

// conceptos claves 
// - desestructuracion para convertir HTMLCollection a Array [...HTMLCollection]
// - Array.from(elemento) para convertir elemento a Array
// - console.log(elemento instanceof HTMLCollection); // preguntamos si elemento es un HTMLCollection
// - console.log(elemento.constructor.name) // nos da si es Array HTMLCollection

/* 
        CARACTERÍSTICA                  NodeList                                HtmlCollection
        Definición              Colección de nodos del DOM               Colección de elementos HTML
        

        Metodos de              document.querySelectorAll()              document.getElementsByTagName()
        obtención               .childNode                               document.getElementsByClassName()

        Tipos de nodos          Puede incluir elementos html, texto,     Solo incluye elementos html
                                comentarios
        
        Metodos disponibles     item(), forEach(), entries(), keys(),     item(), namedItem()
                                values()


        Acceso por índice                      si                                            si
        
        
        Iterabilidad                 Si, con un forEach()                  No, necesita convertirse a array


        Actualización en vivo            No, es estático                   Si, es dinámico(se actualiza automaticamente)


        
*/