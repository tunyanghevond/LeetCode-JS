function isPalindrome(s) {
  s = s.toLowerCase().replace(/[\W]/g, "");
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

 function hasPalindrome(s){
  s = s.toLowerCase().replace(/[\W]/g, "");
   let length = s.length;
  for(let i = 0; i < length; i++){
    if(s[i] !== s[length - 1 - i]){
      return false
    }
    
  }
  return true;
};
console.log(hasPalindrome('ab'))
module.exports = isPalindrome;
