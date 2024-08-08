// https://leetcode.com/problems/merge-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
    let pos1 = m - 1;
    let pos2 = n - 1;
    for (let i = n + m - 1; i >= 0; i--) {
        if (pos1 >= 0 && nums1[pos1] > nums2[pos2]) {
            nums1[i] = nums1[pos1];
            pos1--;
        } else if (pos2 >= 0) {
            nums1[i] = nums2[pos2];
            pos2--;
        }
    }
};