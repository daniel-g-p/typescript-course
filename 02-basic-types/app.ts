const input1 = document.querySelector("#number1")! as HTMLInputElement;
const input2 = document.querySelector("#number2")! as HTMLInputElement;
const button = document.querySelector("#button")! as HTMLButtonElement;

const add = (number1: number, number2: number) => {
  return number1 + number2;
};

const concatenate = (string1: string, string2: string) => {
  return string1 + string2;
};

button.addEventListener("click", () => {
  const string1 = input1.value;
  const string2 = input2.value;
  const number1 = +string1;
  const number2 = +string2;
  const concatenated = concatenate(string1, string2);
  const added = add(number1, number2);
  alert(
    "Strings: " +
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
      added
  );
});

enum Fuel {
  GASOLINE,
  DIESEL,
  ELECTRIC,
}

const car: {
  brand: string;
  model: string;
  topSpeed: number;
  automatic: boolean;
  colors: string[];
  fuel: Fuel;
} = {
  brand: "Fiat",
  model: "500",
  topSpeed: 150,
  automatic: false,
  colors: ["black", "gray", "white", "red"],
  fuel: Fuel.GASOLINE,
};

console.log(car.model);

for (const color of car.colors) {
  console.log(car.brand + " " + car.model + " is available in " + color + ".");
}
