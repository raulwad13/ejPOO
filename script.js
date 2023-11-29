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

class warrior {
    constructor(life,power){
        this.life=life
        this.power=power
    }
    attack(){
        return this.power
    }
    defend(attack){
        let PV = Math.abs(this.life-attack)
        return PV 
    }

}

class Maya extends warrior{
    constructor(life,power){
        super(life,power)
    }
    drinkColaCao(){
        let healthC=this.life+10
        return healthC
    }
}

class Azteca extends warrior{
    constructor(life,power){
        super(life,power)
    }
    drinkNesquik(){
        let healthN=this.life+10
        return healthN
    }
}
const maya1= new Maya(40,30)
const azteca1= new Azteca(50,20)
const aztecaHealth= azteca1.drinkNesquik()
const mayaHealth= maya1.drinkColaCao()
const firstAttack=maya1.attack(azteca1.defend())
const secondAttack=azteca1.attack(maya1.defend)

console.log(maya1);
console.log(azteca1);
console.log(`Azteca aumentó su vida a ${aztecaHealth}`);
console.log(`Maya aumentó su vida a ${mayaHealth}`);
console.log(`Azteca hizo ${firstAttack} puntos de daño`);
console.log(`Maya hizo ${secondAttack} puntos de daño`);


