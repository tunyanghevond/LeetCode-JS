//[1,2,3,1] 4
function rob(nums) {
    // let prev = 0;
    // let cur = 0;
    // let temp;
    
    // for(let i of nums) {
    //     temp = cur; // temp = 0 // temp = 1 // temp = 2 // temp = 4
    //     cur = Math.max(i+prev, cur); // cur = Math.max(1 + 0, 0) // cur = max(2+0, 1)// cur = max(3+1,2) 
    //     prev = temp;// prev = 0 // prev = 1 // prev = 2 // prev = 4
    // }
    //   return cur;
    //[1,2,3,1] 4
    if(nums.length === 0) return 0;
    if(nums.length === 1) return nums[0];
    if(nums.length === 2) return nums[1];
    
    let maxLoot = [nums[0], Math.max(nums[0], nums[1])];
    for(let i = 2; i < nums.length; i++){
        maxLoot.push(Math.max(nums[i] + maxLoot[i-2], maxLoot[i-1]))
    }
   return maxLoot.pop()
}
console.log(rob([1,2,3,5,6]))
module.exports = rob;
