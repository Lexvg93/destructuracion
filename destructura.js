/*apuntes de curso online*/ 
/* Destructuring es un modo de extraer valores de datos almacenados en objetos y arrays
descomponiendolos y asignandolos a un grupo de variables.
Mediante patrones se pueden especificar  */
const galicia = ["A Coruña","Lugo","Ourense","Pontevedra"];
const [c, lu, ou] = galicia;
console.log(c);
console.log(ou);
//console.log(p);

//Destructuring de arrays (asignacion separada de la declaracion)
let cc, ba;
[cc, ba="Merida"] = ["Caceres","Badajoz"];