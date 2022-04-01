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
   const length = s.length;
  for(let i = 0; i < length/2; i++){
    if(s[i] !== s[length - 1 - i]){
      return false
    }
  }
  return true;
};
console.log(hasPalindrome('aasddsaa'))
module.exports = isPalindrome;
