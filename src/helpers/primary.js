export function validAlphaNum(input) {
  //regex for number, symbol, letter
  if (/[a-zA-Z0-9-_]/.test(input)) return true;
  return false;
}

export function nestedArray(X, Y) {
  let outer_array = [];
  for (let i = 0; i < X; i++) {
    let inner_array = [];
    for (let j = 0; j < Y; j++) {
      inner_array.push("");
    }
    outer_array.push(inner_array);
  }
  return outer_array;
}
