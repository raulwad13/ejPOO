// Ej.1
class persona {
  constructor(nombre, edad, genero) {
    this.nombre = nombre;
    this.edad = edad;
    this.genero = genero;
  }

  obDetalles(){
    return `Soy${this.nombre} tengo ${this.edad} y soy ${this.genero}`
}
}

class estudiante extends persona{
    constructor(nombre,edad,genero,curso,grupo){
        super(nombre,edad,genero);
        this.curso= curso;
        this.grupo=grupo;
    }
    registrar(){
        return `Soy${this.nombre} tengo ${this.edad} y soy ${this.genero} voy a ${this.curso}del grupo ${this.grupo}`
    }
}

class profesor extends persona{
    constructor(nombre,edad,genero,asignatura,nivel){
        super(nombre,edad,genero)
        this.asignatura=asignatura;
        this.nivel=nivel;
    }
    asignar(){
        return `Soy${this.nombre} tengo ${this.edad} y soy ${this.genero} profesor de  ${this.asignatura}de nivel ${this.nivel}`

    }
}



const persona1 = new persona("Raul",26,"M")
const alumno = new estudiante("Raul",26,"M",3,"C")
const profe= new profesor("Raul",26,"M","FullStack","Omega")
console.log(persona1);
console.log(alumno);
console.log(profe);

// Ej. 2

