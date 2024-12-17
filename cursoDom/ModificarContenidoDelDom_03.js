// MODIFICAR HTML TEXTO DEL ELEMENTO

//------------------------------------
// |            .nodeName
// |
// | Devuelve o retorna el nodo (nombre de la etiqueta)
// | en mayusculas, retorna un string
// | 
// |
// | 
// | elemento.nodeName
//------------------------------------


//------------------------------------
// |            container.textContent
// |
// | Devuelve o cambia el contenido de texto
// | de la etiqueta, incluye espacios en blanco
// | 
// | Nos devuelte todo el texto que contenga
// | dentro incluyendo el texto de otras etiquetas
// | 
// | Nos permite cambiar el contenido de texto
// | de una etiqueta
// | 
// | 
// | elemento.textContent
//------------------------------------




//------------------------------------
// |            container.innerText
// |
// | Devuelve o retorna el contenido de texto 
// | renderizado de la etiqueta visible en el
// | navegador
// |
// | Nos permite cambiar el contenido de texto
// | renderizado visible de la etiqueta
// | 
// | 
// | elemento.innerText
//------------------------------------



//------------------------------------
// |            .outerText
// |
// | Igual a innerText pero reemplaza 
// | la etiqueta contenedora también
// | 
// | 
// | 
// | elemento.outerText = "Texto agregado"
//------------------------------------



//------------------------------------
// |            .nodeType
// |
// | Devuelve el numero del tipo de elemento
// |
// |
// | 1 elementos pude ser un <div></div>
// | 
// | 3 tipo nodo de texto  
// | 
// | 8 comentarios
// | 
// | elemento.nodeType
//------------------------------------



// MODIFICAR HTML DEL ELEMENTO


//------------------------------------
// |            .innerHTML
// |
// | Igual a innerText pero en vez de devolver 
// | un texto, nos devuelve el html
// | Nos servirá para insertar HTML en una etiqueta
// | 
// | 
// | elemento.innerHTML
// |
// | Tener cuidado al permitir que el usuario
// | agregue código mediante innerHTML
// |
//------------------------------------


//------------------------------------
// |            .outerHTML
// |
// | Igual a innerText pero en vez de devolver 
// | o modificar el HTML interior, nos devuelve
// | o nos modifica el HTML externo
// | 
// | elemento.outerHTML
// |
// | Tener cuidado al permitir que el usuario
// | agregue código mediante innerHTML
// |
//------------------------------------




// OBTENER O MODIFICAR LOS ATRIBUTOS DE ETIQUETAS



//------------------------------------
// |            elemento.id
// |
// |
// | Retorna un string con el nombre de id
// | Nos permite cambiar el id
// |
//------------------------------------


//------------------------------------
// |            elemento.hasAttributes()
// |
// | Retorna un booleano si la etiqueta tiene
// | un atributo o más, en caso de no tener false
// |
//------------------------------------


//------------------------------------
// |            elemento.hasAttribute("nombreAtributo")
// |
// | Retorna un true si el atributo pasado por 
// | parametro existe, false si es que no.
// |
//------------------------------------



//------------------------------------
// |            elemento.getAttributeNames()
// |
// | Retorna un array con los atributos del elemento
// | 
//------------------------------------




//------------------------------------
// |            elemento.getAttribute(nombreAtributo)
// |
// | Devuelve el valor del atributo pasado por 
// | parametro o null si no existe
// | 
//------------------------------------



//------------------------------------
// |  elemento.setAtribute("nombreAtributo", "valorAtributo")
// |
// | Añade un atributo con un valor o lo cambia
// | si es que ponemos como primer parametro el nombre de
// | un atributo ya existente.
//------------------------------------



//------------------------------------
// |  elemento.removeAttribute("nombreAtributo")
// |
// | Elimina el atributo pasado por parametro
// | 
//------------------------------------


// DE ESTA FORMA AGREGAMOS UN ATRIBUTO BOOLEANO

//divSolito.setAttribute("data-name", "");
// <div data-name></div>

// <div class="divConCompania container" desactivar>Texto rojo</div>

// boton.disabled = true;
// <button disabled>Boton</button>



//------------------------------------
// |  elemento.toggleAttribute("nombreAtributo")   
// |
// | Si existe ese atributo en la etiqueta lo quita
// |
// | Si no existe ese atributo en la etiqueta lo agrega
//------------------------------------

/*
METODOS QUE MÁS SE USAN


.split

.matches

.contains

.toggle

.classList

.classList.add("nombreDeClase")

.classList.remove("nombreClase")
*/