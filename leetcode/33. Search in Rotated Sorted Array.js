// Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand.

// (i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

// You are given a target value to search. If found in the array return its index, otherwise return -1.

// You may assume no duplicate exists in the array.

// Your algorithm's runtime complexity must be in the order of O(log n).

// Example 1:

// Input: nums = [4,5,6,7,0,1,2], target = 0
// Output: 4
// Example 2:

// Input: nums = [4,5,6,7,0,1,2], target = 3
// Output: -1

//=======================================================================================

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
  let L = 0;
  let R = nums.length - 1;
  let mid = 0;
  while(L<=R){
    mid = Math.floor(L + (R-L)/2);
    if(nums[mid]===target){return mid;}
      
    if(nums[L]<=nums[mid]){
      if(nums[L]<=target && nums[mid]>=target){
        R = mid - 1;
      }else{
        L = mid +1;
      }
    }else{
      if(target >= nums[mid] && target<=nums[R]){
        L = mid + 1;
      }else{
        R = mid - 1;
      }
    }
  }   
return -1;
};