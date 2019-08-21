/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global Object Binding: 'this' here refers to the window or the global object. Basically, the outer level (scope) of the file?
*
* 2. Implicit Binding: Here, 'this' is implicitly understood to mean the scope of the current object. It is not specified or assigned directly.
*
* 3. Explicit Binding: 'this', with explicit binding, is outrightly assigned or modified and it begins to refer to the new assigned value.
*
* 4. New Binding: Constructors are blueprints used to create objects. Whenever a constructor is used to create an object, 'this' refers to the specific instance of the object that was just created. This meins when more than one object is created off of the same constructor, each object has a `this` specific to it.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
var theWindowName = "Woop woop"

function theWindowCall(){
    //theWindowName variable is accessible because it exists within the global scope.
    console.log(this.theWindowName)
    return this;
}

// Principle 2

// code example for Implicit Binding

let thisObjectOfMine = {
    theNameHere: "aSweetSweetName",
    showYourself: function () {
        // We see here, that this refers to the `thisObjectOfMine` object and we can then access variables (state) within 'thisObjectOfMine' using the 'this' keyword.
        console.log(`Welp, my name is ${this.theNameHere}`)
        return this;
    },
}

// Principle 3

// code example for New Binding

function Animal(name, type){
    this.name = name;
    this.type = type;
}

let scooby = Animal('Scooby', 'Dog');

// Principle 4

// code example for Explicit Binding