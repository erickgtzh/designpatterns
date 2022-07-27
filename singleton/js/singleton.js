class Singleton{
    
    static getInstance() {
        return Singleton.instance;
    }

    constructor() {
        this.random = Math.random();
        
        if(Singleton.instance) {
            console.log('ya existe')
            return Singleton.instance;
        }

        console.log('no existe y se crea')
        Singleton.instance = this;
    }
}

// const singleton = new Singleton();
// console.log(singleton.random)

// const singleton2 = new Singleton();
// console.log(singleton2.random)

// const singleton3 = new Singleton();
// console.log(singleton3.random)

// console.log(singleton === singleton3)

class WeekDays {
    daysEs = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]

    daysEn = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]


    constructor(lang){
        this.lang = lang;

        if(WeekDays.instance) {
            return WeekDays.instance;
        }

        WeekDays.instance = this;
    }

    getDays() {
        return this.lang === 'es' ? this.daysEs : this.daysEn;
    }
}

const weekDays1 = new WeekDays("es");
const weekDays2 = new WeekDays();

console.log(weekDays1.getDays())
console.log(weekDays2.getDays())