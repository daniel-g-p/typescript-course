const input1 = document.querySelector("#number1")! as HTMLInputElement;
const input2 = document.querySelector("#number2")! as HTMLInputElement;
const button = document.querySelector("#button")! as HTMLButtonElement;

const add = (number1: number, number2: number) => {
  return number1 + number2;
};

button.addEventListener("click", () => {
  const value1 = +input1.value;
  const value2 = +input2.value;
  const sum = add(value1, value2);
  alert(value1 + " + " + value2 + " = " + sum);
});
