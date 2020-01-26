function Movie(title, releaseYear) {
    this.title = title;
    this.releaseYear = releaseYear;
}

// Initializing .prototype Property
// Prototype is the Property of an Object 
// to which you can attach functions outside Constructor Functions.

Movie.prototype.logInfo = function() {
    console.log(`${this.title} was released in ${this.releaseYear}`);
};

// The logInfo() Method is given to "Movie" using the "prototype" Method.
// The benefit of using "prototype" is to add a method to constructor function outside of 
// initialized area. 

// "new Movie" (with Movie being the Object-constructor Name) 
//Instantiates a mew Movie Object from Constructor Function:

const theShining = new Movie("The Shining", 1980);

// The `${this.title}` + `${this.releaseYear}` values are given in
// parameters of (new Movie(...), inside "const theShining").

theShining.logInfo();

