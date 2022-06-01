
let sumar = require('./operaciones.js/sumar')
let restar = require('./operaciones.js/restar')
let multiplicar = require('./operaciones.js/multiplicar'); 
let dividir = require('./operaciones.js/dividir');

console.log(sumar(20,5));
console.log(restar(40,20));
console.log(dividir(0,2));
console.log(multiplicar(0,3));


/* a. ¿Qué hubiese sucedido si, en vez de generar un archivo por cada operación
matemática, hubiésemos programado todo en un mismo archivo?
Si hubiesemos generado todo en un mismo archivo el codigo hubiera funcionado de la misma manera
solo que por una cuestion de organizacion y comodidad es mejor generar distintos archivos. 

b. ¿Por qué el mejor camino es generar distintos archivos y luego requerirlos en uno solo?
El mejor camino es generar distintos archivos y luego requerirlo en uno solo porque obtenemos
una mejor organizacion de codigos y se pueden resolver errores mas eficientemente, esto es 
muy util sobretodo a la hora de trabajar con proyectos medianos o grandes. 

c. ¿Será esta metodología de trabajo una constante de aquí en adelante?
Si claro! es una metodologia de trabajo muy buena. 

*/