class SingletonTS {
    private static instance: SingletonTS;
    public random: number;

    private constructor(){
        this.random = Math.random();
    }

    public static getInstance(): SingletonTS{
        if(!this.instance) {
            this.instance = new SingletonTS();
        }

        return this.instance;
    }
}

const singleton1 = SingletonTS.getInstance();
const singleton2 = SingletonTS.getInstance();

console.log(singleton1.random)
console.log(singleton2.random)

singleton1.random = 8;

console.log(singleton1.random)
console.log(singleton2.random)