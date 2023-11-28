//Clase PERSONA (es la clase papá)
class Persona {
    constructor(name, age, genre){
        this.name = name; 
        this.age = age; 
        this.genre = genre; 
    }

    obtDetalles(){
       return `Mi nombre es ${this.name}, tengo ${this.age} años y soy ${this.genre}.`
    }
}

//Creamos nuevos objetos PERSONA para comprobar si funciona el método
const yo = new Persona('Maria', 24, 'mujer')
const raul = new Persona('Raúl', 26, 'hombre')
const adri = new Persona('Adrián', 20, 'hombre')
console.log(adri.obtDetalles());
console.log(yo.obtDetalles());
console.log(raul.obtDetalles());

//Clase ESTUDIANTE (heredera de papá PERSONA)
class Estudiante extends Persona {
    constructor(name, age, genre, grade, group){
        super(name, age, genre);
        this.grade = grade; 
        this.group = group; 
    }

    registrar(){
        return `${this.obtDetalles()} Estoy en ${this.grade}, en el grupo ${this.group}`
    }
}

//Creamos nuevos objetos ESTUDIANTE para comprobar si funciona el método
const estudiante1 = new Estudiante('Roberto Belirio', 8, 'chico', '4º', 'B')
console.log(estudiante1.registrar());
console.log(estudiante1.obtDetalles());

//Clase PROFESOR (heredera de papá PERSONA)
class Profesor extends Persona {
    constructor(name, age, genre, subject, level){
        super(name, age, genre);
        this.subject = subject; 
        this.level = level;  
    }

    asignar(){
        return `${this.obtDetalles()} Imparto la asignatura de ${this.subject}, y mi nivel es ${this.level}`
    }
}

//Creamos nuevos objetos PROFESOR para comprobar si funciona el método
const profesor1 = new Profesor('Juan Carlos Jiménez', 48, 'hombre', 'Historia del Arte', 'platino')
console.log(profesor1.asignar());
console.log(profesor1.obtDetalles());