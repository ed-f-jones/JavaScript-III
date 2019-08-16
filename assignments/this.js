/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global binding happens when this is invoked as a function without any rules.
* 2. Implicit binding happens when dot notation is used to invoke a function.
* 3. Explicit binding happens when .call(), .apply(), and .bind() are used in a function
* 4.  New binding happens when a constructor function is used. 'this' refers to a specific object that is created and returned by the constructor. 
*
* write out a code example of each explanation above
*/

// Principle 1
function hisName(){
    console.log(this);
    return name;
}
hisName('Edward');

// code example for Window Binding

// Principle 2
const Obj = {
    greeting: 'Whats good homie',
    sayWhatsUp: function(name){
        console.log(`${this.greeting} its ${name}`);
    }
};

Obj.sayWhatsUp('Fuquinn');
// code example for Implicit Binding

// Principle 3
function TalkingPeople(greeter) {
    this.greeting = 'whats up, ';
    this.greeter = greeter;
    this.speak = function() {
        console.log(this.greeting + this.greeter);
        console.log(this);
    };
}
const mike = new TalkingPeople('Pete');
const pete = new TalkingPeople('Mike');

mike.speak();
pete.speak();

// code example for New Binding

// Principle 4

// code example for Explicit Binding
