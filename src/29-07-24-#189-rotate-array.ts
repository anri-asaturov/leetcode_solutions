//https://leetcode.com/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150

function rotate(nums: number[], k: number): void {
    // normalizing k, because we don't need to shift more than nums.length-1 steps, 
    // that would be a cycle
    const arrLen = nums.length;
    k = k % arrLen;
    if (k == 0) return;

    let buf = nums[0]; // will hold last displaced value
    let buf2 = nums[0]; // temporary buffer for swaps
    let i = 0, pos = 0; 
    let strandStart = 0; // swaps happen in strands that can collapse on the position they started with

    // cycling the amount of times equal to count of array elements we need to shift
    while (i < arrLen) {
        // setting current position with buffered value
        buf2 = nums[pos];
        nums[pos] = buf;
        buf = buf2;
        // advancing to the next positin
        pos += k;
        // overflow
        if (pos >= arrLen) {
            pos = pos - arrLen;
        }
        // if a strand has collapsed, starting a new one
        if (i > 0 && pos == strandStart) {
            nums[pos] = buf;
            pos++;
            strandStart = pos;
            buf = nums[pos]
        }
        i++;
    }
};