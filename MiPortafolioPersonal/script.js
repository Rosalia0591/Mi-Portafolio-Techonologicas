//
/*
Javascript es un lenguaje de programacionde tipado debil que corre en el navegador

variable
elegir el tipo de caja que le podemos cambiar la estructura
let:son para cajitas que les podemos cambiar la estructura
const: cajitas que no les puedes cambiar la estructura
 */

//const nombre= "Rosalia Be Tun";
/*salidas */
//alert(nombre);
console.log(document.getElementById('titulo'));
let elementoHTMLtitulo = document.getElementById('titulo');

let elementoDetypewriter = new Typewriter(elementoHTMLtitulo, {
    loop: true
});

elementoDetypewriter.typeString('Hello World!')
    .pauseFor(2500)
    .deleteAll()
    .typeString('Rosalia Be Tun')
    .pauseFor(2500)
    .deleteChars(7)
    .typeString('<strong>Be Tun!</strong>')
    .pauseFor(2500)
    .start();