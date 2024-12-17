// API DE ELEMENTOS (Api element)
// Los metodos siguientes nos permiten pasar
// por parametro un elemento o una lista de elementos
// para agregarlos al documento



//------------------------------------
// |            .before()
// | 
// | Permite insertar un elemento antes
// | del elemento que invoca a este metodo
// |
// | 
// | 
//------------------------------------


//------------------------------------
// |            .after()
// | 
// | Permite insertar un elemento despues
// | del elemento que invoca a este metodo
// |
// | 
// | 
//------------------------------------



//------------------------------------
// |            .prepend()
// | 
// | container.prepend(divCreado) 
// |
// | Permite insertar un elemento o varios 
// | antes del primer elemento hijo
// |
// | 
// | 
//------------------------------------




//------------------------------------
// |            .append()
// |
// | container.append(divCreado) 
// |
// | Permite insertar un elemento html como
// | elemento hijo, pero despues del último hijo
// |
// | 
// | 
//------------------------------------




//------------------------------------
// |            .replaceChildren()
// |
// | container.replaceChildren(elemento1, elemento2) 
// |
// | Permite eliminar todos los elementos hijos
// | del elemento que invoca a este metodo
// | y los sustituye por uno o varios que pases
// | por parametro
// | 
//------------------------------------




//------------------------------------
// |            .replaceWith()
// |
// | container.replaceWith(elemento1, elemento2) 
// |
// | Permite eliminar el elemento que invoca
// | a replaceWith y lo sustituye por uno o varios
// | que pases por parametro
// | 
// | 
//------------------------------------





//------------------------------------
// |            .remove()
// |
// | container.remove() 
// |
// | Elimina el elemento que invoca este metodo del DOM
// | 'solo lo elimina del dom' seguirá ocupando espacio
// | en memoría si es que aún quedan referencias a él
// | en código.
// | 
//------------------------------------



// API DE INSERCIÓN ADYACENTE (Api InsertAdjacent)
// Es más nueva y más flexible que la Api de Elementos



//------------------------------------
// | 
// |            .insertAdjacentElement("beforebegin", div)
// |            .insertAdjacentElement("afterbegin", div)
// |            .insertAdjacentElement("beforeend", div)
// |            .insertAdjacentElement("afterend", div)
// | 
// |
// | Inserta un solo elemento en la posición que le 
// | pasemos en el primer parametro
// | 
// | beforebegin
// | <div class="container">
// | afterbegin
// | 
// | <h2>Titulo</h2>
// | 
// | beforeend
// | </div>
// | afterend
// | 
// | 
//------------------------------------




//------------------------------------
// | 
// |            .insertAdjacentHTML("beforebegin", `<p>Texto</p>`)
// |            .insertAdjacentHTML("afterbegin", `<p>Texto</p>`)
// |            .insertAdjacentHTML("beforeend", `<p>Texto</p>`)
// |            .insertAdjacentHTML("afterend", `<p>Texto</p>`)
// | 
// |
// | Funciona igual que insertAdjacentElement
// | solo que debemos pasarle un string en código HTML
// | 
// | beforebegin
// | <div class="container">
// | afterbegin
// | 
// | <h2>Titulo</h2>
// | 
// | beforeend
// | </div>
// | afterend
// | 
// | 
//------------------------------------