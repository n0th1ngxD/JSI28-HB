class People {
    constructor(name, age, address) {
        this._name = name;
        this._age = age;
        this._address = address;
    }

    setName(newName) {
        this._name = newName;
    }

    getName() {
        return this._name;
    }

    setAge(newAge) {
        this._age = newAge;
    }

    getAge() {
        return this._age;
    }

    setAddress(newAddress) {
        this._address = newAddress;
    }

    getAdress() {
        return this._address;
    }
}

class Student extends People {

    constructor(name, age, address, id, math, physical, chemistry) {
        super(name, age, address)
        this._id = id;
        this._math = math;
        this._physical = physical;
        this._chemistry = chemistry;
    }

    id(newId) {
        this._id = newId;
    }

    math(newMath) {
        this._math = newMath;
    }

    physical(newPhysical) {
        this._physical = newPhysical;
    }

    chemistry(newChemistry) {
        this._chemistry = newChemistry;
    }

    getMath() {
        return this._math;
    }

    getPhysical() {
        return this._physical;
    }

    getChemistry() {
        return this._chemistry;
    }

    GPA() {
        return (this.math + this._physical + this._chemistry) / 3;
    }
}