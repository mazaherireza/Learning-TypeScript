var me = {
    firstName: "Reza",
    lastName: "Mazaheri",
    age: 36,
    greet: function (phrase) {
        console.log("".concat(phrase, " I'm ").concat(this.firstName, " ").concat(this.lastName, "."));
    }
};
me.greet("Hello,");
