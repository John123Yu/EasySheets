export function mergeSort(arr) {
  //need to verify optimization
  if (arr.length === 1) {
    return arr;
  }
  const middle = Math.floor(arr.length / 2);
  const left = arr.splice(0, middle);
  return merge(mergeSort(left), mergeSort(arr));
}

function merge(left, right) {
  let result = [];
  let indexLeft = 0;
  let indexRight = 0;
  while (indexLeft < left.length && indexRight < right.length) {
    left[indexLeft] < right[indexRight]
      ? result.push(left[indexLeft++])
      : result.push(right[indexRight++]);
  }
  let answer = result
    .concat(left.splice(indexLeft))
    .concat(right.splice(indexRight));
  return answer;
}

let arr = [1,2,3]
// arr.sort()
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
  return array;
}

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

function swap(arr) {
  if (arr[1] < arr[0]) {
    let temp = arr[1];
    arr[1] = arr[0];
    arr[0] = temp;
  }
  return arr;
}
