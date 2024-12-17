/*
En JavaScript podemos asignar eventos a nuestros elementos html

El evento más común es el "click", haremos algo cuando el usuario haga click
*/

// Tenemos tres formas de agregar eventos a nuestras etiquetas html
// Pero solamente una es la forma correcta de hacerlo


// ---- Primera forma mediante atributos html ----
// <button onClick="saludar()"></button>



// ---- Segunda forma mediante las propiedades ----

// const boton1 = document.querySelector(".boton1");
// boton1.onClick = function() { alert("Hola mundo")}


// ---- Tercera forma y la más recomendada ----
// mediante el metodo .addEventListener("nombreEvento", () => {})