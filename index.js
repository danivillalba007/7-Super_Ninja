class Ninja {
    constructor(nombre, salud, velocidad = 3, fuerza = 3) {
        this.nombre = nombre;
        this.salud = salud;
        this.velocidad = velocidad;
        this.fuerza = fuerza;

    }
    sayName() {
        console.log(this.nombre);
    }
    showStats() {
        console.log(this.nombre, this.fuerza, this.velocidad, this.salud);
    }
    drinkSake() {
        this.salud = this.salud + 10;
    }
}


class Sensei extends Ninja {
    constructor(nombre, salud = 200, velocidad = 10, fuerza = 10, sabiduria = 10) {
        super(nombre, salud, velocidad, fuerza);
        this.sabiduria = sabiduria;
    }

    speakWisdom() {
        Ninja.drinkSake();
        console.log(this.nombre, this.fuerza, this.velocidad, this.sabiduria);
    }

}