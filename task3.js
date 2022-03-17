//Task 3
class Worker {
    // 1
    constructor(fullName, dayRate, workingDays) {
        this.fullname = fullName;
        this._dayRate = dayRate;
        this._workingDays = workingDays;
        this.experience = 1.2;
    }
    showSalary() {
        return this._dayRate * this._workingDays
    }
    //2
    showSalaryWithExperience() {
        return this.showSalary() * this.experience
    }

    get showExp() {
        return this.experience;
    }

    set setExp(value) {
        return this.experience = value;
    }
}

let worker1 = new Worker("John Johnson", 20, 23);
console.log(worker1.fullname);
console.log(`${worker1.fullname + ' ' + 'salary' + ' ' + worker1.showSalary()}`);
console.log("New experience: " + worker1.showExp);
console.log(`${worker1.fullname + ' ' + 'salary' + ' ' + worker1.showSalaryWithExperience()}`);
worker1.setExp = 1.5;
console.log("New experience: " + worker1.showExp);
console.log(`${worker1.fullname + ' ' + 'salary' + ' ' + worker1.showSalaryWithExperience()}`);


const worker2 = new Worker("Tom Tomson", 48, 22);
console.log(worker2.fullname);
console.log(`${worker2.fullname + ' ' + 'salary' + ' ' + worker2.showSalary()}`);
console.log("New experience: " + worker2.showExp);
console.log(`${worker2.fullname + ' ' + 'salary' + ' ' + worker2.showSalaryWithExperience()}`);
worker2.setExp = 1.5;
console.log("New experience: " + worker2.showExp);
console.log(`${worker2.fullname + ' ' + 'salary' + ' ' + worker2.showSalaryWithExperience()}`);

const worker3 = new Worker("Andy Ander", 29, 23);
console.log(worker3.fullname);
console.log(`${worker3.fullname + ' ' + 'salary' + ' ' + worker3.showSalary()}`);
console.log("New experience: " + worker3.showExp);
console.log(`${worker3.fullname + ' ' + 'salary' + ' ' + worker3.showSalaryWithExperience()}`);
worker3.setExp = 1.5;
console.log("New experience: " + worker3.showExp);
console.log(`${worker3.fullname + ' ' + 'salary' + ' ' + worker3.showSalaryWithExperience()}`);

let sortedWorkers = [worker1, worker2, worker3];
console.log(sortedWorkers.sort((a, b) => a.showSalary() > b.showSalary() ? 1 : -1));




// sort function for salary
let sortFunction = (...workers) => {
    console.log('Sorted salary:')
    workers
        .sort((a, b) => a.showSalaryWithExperience() > b.showSalaryWithExperience() ? 1 : -1)
        .map((item) => console.log(`${item.fullname + ':' + item.showSalaryWithExperience()}`));
}

sortFunction(worker1, worker2, worker3);

