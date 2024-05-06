var combine = function (input1, input2, conversion) {
    if (conversion === void 0) { conversion = "none"; }
    var value1 = conversion === "to-number"
        ? +input1
        : conversion === "to-string"
            ? input1.toString()
            : input1;
    var value2 = conversion === "to-number"
        ? +input2
        : conversion === "to-string"
            ? input2.toString()
            : input2;
    var numbers = typeof value1 === "number" && typeof value2 === "number";
    var result = numbers
        ? value1 + value2
        : value1.toString() + value2.toString();
    return result;
};
console.log(combine(1, 2));
console.log(combine(1, 2, "to-number"));
console.log(combine(1, 2, "to-string"));
console.log(combine("1", "2"));
console.log(combine("1", "2", "to-number"));
console.log(combine("1", "2", "to-string"));
