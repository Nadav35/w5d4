Array.prototype.bubbleSort = function () {
  let result_array = this;
  let sorted = false;

  while(!sorted) {
    sorted = true;

    for (let i = 0; i < this.length - 1; i++){
      for (let j = i + 1; j < this.length ; j++) {
        if (result_array[i] > result_array[j]){
          sorted = false;
          let temp = result_array[i];
          result_array[i] = result_array[j];
          result_array[j] = temp;
        }
      }
    }

  }
  return result_array;

};

String.prototype.substring = function () {
  let result_array = [];

  for (let i = 0; i <= this.length - 1; i++){
    for (let j = i + 1; j <= this.length ; j++) {
      result_array.push(this.slice(i,j));
    }
  }
  return result_array;

};
