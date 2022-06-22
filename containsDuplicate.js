var containsDuplicate = function(nums) {
    let freqCount = {};
    for(let i=0;i<nums.length;i++){
        freqCount[nums[i]] ? freqCount[nums[i]] += 1 : freqCount[nums[i]] = 1;
    }
    for(let num in freqCount){
        if(freqCount[num] > 1){
            return true;
        }
    }
    console.log(freqCount)
    return false;
};