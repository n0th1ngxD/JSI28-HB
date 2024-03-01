class Animal {
    constructor(name, age, color) {
        this._name = name;
        this._age = age;
        this._color = color;
    }

    set_name(newName) {
        this._name = newName;
    }

    set_age(newAge) {
        this._age = newAge;
    }

    set_color(newColor) {
        this._color = newColor;
    }

    show() {
        return `Name: ${this._name}, Age: ${this._age}, Color: ${this._color}`;
    }
}