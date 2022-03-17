//Task 1
class Student {
    constructor(fullName, direction) {
        this._fullName = fullName;
        this._direction = direction;
    }

    showFullName() {
        return this._fullName;
    }
    nameIncludes(data) {
        return this.showFullName().split(" ").includes(data);
    }

    static studentBuilder(_fullName, _direction) {
        return new Student(_fullName, _direction);
    }

    get direction() {
        return this._direction;
    }

    set direction(value) {
        return this._direction = value;
    }
}

let stud1 = new Student('Ivan Petrenko', 'web');
console.log(stud1); // show stud1
console.log(stud1.showFullName()); // show fullName for stud1;
console.log(stud1.nameIncludes('Ivan')); // check if the name matches
console.log(stud1.nameIncludes('Oksana')); // check if the name matches

console.log(stud1.direction); // show direction for stud1, using get

console.log(stud1.direction = 'JavaScript'); // rewrite direction for stud1, using set
console.log(stud1); // new stud1 with new direction field after using set

let stud2 = new Student('Sergiy Koval', 'python');
console.log(stud2);

let stud3 = Student.studentBuilder('Ihor Kohut', 'qc');
console.log(stud3);