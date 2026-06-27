class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let seen = new Set();
        for (let i=0; i < nums.length; i++) {
            const current = nums[i];

            if (seen.has(current)){
                return true;
            }

            seen.add(current);
        }

        return false;
    }
}
