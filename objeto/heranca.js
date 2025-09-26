function Person(first, last, age, gender, interests) {
    this.name = {
        first, last
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
}

function Teacher(first, last, age, gender, interests, subject) {
    //herdar propriedades do construtor Person
    Person.call(this, first, last, age, gender, interests);

    //propriedade especifica de Teacher
    this.subject = subject;
};
//herdar metodos prototype do Person
Teacher.prototype = Object.create(Person.prototype);

//corrigir o construtor
Teacher.prototype.constructor = Teacher;

Teacher.prototype.greeting = function () {
    console.log("Hello, my name is: " + this.name.first + " and I teach " + this.subject + ".");
}
const prof = new Teacher("João", "Silva", 40, "masculino", ["matemática", "xadrez"], "Matemática");
prof.greeting();