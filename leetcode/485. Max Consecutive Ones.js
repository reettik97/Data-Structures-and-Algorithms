

// Share
// Given a binary array, find the maximum number of consecutive 1s in this array.

// Example 1:
// Input: [1,1,0,1,1,1]
// Output: 3
// Explanation: The first two digits or the last three digits are consecutive 1s.
//     The maximum number of consecutive 1s is 3.
// Note:

// The input array will only contain 0 and 1.
// The length of input array is a positive integer and will not exceed 10,000

//====================================================================================
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let c = 0
    for(let num of nums){
        if(num==0){
            max = (max>c)?max : c;
            c = 0 ;
        }else{
            c += 1;
        }
    }
     max = (max>c)?max : c;
    return max;
};