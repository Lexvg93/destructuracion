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
console.log(cc);
console.log(ba);

//Destructuring de objetos (asignacion basica)
const varios = {p: 11, q:true, r:"Hola"};
const {p, r} = varios;
console.log(p);
console.log(r);
