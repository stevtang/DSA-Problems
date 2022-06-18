/**
 * 
 * Accepts: string s, string t
 * Checks if s is anagram of t
 * Returns: boolean true/false
 * 
 * 
 */


var isAnagram = function(s, t) {
    
    if(s.length !== t.length) return false;
    
    const sObj = {};
    const tObj = {};
    
    for(let i=0; i<s.length;i++){
        sObj[s[i]] =(sObj[s[i]] || 0) + 1;
    }
    for(let i=0; i<t.length;i++){
        tObj[t[i]] = (tObj[t[i]] || 0) + 1;
    }

    for(let char in sObj){
        if(sObj[char] !== tObj[char]) return false;
    }
  
    return true;
};