const palindromo = (string) => {
  let error = "no es un palindromo";
  if (string == undefined) {
    return "tiene que ser una palabra";
  } else {
    if (string.split("").reverse().join("") == string) {
      return string.split("").reverse().join("");
    } else {
      return error;
    }
  }
};

const average = (Array) => {
  if (Array.length == 0) return 0;
  let sum = 0;
  Array.forEach((num) => {
    sum += num;
  });
  return sum / Array.length;
};

module.exports = {
  palindromo,
  average,
};
