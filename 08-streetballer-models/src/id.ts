export default (): string => {
  const date = new Date();

  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  const milliseconds = date.getMilliseconds();

  const yearText = year.toString();
  const monthText = month < 10 ? "0" + month.toString() : month.toString();
  const dayText = day < 10 ? "0" + day.toString() : day.toString();
  const hoursText = hours < 10 ? "0" + hours.toString() : hours.toString();
  const minutesText =
    minutes < 10 ? "0" + minutes.toString() : minutes.toString();
  const secondsText =
    seconds < 10 ? "0" + seconds.toString() : seconds.toString();
  const millisecondsText =
    milliseconds < 10
      ? "00" + milliseconds.toString()
      : milliseconds < 100
      ? "0" + milliseconds.toString()
      : milliseconds.toString();

  let id =
    yearText +
    monthText +
    dayText +
    hoursText +
    minutesText +
    secondsText +
    millisecondsText +
    "-";

  const characters = "0123456789abcdefghijklmnopqrstuvwxyz";

  for (let i = 0; i < 6; i++) {
    const index = Math.floor(Math.random() * characters.length);
    const character = characters[index];
    id += character;
  }

  return id;
};
