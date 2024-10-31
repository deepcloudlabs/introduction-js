// 1. class -> Encapsulation: state + methods/functions
//    object
// 2. inheritance
// 3. polymorphism
// before ES6
let Employee = function (identity, fullName, salary, iban, fulltime, departments) {
    // attribute/state/data/property
    this.identity = identity;
    this.fullName = fullName;
    this.salary = salary;
    this.iban = iban;
    this.fulltime = fulltime;
    this.departments = departments;

    // method/behaviour
    this.sayHello = function () {
        return `Hello, ${fullname}!`;
    }

    this.increaseSalary = function (rate) {
        this.salary = (1.0 + rate) * this.salary;
    }

    this.promote = function (department) {
        this.departments.push(department);
    }
}

let Account = function (iban, balance = 0.0, status = "ACTIVE") {
    // hide all your attributes
    this.iban = iban;
    this.balance = balance;
    this.status = status;

    // business methods
    this.deposit = function (amount) {
        // validation
        if (amount <= 0.0) {
            throw "deposit amount must be positive"
        }
        this.balance += amount;
    }
    this.withdraw = function (amount) {
        // validation
        if (amount <= 0.0) {
            throw "withdraw amount must be positive"
        }
        // business rule
        if (amount > this.balance)
            throw "your balance does not cover your expenses.";

        this.balance += amount;
    }

}


// since ES6+
class SimpleAccount {
    #iban;
    #status;

    constructor(iban, balance = 0.0, status = "ACTIVE") {
        // hide all your attributes
        this.#iban = iban;
        this._balance = balance;
        this.#status = status;
    }

    get balance() {
        return this._balance;
    }

    get iban() {
        return this.#iban;
    }

    get status() {
        return this.#status;
    }

    set status(newStatus) {
        switch (newStatus) {
            case "ACTIVE":
            case "CLOSED":
            case "BLOCKED":
                this.#status = newStatus;
                break;
            default:
                throw `${newStatus} is not a valid status.`;
        }
    }

    // business methods
    deposit(amount) {
        // validation
        if (amount <= 0.0) {
            throw "deposit amount must be positive"
        }
        this._balance += amount;
    }

    withdraw(amount) {
        console.log("SimpleAccount::withdraw");
        // validation
        if (amount <= 0.0) {
            throw "withdraw amount must be positive"
        }
        // business rule
        if (amount > this._balance)
            throw "your balance does not cover your expenses.";

        this._balance -= amount;
    }
}

// CheckingAccount -> SubClass, Derived Class
// SimpleAccount -> SuperClass, Base Class
class CheckingAccount extends SimpleAccount {
    #overdraftAmount;

    constructor(iban, balance = 0.0, status = "ACTIVE", overdraftAmount = 100_000) {
        super(iban, balance, status);
        this.#overdraftAmount = overdraftAmount;
    }

    // overriding
    withdraw(amount) {
        console.log("CheckingAccount::withdraw");
        // validation
        if (amount <= 0.0) {
            throw "withdraw amount must be positive"
        }
        // business rule
        if (amount > (this.balance + this.#overdraftAmount)) {
            const deficit = amount - this.balance - this.#overdraftAmount;
            throw `your balance does not cover your expenses: ${deficit}`;
        }

        this._balance -= amount;
    }
}

let acc1 = null;
if (Math.random() > 0.5){
    // head
    acc1 = new SimpleAccount("ES0414654429238334621741",1_000_000);
} else {
    // tail
    acc1 = new CheckingAccount("ES0414654429238334621741",1_000_000);
}
console.log(acc1)
acc1.withdraw(1_100_000);
class Customer {
    #accounts;
    constructor() {
        this.#accounts = []
    }
    fun(){
        for (const account of this.#accounts){
            // account operating fee
            account.withdraw(2.5); // polymorphic method
        }
    }
}
