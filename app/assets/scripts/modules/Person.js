class Person {
    constructor(fullname, favColor) {
        this.name = fullName;
        this.favoriteColor = favColor;
    }

    greet() {
        console.log("Hi there, my name is " + this.name + " an my favorite color is " + this.favoriteColor + ".");
    }
}

export default Person;