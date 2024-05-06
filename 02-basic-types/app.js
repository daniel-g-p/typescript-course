var input1 = document.querySelector("#number1");
var input2 = document.querySelector("#number2");
var button = document.querySelector("#button");
var add = function (number1, number2) {
    return number1 + number2;
};
var concatenate = function (string1, string2) {
    return string1 + string2;
};
button.addEventListener("click", function () {
    var string1 = input1.value;
    var string2 = input2.value;
    var number1 = +string1;
    var number2 = +string2;
    var concatenated = concatenate(string1, string2);
    var added = add(number1, number2);
    alert("Strings: " +
        string1 +
        " + " +
        string2 +
        " = " +
        concatenated +
        " / " +
        "Numbers: " +
        number1 +
        " + " +
        number2 +
        " = " +
        added);
});
var car = {
    brand: "Fiat",
    model: "500",
    topSpeed: 150,
    electric: false,
    colors: ["black", "gray", "white", "red"],
};
console.log(car.model);
for (var _i = 0, _a = car.colors; _i < _a.length; _i++) {
    var color = _a[_i];
    console.log(car.brand + " " + car.model + " is available in " + color);
}
