var isPalindrome = function(x) {
  
    let strInt = x.toString();
      if(strInt.length <= 1){
        return true;
    }
    const mid = Math.floor(strInt.length/2);
    let left = 0;
    let right = strInt.length - 1;
    
    for(let i = 0; i < mid; i++){
        if(strInt[left] !== strInt[right]){
            return false;
        }
        left++;
        right--;
    }
    
    return true;
    
};