const add = (n1: number, n2: number): number => {
  return n1 + n2;
};

const log = (text: string): void => {
  console.log(text);
};

const init = () => {
  const result = add(1, 2);
  log("1 + 2 = " + result);
};
