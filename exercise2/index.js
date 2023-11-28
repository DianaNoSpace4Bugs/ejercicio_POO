//Clase WARRIOR (es la clase papá)
class Warrior {
    constructor(life, power){
        this.life = life;
        this.power = power;
    }

    attack(){
       return this.power
    }

    //Para cuando se ataquen:
    // attack(enemy) {
    //     enemy.defend(this.attack())
    // }

    defend(damage){
        let remaningLife = this.life - damage
       return remaningLife
    }
}

//Objeto WARRIOR de prueba
const legendaryWarrior = new Warrior(4500, 5000)
// console.log(legendaryWarrior.defend(4050));
// console.log(legendaryWarrior.attack());


//Clase MAYA (heredera de papá WARRIOR)
class Maya extends Warrior {
    constructor(life, power){
        super(life, power);
    }

    drinkColaCao(){
        let resultPower = this.power + 10
        return resultPower
    }
}

//Objeto MAYA de prueba
const abejaMaya = new Maya(200, 500);
// console.log(abejaMaya.drinkColaCao());
// console.log(abejaMaya.attack());
// console.log(abejaMaya.defend(100));

//Clase AZTEC (heredera de papá WARRIOR)
class Aztec extends Warrior {
    constructor(life, power){
        super(life, power);
    }

    drinkNesquik(){
        let resultLife = this.life - 10
        return resultLife
    }
}

//Objeto AZTEC de prueba
const aztecOnTodos = new Aztec(50, 200);
// console.log(aztecOnTodos.drinkNesquik());
// console.log(aztecOnTodos.attack());
// console.log(aztecOnTodos.defend(10));

//CADENA DE MOVIMIENTOS DE GUERRA:

//Azteca bebe nesquik:
console.log(aztecOnTodos.drinkNesquik());
//Maya bebe colacao:
console.log(abejaMaya.drinkColaCao());
//Maya ataca a azteca. Azteca defiende:
console.log(aztecOnTodos.defend(abejaMaya.attack()));
// console.log(abejaMaya.attack(aztecOnTodos));
//Azteca ataca a maya. Maya defiende:
console.log(abejaMaya.defend(aztecOnTodos.attack()));




