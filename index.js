// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

// Example 1:

// Input: nums = [2,2,1]
// Output: 1
// Example 2:

// Input: nums = [4,1,2,1,2]
// Output: 4

let nums = [2, 2, 1];
let nums1 = [4, 1, 2, 1, 2];
function singleNumber(str) {
  let result = 0;
  for (i = 0; i < str.length; i++) {
    result ^= str[i];
  }

  return result;
}

console.log(singleNumber(nums));
console.log(singleNumber(nums1));
