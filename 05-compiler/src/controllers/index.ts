export default (req: object, res: { send: Function }, next: Function): void => {
  return res.send("Hello World");
};
