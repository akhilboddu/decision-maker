


class Person {

    //constructor
    constructor(name = 'Anonymous', age = 0){ //default values
        this.name = name;
        this.age = age;
    } //cannot put comma here

    getGreeting() {
        return `${this.name} is my name!`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old. `;
    }



}

class Student extends Person {

    //inheriting from super class
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    hasMajor(){
        //this checks if major has been passed in, if the string is empty. If empty, it returns true, else it returns false.
        return !!this.major;
    }

    //overriding method in super class;
    getDescription() {
        let description = super.getDescription();

        if(this.hasMajor()){
            description += `Their major is ${this.major}.`;
        }

        return description;
    }

}

const me = new Student('Akhil Boddu', 21, 'Computer Science');
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

