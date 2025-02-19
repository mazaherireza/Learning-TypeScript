var $ = document;
var input1 = $.querySelector("#number1");
var input2 = $.querySelector("#number2");
var form = $.querySelector("form");
var add = function (input1, input2) { return input1 + input2; };
form.onsubmit = function (event) {
    event.preventDefault();
    console.log(add(+input1.value, +input2.value));
    form.reset();
};
