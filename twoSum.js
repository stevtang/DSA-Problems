var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let complement = target - nums[i];
        let found = nums.indexOf(complement, i+1);
        if(found !== -1){
            return [i, found];
        }
    }
    return [0,0];
};