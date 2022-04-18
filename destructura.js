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

//Destructuring de objetos (asignando a nuevos nombres de variables)
const objeto = {nombre: "Ada", apellido: "Lovecode"};
//Tomamos del objeto la propiedad llamada nombre y la asignamos a la variable n
const {nombre:n, apellido:a} = objeto;
console.log(n + " "+a);
