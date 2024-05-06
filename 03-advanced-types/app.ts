type NumberOrString = number | string;

const combine = (
  input1: NumberOrString,
  input2: NumberOrString,
  conversion: "to-number" | "to-string" | "none" = "none"
) => {
  const value1 =
    conversion === "to-number"
      ? +input1
      : conversion === "to-string"
      ? input1.toString()
      : input1;
  const value2 =
    conversion === "to-number"
      ? +input2
      : conversion === "to-string"
      ? input2.toString()
      : input2;
  const numbers = typeof value1 === "number" && typeof value2 === "number";
  const result = numbers
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
