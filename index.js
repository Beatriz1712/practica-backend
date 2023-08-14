/*
let nombre 
nombre = "ruth";
console.log(nombre)

function myFunction (){
    return console.log ("hola")
}

function sumar (a,b) {
    return a+b
}
//console.log (sumar (8,9));
const resultado = (sumar (8,9));
console.log (resultado);
*/
/*
//clousure
function contador() {
    let contador=0;
    function incrementar(){
        contador++
        console.log(contador)
    }
   return incrementar
}
let micontador = contador();
console.log(micontador);

micontador()

micontador();
micontador();
*/
/*
//template string
const nombre = "Beatriz";
const apellido = "Suyo";
const comision = "58070";

const mensaje = `Bienvenida a tu comision ${comision} querida ${nombre} ${apellido} `
console.log(mensaje);

*/

//CLASES :
//METODOS : Acciones
//CONSTRUCTOR : las propiedades
//clases sintaxis y orientadas a objetos para crearlas y definir compaortamiento
//propiedades nombre y edad

//this palabra reservada
//metodos de la persona saludar
/*
class Persona {
    constructor(nombre,edad) {
        this.nombre= nombre
        this.edad= edad
    }
//metodo
    saludar(){
        console.log(`Hola mi nombre es ${this.nombre}, tengo ${this.edad} años`)

    }
}

//instancias
//dando valores
 let persona1 = new Persona ("Cristian", 11)
 let persona2 = new Persona ("Raisa",10)

 persona1.saludar()
 persona2.saludar()

 */
/*
 function crearMultiplicador(numero) {
    return function (segundo_numero) {
        return numero*segundo_numero
        
    }
    
 }

 let duplicar = crearMultiplicador(2)
 let triplicar = crearMultiplicador(3)

 console.log(duplicar(4)); //8
 console.log(triplicar(5));//15
 */

 const nombre = "Federico"
 const apellido = "El mejor"

 const saludo = (nombre,apellido) =>{
    console.log(saludo);
    return `Hola ${nombre} ${apellido} te felicito x estar aqui`
 }

 
  console.log(saludo(nombre,apellido));