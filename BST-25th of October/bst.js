function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
// this is the basic structure of the binary search tree algorithm 
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target
    } else if (arr[mid] < target) {
      left = mid + 1; // right half - more
    } else {
      right = mid - 1; // left half - less 
    }
  }

  return -1; // didn't fint the target where im searching for it
}

const nums = [1, 3, 5, 7, 9, 11];
console.log(binarySearch(nums, 7));  
console.log(binarySearch(nums, 4));  
