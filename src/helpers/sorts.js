export function mergeSort(arr) {
  if (arr.length === 1) {
    // return once we hit an array with a single item
    return arr;
  }

  const middle = Math.floor(arr.length / 2); // get the middle item of the array rounded down
  const left = arr.slice(0, middle); // items on the left side
  const right = arr.slice(middle); // items on the right side

  return merge(mergeSort(left), mergeSort(right));
}

// compare the arrays item by item and return the concatenated result
function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;

  while (indexLeft < left.length && indexRight < right.length) {
    if (left[indexLeft] < right[indexRight]) {
      result.push(left[indexLeft]);
      indexLeft++;
    } else {
      result.push(right[indexRight]);
      indexRight++;
    }
  }

  return result.concat(left.slice(indexLeft)).concat(right.slice(indexRight));
}

export function quickSort() {}

export function insertionSort(array) {
  var length = array.length;
  for (var i = 1, j; i < length; i++) {
    var temp = array[i];
    for (var j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = temp;
  }
  //   return array;
}
//not for production code
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i]) return false;
  }
  return true;
}

// export function mergeInsertSort(arr) {
//   for (let i = 0; i < arr.length; i += 2) {
//     if (arr[i + 1] < arr[i]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//     }
//   }
//   let chunk = 4;
//   while (arr.length / chunk >= 1) {
//     console.log(chunk)
//     let tempArr = [];
//     for (let i = 0; i < arr.length; i+=chunk) {
//         tempArr.push(insertionSort(arr.splice(i, chunk)));
//     }
//     arr = tempArr;
//     chunk *= 2;
//   }
//   return arr;
// }
