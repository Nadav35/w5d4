Array.prototype.myEach = function(callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i]);
  }
};

Array.prototype.myMap = function(callback) {
  const result = [];
  this.myEach(element => result.push(callback(element)));
  return result;
};

Array.prototype.myReduce = function(func, initVal) {
  let accum;
  let arr;
  if (initVal === undefined) {
    accum = this[0];
    arr = this.slice(1);
  } else {
    accum = initVal;
    arr = this;
  }
  arr.myEach(element => accum = func(accum,element));
  return accum;
};
