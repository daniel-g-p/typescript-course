var input1 = document.querySelector("#number1");
var input2 = document.querySelector("#number2");
var button = document.querySelector("#button");
var add = function (number1, number2) {
  return number1 + number2;
};
button.addEventListener("click", function () {
  var value1 = +input1.value;
  var value2 = +input2.value;
  var sum = add(value1, value2);
  alert(value1 + " + " + value2 + " = " + sum);
});
