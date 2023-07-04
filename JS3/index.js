function min(a, b) {
  if (typeof a === "number") {
    return Math.min(a, b);
  } else if (Array.isArray(a)) {
    return Math.min(...a);
  } else if (typeof a === "object") {
    let arr = Object.values(a);

    return Math.min(...arr);
  } else if (typeof a === "object") {
  }
}

console.log(
  min(1, 2),
  min([1, 2]),
  min({ a: 21, b: 55 }),
  min({ a: 10, b: 12 }, { a: 3, b: 22 })
);

function bubbleSort(arr) {
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let arr2 = [1, 56, 72, 30, 70, 73, 0];
let sortedArr = bubbleSort(arr2);
console.log(sortedArr);
