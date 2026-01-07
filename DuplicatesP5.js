function Duplicates(arr) {

  let New = [];

  for (let i = 0; i < arr.length; i++) {
    if (!New.includes(arr[i])) {
      New.push(arr[i]);
    }
  }

  return New;
}

console.log(Duplicates([1, 2, 2, 3, 4, 4]));  
