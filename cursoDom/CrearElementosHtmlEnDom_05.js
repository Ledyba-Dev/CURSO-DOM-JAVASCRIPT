//------------------------------------
// |            document.createElement("p")
// |
// | Nos permite crear un elemento html
// | Luego podemos asignarle texto, atributos,
// | clases y añadirlo al DOM posteriormente
// | 
// |
//------------------------------------


//------------------------------------
// |            document.createDocumentFragment()
// |
// | Es un contenedor invisible y temporal en el DOM
// | Podemos usarlo para almacenar elementos y luego
// | insertarlos todos de una vez en el DOM.
// | es una estructura invisible en el DOM
// | No forma parte del árbol del DOM cuando se crea
// | razón por la cual manipular elementos dentro de él es
// | más rápido y no afecta el rendimiento 
// | 
// | const fragmento = document.createDocumentFragment()
// | 
// | fragmento.getElementById()
// | 
// | Podemos usar en los fragments metodos de seleccion de
// | elementos como querySelector por ejemplo
// | 
// | 
//------------------------------------



//------------------------------------
// |            elemento.cloneNode()
// |                              (true or false)
// | Si es true clona el nodo elemento con sus hijos
// | Si es false clona solo el elemento padre sin hijos
// | por defecto el parametro es false si no pones nada
// |
// | cloneNode nos permite crear una copia de otro elemento
// |   
//------------------------------------