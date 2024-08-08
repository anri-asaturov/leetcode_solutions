//https://leetcode.com/problems/majority-element/description/?envType=study-plan-v2&envId=top-interview-150

function majorityElement(nums: number[]): number {
    if (nums.length == 1) return nums[0];

    nums = nums.sort((a, b) => a - b);

    let lastNum = nums[0],
        lastCount = 1,
        largestNum = nums[0],
        largestCount = 1;

    for (let i = 1; i < nums.length; i++) {
        if (lastNum == nums[i]) {
            lastCount++;
            continue;
        }
        if (lastCount > largestCount) {
            largestCount = lastCount;
            largestNum = lastNum;
        }
        lastCount = 1;
        lastNum = nums[i];
    }
    return lastCount > largestCount ? lastNum : largestNum;
}