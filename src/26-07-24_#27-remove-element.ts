//https://leetcode.com/problems/remove-element/description/?envType=study-plan-v2&envId=top-interview-150

function removeElement(nums: number[], val: number): number {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == val) {
            continue;
        }
        if (i != k) {
            nums[k] = nums[i];
            nums[i] = val;
        }
        k++;
    }
    return k; 
};