"use strict";
class Movie {
    constructor(title, rate) {
        this.title = title;
        this.rate = rate;
    }
    static introduction() {
        console.log("I belong to Movie Class.");
    }
}
const movie = new Movie("Joker", 8.9);
Movie.introduction();
