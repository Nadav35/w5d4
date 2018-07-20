function range(start, end) {
  if (start === end) { return [start]; }
  let result = [start];
  result = result.concat(range(start + 1, end));
  return result;
}

function sumRec(array) {
  if (array.length === 1) { return array.pop(); }
  let sum = array[0];
  sum += sumRec(array.slice(1));
  return sum;
}

function exponent1(base, exp) {
  if (exp === 0) { return 1; }
  return base * exponent1(base, exp - 1);
}
//
// function exponent2(base, exp) {
//   if (exp === 0) { return 1; }
//   if (exp === 1) { return base; }
//   if (exp % 2 === 0) {
//     return exponent2(base, exp / 2) ** 2;
//   } else {
//     return base * (exponent2(base, (exp - 1) / 2) ** 2);
//   }
// }

// function fibonacci(n) {
//   if (n === 1) { return [0] }
//   if (n === 2) { return [0, 1] }
//   let memo_fib = fibonacci(n - 1)
//   return memo_fib.concat(memo_fib[memo_fib.length - 1] + memo_fib[memo_fib.length - 2]);
// }

function deepDup(arr) {
  // debugger
  let result = [];

  if (arr.length === 1) { return arr; }

  arr.forEach((el) => {

    if (typeof(el) === "object") {
      result = result.concat(deepDup(el));
    } else {
      result = result.concat(el);
    }
  });

  return result;
}

// function bsearch(arr, target) {
//   if (arr.length === 0) { return -1; }
//
//   let middle = Math.floor(arr.length / 2);
//
//   if (arr[middle] === target) {return middle;}
//   // debugger
//   switch (arr[middle] > target) {
//     case true:
//       return bsearch(arr.slice(0, middle), target);
//       break;
//     case false:
//       let bsearched = bsearch(arr.slice(middle + 1), target);
//       if (bsearched === -1) { return -1; }
//       else { return bsearched + middle + 1; }
//       break;
//   }
// }

function mergesort(arr, helper, proc) {
  // debugger
  if (arr.length === 1) { return arr; }

  if (proc === undefined) {
    proc = (x,y) => {
      return x > y;
    };
  }

  let middle = Math.floor(arr.length / 2);
  let sorted_left = mergesort(arr.slice(0, middle), helper, proc);
  let sorted_right = mergesort(arr.slice(middle), helper, proc);

  return helper(sorted_left, sorted_right, proc);
}

function mergehelper(left, right, proc) {
  let result = [];

  while (left.length > 0 && right.length > 0) {
    if (proc(left[0], right[0]) === true) {
      result.push(right.shift());
    } else {
      result.push(left.shift());
    }
  }

  return result.concat(left).concat(right);
}

function subsets (arr) {
  if (arr.length === 0) {
    return arr;
  }
  // debugger
  let first_el = [arr[0]];
  let result = subsets(arr.slice(1));
  let subs = result.map( (el) => {
    first_el.concat(el);
  });

  return result.concat(subs);
}
