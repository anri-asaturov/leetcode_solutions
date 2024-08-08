//https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

function removeDuplicates(nums: number[]): number {
    let head = 0;// writing head
    let currentCount = 0; // current number count
    let currentNum; // for which we count currentCount
    for(let i=0;i<nums.length;i++){
        // number changed
        if(nums[i]!=currentNum) {
            if(i!=head)nums[head]=nums[i]; // todo: try doing this conditionally
            head++;
            currentNum=nums[i];
            currentCount=1;
            continue;
        }
        currentCount++;
        //so far in the allowed duplicate limit
        if(currentCount<3){
            if(i!=head)nums[head]=nums[i];
            head++;
            continue;
        } 
        // found duplicate
    }
    return head;
};