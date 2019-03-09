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

export function clone_nested_array(old_array) {
  let new_array = [];
  for (let i = 0; i < old_array.length; i++) {
    new_array.push([]);
    for (let j = 0; j < old_array.length; j++) {
      new_array[i][j] = old_array[i][j];
    }
  }
  return new_array;
}

export function clone_array(old_array) {
  let new_array = [];
  for (let i = 0; i < old_array.length; i++) {
    new_array.push(old_array[i]);
  }
  return new_array;
}
