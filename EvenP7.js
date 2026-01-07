function Even(arr) {
  let Numbers = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      Numbers.push(arr[i]);
    }
  }
  return Numbers;
}

console.log(Even([1,2,3,4,5,6]));  
