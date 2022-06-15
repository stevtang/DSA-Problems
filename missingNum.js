/**
 * 
 * Accepts: array of ints => nums
 * Returns: missing num => int
 */

const missingNumber = function(nums) {
    //Gauss formula to sum nums 
    let expectedSum =  (((nums.length) * (nums.length+1))/2);

    let actualSum = nums.reduce(
  (previousValue, currentValue) => previousValue + currentValue);
    return expectedSum - actualSum;
};