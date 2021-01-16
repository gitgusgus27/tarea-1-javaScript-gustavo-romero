//gustavo romero alvarez
/////// Ejercicio 1 ////////////

function numeroParImpar(numero){

    if (numero === undefined) {
        return "Debe ingresar un numero valido";
    }
  
   else if(numero % 2 == 0){
       var cadena = String(numero);
       return "el numero: " + cadena + " es par";
    }  else if (numero % 2 != 0) {
        var cadena = String(numero);
        return "el numero: " + cadena + " es impar";
    }
 
}


/////// Ejercicio 2 /////////////////

var cadena = "abcdefghijklmnñopqrstuvwxyz";

function buscarPosicion(caracter){
    caracterDevuelto = cadena.indexOf(caracter);
    if (caracterDevuelto=== -1)
    {
        return "Caracter no valido";
    }
    else
    {
        return caracterDevuelto;

    }
    
}

////// Ejercicio 3 /////////////////

function obtenerPrecioConIva(precio){
    if(isNaN(precio)=== true)
    {
        return "Error ha ingresado un caracter o letra";
    }
    else if (isNaN(precio)=== false)
    {
        iva =  precio * 0.19;
        precio = precio + iva;
       return "El precio con impuesto es de $"+precio;

    }
  
}

/////////////Ejercicio 4 /////////////////

function nuevoDado(nombre){

    return function (){
        var resultado = Math.floor(Math.random()*6)+1;
        return nombre + " tiró un dado y salió " + resultado;
    }
   
}


/////////////// Ejercicio 5 /////////////////

function Persona(nombre, apellido, edad){
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
}

Persona.prototype.guardarEnLocalStorage = function(){
    var nombrecompleto = this.nombre + this.apellido;
    localStorage.setItem(nombrecompleto, nombrecompleto)
}

Persona.prototype.guardarEnSessionStorage = function(){
    var nombrecompleto = this.nombre + this.apellido;
    sessionStorage.setItem(nombrecompleto, nombrecompleto);
    sessionStorage.setItem(this.edad, this.edad);
}



//function metodo1(){
//    var gustavo = new Persona("gustavo ", "romero", 27);
  //  gustavo.guardarEnLocalStorage();
//}