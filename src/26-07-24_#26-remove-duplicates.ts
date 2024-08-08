//https://leetcode.com/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

function removeDuplicates(nums: number[]): number {
    const uniq = [];

    for (let i = 0; i < nums.length; i++) {
        if (uniq.includes(nums[i])) continue;
        if(uniq.length!=i){
            nums[uniq.length] = nums[i];
        }
        uniq.push(nums[i]);
        
    }
    return uniq.length;
};

