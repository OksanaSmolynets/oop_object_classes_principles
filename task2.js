//Task 2
class Person {
    constructor(name, surname) {
        this._name = name;
        this._surname = surname
    }
    showFullName() {
        return this._surname + ' ' + this._name
    }
}

let person1 = new Person('Ivan', 'Petrenko');
console.log(person1.showFullName());


class Student extends Person {
    constructor(name, surname, year) {
        super(name, surname);
        this._year = year;
    }

    showFullName(midleName) {
        return super.showFullName() + ' ' + midleName
    }
    showCourse() {
        return 2022 - this._year
    }
}

let stud1 = new Student('Ivan', 'Petrenko', 2017);
console.log(stud1.showFullName('Petrovych'))
console.log('Current course:', stud1.showCourse())