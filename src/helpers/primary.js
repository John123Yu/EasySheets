export function validAlphaNum(input) {
  //regex for number, symbol, letter
  if (/[a-zA-Z0-9-_]/.test(input)) return true;
  return false;
}

export function nestedArray(row, col) {
  let outerArray = [];
  for (let i = 0; i < row; i++) {
    let innerArray = [];
    for (let j = 0; j < col; j++) {
      innerArray.push("");
    }
    outerArray.push(innerArray);
  }
  return outerArray;
}

export function extendNestedArray(rows, cols, array) {
  for (let i = 0; i < rows; i++) {
    if (array[i] === undefined) array[i] = [];
    for (let j = 0; j < cols; j++) {
      if (array[i][j] === undefined) array[i][j] = "";
    }
  }
  return array;
}

export function clone_nested_array(prevArray) {
  let newArray = [];
  for (let i = 0; i < prevArray.length; i++) {
    newArray.push([]);
    for (let j = 0; j < prevArray.length; j++) {
      newArray[i][j] = prevArray[i][j];
    }
  }
  return newArray;
}

export function clone_array(prevArray) {
  let newArray = [];
  for (let i = 0; i < prevArray.length; i++) {
    newArray.push(prevArray[i]);
  }
  return newArray;
}
