var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let pivot = left + (right-left) / 2;
    
    while(left <= right){
        pivot = Math.floor(left + (right-left) / 2);
        console.log(pivot)
        if(nums[pivot] === target){
            return pivot;
        } else if(target < nums[pivot]) {
            right = pivot - 1;
        } else {
            left = pivot + 1;
        }
    }
    return -1;
};